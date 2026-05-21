import {
  animatePageEnter,
  animatePageTurn,
  bindDragSwipe,
  bindSwipe,
  initCinematicEffects
} from './effectsSystem.js'


// ============================================================
// OPDRACHTEN — voeg je opdrachten hieronder toe.
// `file` = bestandsnaam in logs/opdrachten/ (zonder pad)
// `status` = 'afgerond' of 'lopend'
// ============================================================

const opdrachten = [
  {
    file: 'wordpress-menu-sitemap.md',
    client: 'Sabé Verpakkingen',
    title: 'WordPress Menu & Sitemap',
    description:
      'Onderzoek en oplossing voor verdwijnende navigatielinks naast de "Ons assortiment" dropdown. Daarnaast lastmod-datums toegevoegd aan subcategoriepagina\'s in de sitemap voor betere SEO-indexering.',
    status: 'afgerond',
    tags: ['WordPress', 'PHP', 'SEO', 'Yoast']
  },
  {
    file: 'barbie-acf-project.md',
    client: 'Intern project',
    title: 'Barbie ACF Project',
    description:
      'Custom post type architectuur opgezet met Advanced Custom Fields. Relationship systems en een thematisch WordPress archief gebouwd als verdiepingsopdracht in WordPress-development.',
    status: 'afgerond',
    tags: ['WordPress', 'ACF', 'PHP', 'Custom CPT']
  },
  {
    file: 'seo-landingspagina.md',
    client: 'Klant',
    title: 'SEO Landingspagina',
    description:
      'Figma-ontwerp volledig omgezet naar een WordPress-pagina via Bricks Builder. Van wireframe tot live implementatie — inclusief responsive aanpassingen en SEO-structuur.',
    status: 'afgerond',
    tags: ['Figma', 'Bricks Builder', 'WordPress', 'SEO']
  },
  {
    file: 'intern-linkplan.md',
    client: 'Sabé Verpakkingen',
    title: 'Intern Linkplan',
    description:
      'Grootschalige implementatie van interne links op de website van Sabé Verpakkingen. Inclusief procesverbeteringen, werkdocumentatie en afstemming met het team.',
    status: 'afgerond',
    tags: ['SEO', 'WordPress', 'Contentstrategie']
  }

  // ============================================================
  // VOEG HIER JE ANDERE 4 OPDRACHTEN TOE — kopieer dit blok:
  //
  // ,{
  //   file: 'jouw-opdracht.md',
  //   client: 'Klantnaam',
  //   title: 'Opdracht Titel',
  //   description: 'Korte beschrijving van de opdracht.',
  //   status: 'afgerond',
  //   tags: ['Tag 1', 'Tag 2']
  // }
  // ============================================================
]


// State
let currentIndex = 0
let isTurning = false
const opdrachtCache = new Map()


// DOM refs
const opdrachtenGrid = document.getElementById('opdrachtenGrid')
const opdrachtModal = document.getElementById('opdrachtModal')
const opdrachtPage = document.getElementById('opdrachtPage')
const opdrachtIndicator = document.getElementById('opdrachtIndicator')
const closeOpdrachtModal = document.getElementById('closeOpdrachtModal')
const modalBackdrop = document.getElementById('modalBackdrop')
const nextOpdracht = document.getElementById('nextOpdracht')
const prevOpdracht = document.getElementById('prevOpdracht')


async function getOpdracht(file) {
  if (opdrachtCache.has(file)) {
    return opdrachtCache.get(file)
  }

  try {
    const response = await fetch(`./logs/opdrachten/${file}`)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const markdown = await response.text()

    const result = {
      file,
      markdown,
      html: marked.parse(markdown)
    }

    opdrachtCache.set(file, result)
    return result
  } catch (error) {
    return {
      file,
      markdown: '',
      html: `<h1>Opdracht nog niet beschikbaar</h1>
             <p>Het bestand <code>logs/opdrachten/${file}</code> kon niet worden geladen.</p>`
    }
  }
}


function statusLabel(status) {
  return status === 'lopend' ? 'Lopend' : 'Afgerond'
}


function renderCards() {
  opdrachtenGrid.innerHTML = opdrachten
    .map((opdracht, index) => `
      <article class="opdracht-card" data-index="${index}" tabindex="0" role="button" aria-label="Open opdracht: ${opdracht.title}">
        <div class="opdracht-meta">
          <span class="opdracht-client">${opdracht.client}</span>
          <span class="opdracht-status status-${opdracht.status}">${statusLabel(opdracht.status)}</span>
        </div>
        <h2 class="opdracht-title">${opdracht.title}</h2>
        <p class="opdracht-desc">${opdracht.description}</p>
        <div class="opdracht-tags">
          ${opdracht.tags.map(tag => `<span class="opdracht-tag">${tag}</span>`).join('')}
        </div>
      </article>
    `)
    .join('')

  opdrachtenGrid.querySelectorAll('.opdracht-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.index)))
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openModal(Number(card.dataset.index))
      }
    })
  })
}


async function loadOpdracht(direction = 'next', animate = true) {
  if (isTurning) return
  isTurning = true

  const opdracht = opdrachten[currentIndex]
  const data = await getOpdracht(opdracht.file)

  if (animate) {
    await animatePageTurn(opdrachtPage, direction)
  }

  opdrachtModal.scrollTo({ top: 0, behavior: 'auto' })

  opdrachtPage.innerHTML = `
    <div class="modal-page-meta">
      <span>${opdracht.client}</span>
      <span>${currentIndex + 1} / ${opdrachten.length}</span>
    </div>
    <div class="markdown-page">
      ${data.html}
    </div>
  `

  opdrachtIndicator.textContent =
    `OPDRACHT ${currentIndex + 1} / ${opdrachten.length}`

  if (animate) {
    animatePageEnter(opdrachtPage, direction)
  }

  window.setTimeout(() => {
    isTurning = false
  }, animate ? 390 : 0)
}


async function openModal(index) {
  currentIndex = index
  opdrachtModal.classList.add('active')
  opdrachtModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  await loadOpdracht('next', false)
}


function closeModalFn() {
  opdrachtModal.classList.remove('active')
  opdrachtModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
}


nextOpdracht.addEventListener('click', () => {
  if (isTurning || !opdrachtModal.classList.contains('active')) return
  currentIndex++
  if (currentIndex >= opdrachten.length) currentIndex = 0
  loadOpdracht('next')
})


prevOpdracht.addEventListener('click', () => {
  if (isTurning || !opdrachtModal.classList.contains('active')) return
  currentIndex--
  if (currentIndex < 0) currentIndex = opdrachten.length - 1
  loadOpdracht('prev')
})


closeOpdrachtModal.addEventListener('click', closeModalFn)
modalBackdrop.addEventListener('click', closeModalFn)


document.addEventListener('keydown', event => {
  if (!opdrachtModal.classList.contains('active')) return

  if (event.key === 'Escape') closeModalFn()
  if (event.key === 'ArrowRight') nextOpdracht.click()
  if (event.key === 'ArrowLeft') prevOpdracht.click()
})


renderCards()
bindSwipe(opdrachtPage, () => nextOpdracht.click(), () => prevOpdracht.click())
bindDragSwipe(opdrachtPage, () => nextOpdracht.click(), () => prevOpdracht.click())

requestAnimationFrame(() => {
  initCinematicEffects()
})
