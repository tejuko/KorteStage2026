import {
  animatePageEnter,
  animatePageTurn,
  bindDragSwipe,
  bindSwipe,
  initCinematicEffects
} from './effectsSystem.js'

const sections = document.querySelectorAll('.section')
const navButtons = document.querySelectorAll('.top-nav button')

navButtons.forEach(button => {

  button.addEventListener('click', () => {

    const target = button.dataset.section

    sections.forEach(section => {
      section.classList.remove('active', 'section-enter')
    })

    document
      .getElementById(target)
      .classList.add('active')

    document
      .getElementById(target)
      .classList.add('section-enter')

  })

})


// ==========================
// DAILY LOGS
// ==========================

const dailyLogs = [
  '2026-04-13.md',
  '2026-04-14.md',
  '2026-04-15.md',
  '2026-04-16.md',
  '2026-04-17.md',
  '2026-04-20.md',
  '2026-04-21.md',
  '2026-04-22.md',
  '2026-04-23.md',
  '2026-04-24.md',
  '2026-04-28.md',
  '2026-04-29.md',
  '2026-04-30.md',
  '2026-05-01.md',
  '2026-05-04.md',
  '2026-05-05.md',
  '2026-05-06.md',
  '2026-05-07.md',
  '2026-05-08.md',
  '2026-05-11.md',
]

let currentDailyIndex = 0
let dailyIsTurning = false
const dailyLogCache = new Map()

const dailyPage = document.getElementById('dailyPage')

const nextDaily = document.getElementById('nextDaily')
const prevDaily = document.getElementById('prevDaily')
const dailyArchiveGrid = document.getElementById('dailyArchiveGrid')
const dailyModal = document.getElementById('dailyModal')
const closeDailyModal = document.getElementById('closeDailyModal')
const modalBackdrop = document.getElementById('modalBackdrop')
const dailyPageIndicator = document.getElementById('dailyPageIndicator')


async function getDailyLog(filename) {

  if (dailyLogCache.has(filename)) {
    return dailyLogCache.get(filename)
  }

  const response = await fetch(`./logs/daily/${filename}`)

  const markdown = await response.text()

  const log = {
    filename,
    markdown,
    html: marked.parse(markdown),
    title: getMarkdownTitle(markdown, filename),
    preview: getMarkdownPreview(markdown),
    date: filename.replace('.md', '')
  }

  dailyLogCache.set(filename, log)

  return log

}


async function loadMarkdownLog(filename, direction = 'next', animate = true) {

  if (dailyIsTurning) {
    return
  }

  dailyIsTurning = true

  const log = await getDailyLog(filename)

  if (animate) {
    await animatePageTurn(dailyPage, direction)
  }

  dailyModal.scrollTo({
    top: 0,
    behavior: 'auto'
  })

  dailyPage.innerHTML = `
    <div class="modal-page-meta">
      <span>${log.date}</span>
      <span>${currentDailyIndex + 1} / ${dailyLogs.length}</span>
    </div>
    <div class="markdown-page">
      ${log.html}
    </div>
  `

  dailyPageIndicator.textContent =
    `PAGINA ${currentDailyIndex + 1} / ${dailyLogs.length}`

  if (animate) {
    animatePageEnter(dailyPage, direction)
  }

  window.setTimeout(() => {
    dailyIsTurning = false
  }, animate ? 390 : 0)

}


renderDailyArchiveGrid()


async function renderDailyArchiveGrid() {

  const logs = await Promise.all(
    dailyLogs.map(filename => getDailyLog(filename))
  )

  dailyArchiveGrid.innerHTML = logs
    .map((log, index) => `
      <article class="daily-record-card" data-index="${index}" tabindex="0">
        <div class="record-scan"></div>
        <span class="record-date">${log.date}</span>
        <h3>${log.title}</h3>
        <span class="record-code">RECORD ${String(index + 1).padStart(2, '0')}</span>
      </article>
    `)
    .join('')

  dailyArchiveGrid.querySelectorAll('.daily-record-card').forEach(card => {
    card.addEventListener('click', () => openDailyModal(Number(card.dataset.index)))
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openDailyModal(Number(card.dataset.index))
      }
    })
  })

  initCinematicEffects()

}


