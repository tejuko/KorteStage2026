let cursorInitialized = false
let parallaxInitialized = false
let artifactFeedbackInitialized = false

export function initCinematicEffects() {
  createParticles()
  initCursorGlow()
  initParallaxDepth()
  initInteractiveTilt()
  initArtifactFeedback()
}

export function animatePageTurn(element, direction = 'next') {
  if (!element) {
    return Promise.resolve()
  }

  if (!element.textContent.trim()) {
    return Promise.resolve()
  }

  const exitClass = direction === 'prev'
    ? 'turn-exit-prev'
    : 'turn-exit-next'

  element.classList.remove('turn-enter-prev', 'turn-enter-next', 'turn-exit-prev', 'turn-exit-next')
  element.classList.add(exitClass)

  return waitForDuration(300).then(() => {
    element.classList.remove(exitClass)
  })
}

export function animatePageEnter(element, direction = 'next') {
  if (!element) {
    return
  }

  const enterClass = direction === 'prev'
    ? 'turn-enter-prev'
    : 'turn-enter-next'

  element.classList.remove('turn-enter-prev', 'turn-enter-next', 'turn-exit-prev', 'turn-exit-next')
  element.classList.add(enterClass)

  waitForDuration(380).then(() => {
    element.classList.remove(enterClass)
  })
}

export function bindSwipe(element, onLeft, onRight) {
  if (!element) {
    return
  }

  let startX = 0
  let startY = 0

  element.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
  }, { passive: true })

  element.addEventListener('touchend', event => {
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return
    }

    if (deltaX < 0) {
      onLeft()
    } else {
      onRight()
    }
  }, { passive: true })
}

export function bindDragSwipe(element, onLeft, onRight) {
  if (!element) {
    return
  }

  let startX = 0
  let startY = 0
  let currentX = 0
  let isDragging = false

  element.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') {
      return
    }

    if (event.target.closest('button, a')) {
      return
    }

    isDragging = true
    startX = event.clientX
    startY = event.clientY
    currentX = 0
    element.setPointerCapture(event.pointerId)
  })

  element.addEventListener('pointermove', event => {
    if (!isDragging) {
      return
    }

    const deltaX = event.clientX - startX
    const deltaY = event.clientY - startY

    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.2) {
      return
    }

    currentX = deltaX
  })

  element.addEventListener('pointerup', event => {
    if (!isDragging) {
      return
    }

    isDragging = false
    element.releasePointerCapture(event.pointerId)

    const shouldMove = Math.abs(currentX) > 72

    if (!shouldMove) {
      return
    }

    if (currentX < 0) {
      onLeft()
    } else {
      onRight()
    }
  })

  element.addEventListener('pointercancel', () => {
    isDragging = false
  })
}

function waitForDuration(duration) {
  return new Promise(resolve => {
    window.setTimeout(resolve, duration)
  })
}

function createParticles() {
  const field = document.getElementById('particleField')

  if (!field || field.children.length) {
    return
  }

  const particleCount = window.matchMedia('(max-width: 700px)').matches ? 18 : 34

  for (let index = 0; index < particleCount; index++) {
    const particle = document.createElement('span')

    particle.style.setProperty('--x', `${Math.random() * 100}%`)
    particle.style.setProperty('--delay', `${Math.random() * -18}s`)
    particle.style.setProperty('--duration', `${14 + Math.random() * 18}s`)
    particle.style.setProperty('--size', `${2 + Math.random() * 4}px`)

    field.appendChild(particle)
  }
}

function initCursorGlow() {
  const cursor = document.getElementById('cursorGlow')

  if (cursorInitialized || !cursor || window.matchMedia('(pointer: coarse)').matches) {
    return
  }

  cursorInitialized = true

  let targetX = window.innerWidth / 2
  let targetY = window.innerHeight / 2
  let currentX = targetX
  let currentY = targetY

  document.body.classList.add('has-custom-cursor')

  window.addEventListener('mousemove', event => {
    targetX = event.clientX
    targetY = event.clientY
  })

  document.addEventListener('mouseover', event => {
    cursor.classList.toggle('is-hovering', Boolean(event.target.closest('button, a, .project-card, .chapter-card, .artifact-card, .daily-record-card')))
  })

  function render() {
    currentX += (targetX - currentX) * 0.18
    currentY += (targetY - currentY) * 0.18
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
    requestAnimationFrame(render)
  }

  render()
}

function initParallaxDepth() {
  const glow = document.querySelector('.ambient-glow')
  const hero = document.querySelector('.hero')

  if (parallaxInitialized || !glow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  parallaxInitialized = true

  window.addEventListener('mousemove', event => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2
    const y = (event.clientY / window.innerHeight - 0.5) * 2

    glow.style.transform = `translate3d(${x * 42}px, ${y * 32}px, 0)`

    if (hero) {
      hero.style.setProperty('--depth-x', `${x * 8}px`)
      hero.style.setProperty('--depth-y', `${y * 8}px`)
    }
  }, { passive: true })
}

function initInteractiveTilt() {
  const tiltItems = document.querySelectorAll('.project-card, .chapter-card, .artifact-card, .daily-record-card')

  tiltItems.forEach(item => {
    if (item.dataset.tiltReady === 'true') {
      return
    }

    item.dataset.tiltReady = 'true'

    item.addEventListener('mousemove', event => {
      const rect = item.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      item.style.setProperty('--tilt-x', `${y * -8}deg`)
      item.style.setProperty('--tilt-y', `${x * 10}deg`)
      item.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`)
      item.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`)
    })

    item.addEventListener('mouseleave', () => {
      item.style.setProperty('--tilt-x', '0deg')
      item.style.setProperty('--tilt-y', '0deg')
    })
  })
}

function initArtifactFeedback() {
  if (artifactFeedbackInitialized) {
    return
  }

  artifactFeedbackInitialized = true

  document.addEventListener('click', event => {
    const artifact = event.target.closest('.artifact-card')

    if (!artifact) {
      return
    }

    artifact.classList.add('is-downloading')

    window.setTimeout(() => {
      artifact.classList.remove('is-downloading')
    }, 1300)
  })
}