async function openDailyModal(index) {

  currentDailyIndex = index
  dailyModal.classList.add('active')
  dailyModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')

  await loadMarkdownLog(dailyLogs[currentDailyIndex], 'next', false)

}


function closeModal() {

  dailyModal.classList.remove('active')
  dailyModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')

}


nextDaily.addEventListener('click', () => {

  if (dailyIsTurning || !dailyModal.classList.contains('active')) {
    return
  }

  currentDailyIndex++

  if (currentDailyIndex >= dailyLogs.length) {
    currentDailyIndex = 0
  }

  loadMarkdownLog(dailyLogs[currentDailyIndex], 'next')

})


prevDaily.addEventListener('click', () => {

  if (dailyIsTurning || !dailyModal.classList.contains('active')) {
    return
  }

  currentDailyIndex--

  if (currentDailyIndex < 0) {
    currentDailyIndex = dailyLogs.length - 1
  }

  loadMarkdownLog(dailyLogs[currentDailyIndex], 'prev')

})


closeDailyModal.addEventListener('click', closeModal)
modalBackdrop.addEventListener('click', closeModal)

document.addEventListener('keydown', event => {
  if (!dailyModal.classList.contains('active')) {
    return
  }

  if (event.key === 'Escape') {
    closeModal()
  }

  if (event.key === 'ArrowRight') {
    nextDaily.click()
  }

  if (event.key === 'ArrowLeft') {
    prevDaily.click()
  }
})


function getMarkdownTitle(markdown, filename) {

  const heading = markdown
    .split('\n')
    .find(line => line.startsWith('# '))

  if (!heading) {
    return filename.replace('.md', '')
  }

  return heading
    .replace('# ', '')
    .replace(/^Daglog\s*[—-]\s*/i, '')
    .trim()

}


function getMarkdownPreview(markdown) {

  const text = markdown
    .replace(/^#+\s+/gm, '')
    .replace(/[`*_>#-]/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .slice(1)
    .join(' ')

  return text.length > 132
    ? `${text.slice(0, 132)}...`
    : text

}


// ==========================
// WEEKLY LOGS
// ==========================

loadWeeklyLogs()

function loadWeeklyLogs() {
  // Weekly archive rendering happens in the chapter system below.
  // This keeps the older call alive without interrupting the app.
}

// ==========================
// DIGITAL ARCHIVE SYSTEM
// ==========================

const archiveData = [

  {
    week: 'WEEK 16',
    title: 'De Start',
    reflection: '2026-W16.md',

    days: [
      '2026-04-13.md',
      '2026-04-14.md',
      '2026-04-15.md',
      '2026-04-16.md',
      '2026-04-17.md',
    ]
  },

  {
    week: 'WEEK 17',
    title: 'ACF & WordPress',
    reflection: '2026-W17.md',

    days: [
      '2026-04-20.md',
      '2026-04-21.md',
      '2026-04-22.md',
      '2026-04-23.md',
      '2026-04-24.md',
    ]
  },

  {
    week: 'WEEK 18',
    title: 'Ontwerpen voor Bouwen',
    reflection: '2026-W18.md',

    days: [
      '2026-04-28.md',
      '2026-04-29.md',
      '2026-04-30.md',
      '2026-05-01.md',
    ]
  },

  {
    week: 'WEEK 19',
    title: 'Productieritme',
    reflection: '2026-W19.md',

    days: [
      '2026-05-04.md',
      '2026-05-05.md',
      '2026-05-06.md',
      '2026-05-07.md',
      '2026-05-08.md',
    ]
  },

  {
    week: 'WEEK 20',
    title: 'Voortgang',
    reflection: '2026-W20.md',

    days: [
      '2026-05-11.md',
    ]
  }

]


const chapterGrid = document.getElementById('chapterGrid')

const bookView = document.getElementById('bookView')

const bookPage = document.getElementById('bookPage')

const pageIndicator = document.getElementById('pageIndicator')

const closeBook = document.getElementById('closeBook')

const nextPage = document.getElementById('nextPage')

const prevPage = document.getElementById('prevPage')


let currentWeek = null
let currentPage = 0
let bookIsTurning = false


// CREATE CHAPTER CARDS

archiveData.forEach((chapter, index) => {

  chapterGrid.innerHTML += `

    <article class="chapter-card interactive-depth"
             data-index="${index}">

      <div class="chapter-glow"></div>

      <span class="chapter-number">
        ${chapter.week}
      </span>

      <h3>
        ${chapter.title}
      </h3>

      <p>
        ${chapter.days.length + 1} pagina's
      </p>

      <button>
        OPEN
      </button>

    </article>

  `

})


// OPEN CHAPTER

document
  .querySelectorAll('.chapter-card')
  .forEach(card => {

    card.addEventListener('click', async () => {

      currentWeek = archiveData[
        card.dataset.index
      ]

      currentPage = 0

      chapterGrid.classList.add('hidden')

      bookView.classList.remove('hidden')

      await renderBookPage()

    })

})


// RENDER PAGE

function getCurrentWeekPages() {

  return [
    {
      label: 'WEEKLOG',
      path: `./logs/weekly/${currentWeek.reflection}`
    },
    ...currentWeek.days.map(day => ({
      label: day.replace('.md', ''),
      path: `./logs/daily/${day}`
    }))
  ]

}


async function getBookPageHtml(page) {

  const response =
    await fetch(page.path)

  const markdown =
    await response.text()

  return marked.parse(markdown)

}


async function renderBookPage(direction = 'next', animate = true) {

  if (bookIsTurning) {
    return
  }

  bookIsTurning = true

  const pages =
    getCurrentWeekPages()

  const page =
    pages[currentPage]

  const html =
    await getBookPageHtml(page)

  if (animate) {
    await animatePageTurn(bookPage, direction)
  }

  bookView.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })

  bookPage.innerHTML = `
    <div class="modal-page-meta">
      <span>${currentWeek.week}</span>
      <span>${page.label}</span>
    </div>
    <div class="page-content">
      ${html}
    </div>
  `

  if (animate) {
    animatePageEnter(bookPage, direction)
  }

  pageIndicator.innerHTML = `
    PAGINA ${currentPage + 1}
    /
    ${pages.length}
  `

  window.setTimeout(() => {
    bookIsTurning = false
  }, animate ? 390 : 0)

}


// NEXT PAGE

nextPage.addEventListener('click', async () => {

  if (bookIsTurning || !currentWeek) {
    return
  }

  currentPage++

  const pages =
    getCurrentWeekPages()

  if (
    currentPage >= pages.length
  ) {
    currentPage = 0
  }

  await renderBookPage('next')

})


// PREVIOUS PAGE

prevPage.addEventListener('click', async () => {

  if (bookIsTurning || !currentWeek) {
    return
  }

  currentPage--

  if (currentPage < 0) {
    currentPage =
      getCurrentWeekPages().length - 1
  }

  await renderBookPage('prev')

})


// CLOSE BOOK

closeBook.addEventListener('click', () => {

  bookView.classList.add('hidden')

  chapterGrid.classList.remove('hidden')

})

// ==========================
// PDF ARTIFACT
// ==========================

const artifactContainer = document.createElement('div')

artifactContainer.classList.add('artifact-container')

artifactContainer.innerHTML = `
  <a href="./assets/pdfs/stageverslag.pdf"
     download
     class="artifact-card">

      <div class="artifact-glow"></div>

      <h2>STAGEVERSLAG</h2>

      <p>
        Het volledige stageverslag als downloadbaar PDF.
      </p>

      <span>PDF DOWNLOADEN</span>

  </a>
`

document.body.appendChild(artifactContainer)

const artifactSectionContainer = document.getElementById('artifactContainer')

if (artifactSectionContainer) {
  artifactSectionContainer.innerHTML = artifactContainer.innerHTML
  artifactContainer.remove()
}

bindSwipe(dailyPage, () => nextDaily.click(), () => prevDaily.click())
bindDragSwipe(dailyPage, () => nextDaily.click(), () => prevDaily.click())
bindSwipe(bookPage, () => nextPage.click(), () => prevPage.click())
bindDragSwipe(bookPage, () => nextPage.click(), () => prevPage.click())

requestAnimationFrame(() => {
  initCinematicEffects()
})
