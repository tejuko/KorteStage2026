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

    navButtons.forEach(btn => btn.classList.remove('active'))
    button.classList.add('active')

    document
      .getElementById(target)
      .classList.add('active')

    document
      .getElementById(target)
      .classList.add('section-enter')

  })

})

// Markeer de knop van de standaard-actieve sectie bij het laden
const initialSection = document.querySelector('.section.active')?.id
navButtons.forEach(button => {
  if (button.dataset.section === initialSection) {
    button.classList.add('active')
  }
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
  '2026-05-12.md',
  '2026-05-13.md',
  '2026-05-15.md',
  '2026-05-18.md',
  '2026-05-19.md',
  '2026-05-20.md',
  '2026-05-21.md',
  '2026-05-22.md',
  '2026-05-26.md',
  '2026-05-27.md',
  '2026-05-28.md',
  '2026-05-29.md',
  '2026-06-01.md',
  '2026-06-02.md',
  '2026-06-03.md',
  '2026-06-04.md',
  '2026-06-05.md',
  '2026-06-08.md',
  '2026-06-09.md',
  '2026-06-10.md',
  '2026-06-11.md',
  '2026-06-12.md',
  '2026-06-22.md',
  '2026-06-23.md',
  '2026-06-24.md',
  '2026-06-25.md',
  '2026-06-26.md',
  '2026-06-29.md',
  '2026-06-30.md',
  '2026-07-01.md',
  '2026-07-02.md',
  '2026-07-03.md',
  '2026-07-06.md',
]

let currentDailyIndex = 0
let dailyIsTurning = false
const dailyLogCache = new Map()


function formatDate(text) {
  return text.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3/$2/$1')
}

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
    date: formatDate(filename.replace('.md', ''))
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
    return formatDate(filename.replace('.md', ''))
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
      '2026-05-12.md',
      '2026-05-13.md',
      '2026-05-15.md',
    ]
  },

  {
    week: 'WEEK 21',
    title: 'Verdieping',
    reflection: '2026-W21.md',

    days: [
      '2026-05-18.md',
      '2026-05-19.md',
      '2026-05-20.md',
      '2026-05-21.md',
      '2026-05-22.md',
    ]
  },

  {
    week: 'WEEK 22',
    title: 'Evaluatie & Gesprek',
    reflection: '2026-W22.md',

    days: [
      '2026-05-26.md',
      '2026-05-27.md',
      '2026-05-28.md',
      '2026-05-29.md',
    ]
  },

  {
    week: 'WEEK 23',
    title: 'Dynamische SEO-pagina',
    reflection: '2026-W23.md',

    days: [
      '2026-06-01.md',
      '2026-06-02.md',
      '2026-06-03.md',
      '2026-06-04.md',
      '2026-06-05.md',
    ]
  },

  {
    week: 'WEEK 24',
    title: 'Template & Case Study',
    reflection: '2026-W24.md',

    days: [
      '2026-06-08.md',
      '2026-06-09.md',
      '2026-06-10.md',
      '2026-06-11.md',
      '2026-06-12.md',
    ]
  },

  {
    week: 'WEEK 25',
    title: 'Ziekteweek',
    reflection: '2026-W25.md',

    days: []
  },

  {
    week: 'WEEK 26',
    title: 'Afwerking & Case Study',
    reflection: '2026-W26.md',

    days: [
      '2026-06-22.md',
      '2026-06-23.md',
      '2026-06-24.md',
      '2026-06-25.md',
      '2026-06-26.md',
    ]
  },

  {
    week: 'WEEK 27',
    title: 'Afronden & Opstarten',
    reflection: '2026-W27.md',

    days: [
      '2026-06-29.md',
      '2026-06-30.md',
      '2026-07-01.md',
      '2026-07-02.md',
      '2026-07-03.md',
    ]
  },

  {
    week: 'WEEK 28',
    title: 'Presentatie & Afronding',
    reflection: '2026-W28.md',

    days: [
      '2026-07-06.md',
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
      label: formatDate(day.replace('.md', '')),
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
// PDF ARTEFACTEN
// ==========================

const artefacten = [
  {
    file: 'stageverslag.pdf',
    title: 'STAGEVERSLAG',
    description: 'Het volledige stageverslag als downloadbaar PDF.'
  },
  {
    file: 'Stageplan_Tess_Kollof.pdf',
    title: 'STAGEPLAN',
    description: 'Mijn oorspronkelijke stageplan met de vijf leerdoelen — de basis van dit stageverslag.'
  },
  {
    file: 'feedback-danique-w19.pdf',
    title: 'FEEDBACK DANIQUE',
    description: 'Halverwege-feedback van bedrijfsbegeleider Danique Lammertink — ingevuld 06/05/2026 (week 19).'
  },
  {
    file: 'feedback-rico-w19.pdf',
    title: 'FEEDBACK RICO',
    description: 'Halverwege-feedback van naaste collega Rico Toet — ingevuld 08/05/2026 (week 19).'
  },
  {
    file: 'laatste-feedback-danique-w28.pdf',
    title: 'LAATSTE FEEDBACK DANIQUE',
    description: 'Eindfeedback van bedrijfsbegeleider Danique Lammertink — ingevuld 09-07-2026 (week 28).'
  },
  {
    file: 'laatste-feedback-rico-w28.pdf',
    title: 'LAATSTE FEEDBACK RICO',
    description: 'Eindfeedback van naaste collega Rico Toet — ingevuld 09-07-2026 (week 28).'
  }

]


const artifactSectionContainer = document.getElementById('artifactContainer')

if (artifactSectionContainer) {
  artifactSectionContainer.innerHTML = artefacten
    .map(item => `
      <a href="./assets/pdfs/${item.file}" download class="artifact-card">
        <div class="artifact-glow"></div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>PDF DOWNLOADEN</span>
      </a>
    `)
    .join('')
}

// ==========================
// INTERVIEWS
// ==========================

const interviews = [
  {
    file: 'interview-seo.md',
    topic: 'SEO',
    title: 'Interview — SEO',
    code: 'INTERVIEW 01',
    description: 'Een gesprek met Yannick (AI Search) over hoe SEO in de praktijk werkt — van zoekwoorden en content tot de technische keuzes erachter.'
  },
  {
    file: 'interview-cro.md',
    topic: 'CRO',
    title: 'Interview — CRO',
    code: 'INTERVIEW 02',
    description: 'Een gesprek met Rico (CRO) over conversieoptimalisatie — bezoekersgedrag, vertrouwen en kleine aanpassingen met groot effect.'
  },
  {
    file: 'analyse-1-linkplan.md',
    topic: 'Analyse · Linkplan',
    title: 'Analyse — Sabé intern linkplan',
    code: 'ANALYSE 01',
    description: 'Analyse van het Sabé-linkplan: hoe een SEO-actieplan op de frontend pas waarde krijgt als de uitvoerder per link meedenkt over de bezoeker.'
  },
  {
    file: 'analyse-2-seo-frontend.md',
    topic: 'Analyse · SEO',
    title: 'Analyse — SEO → frontend',
    code: 'ANALYSE 02',
    description: 'Op basis van het Yannick-interview: hoe een SEO-strategie zich vertaalt naar concrete frontend-keuzes (rendering, headings, Core Web Vitals).'
  },
  {
    file: 'analyse-3-cro-frontend.md',
    topic: 'Analyse · CRO',
    title: 'Analyse — CRO → frontend',
    code: 'ANALYSE 03',
    description: 'Op basis van het Rico-interview: hoe CRO zich vertaalt naar de frontend — helderheid, vertrouwen, CTA en de eerste schermvulling.'
  },
  {
    file: 'feedbackoverzicht.md',
    topic: 'Feedback · Leerdoel 1',
    title: 'Feedbackoverzicht — Samen ontwerpen',
    code: 'OVERZICHT',
    description: 'Chronologisch overzicht van alle feedbackmomenten (van wie, waarover, wat ik ermee deed) — het bewijs voor leerdoel 1 (samen ontwerpen).'
  }
]

let currentInterviewIndex = 0
let interviewIsTurning = false
const interviewCache = new Map()

const interviewGrid = document.getElementById('interviewGrid')
const interviewModal = document.getElementById('interviewModal')
const interviewBackdrop = document.getElementById('interviewBackdrop')
const interviewPage = document.getElementById('interviewPage')
const interviewIndicator = document.getElementById('interviewIndicator')
const closeInterviewModal = document.getElementById('closeInterviewModal')
const nextInterview = document.getElementById('nextInterview')
const prevInterview = document.getElementById('prevInterview')


async function getInterview(item) {

  if (interviewCache.has(item.file)) {
    return interviewCache.get(item.file)
  }

  const response = await fetch(`./logs/interviews/${item.file}`)

  const markdown = await response.text()

  const data = {
    ...item,
    html: marked.parse(markdown)
  }

  interviewCache.set(item.file, data)

  return data

}


async function renderInterviewGrid() {

  const items = await Promise.all(
    interviews.map(getInterview)
  )

  interviewGrid.innerHTML = items
    .map((item, index) => `
      <article class="daily-record-card" data-index="${index}" tabindex="0">
        <div class="record-scan"></div>
        <span class="record-date">${item.topic}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="record-code">${item.code}</span>
      </article>
    `)
    .join('')

  interviewGrid.querySelectorAll('.daily-record-card').forEach(card => {
    card.addEventListener('click', () => openInterviewModal(Number(card.dataset.index)))
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openInterviewModal(Number(card.dataset.index))
      }
    })
  })

}


async function loadInterview(index, direction = 'next', animate = true) {

  if (interviewIsTurning) {
    return
  }

  interviewIsTurning = true

  const item = await getInterview(interviews[index])

  if (animate) {
    await animatePageTurn(interviewPage, direction)
  }

  interviewModal.scrollTo({
    top: 0,
    behavior: 'auto'
  })

  interviewPage.innerHTML = `
    <div class="modal-page-meta">
      <span>${item.topic}</span>
      <span>${index + 1} / ${interviews.length}</span>
    </div>
    <div class="markdown-page">
      ${item.html}
    </div>
  `

  interviewIndicator.textContent = item.topic

  if (animate) {
    animatePageEnter(interviewPage, direction)
  }

  window.setTimeout(() => {
    interviewIsTurning = false
  }, animate ? 390 : 0)

}


async function openInterviewModal(index) {

  currentInterviewIndex = index
  interviewModal.classList.add('active')
  interviewModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')

  await loadInterview(currentInterviewIndex, 'next', false)

}


function closeInterviewReader() {

  interviewModal.classList.remove('active')
  interviewModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')

}


nextInterview.addEventListener('click', () => {

  if (interviewIsTurning || !interviewModal.classList.contains('active')) {
    return
  }

  currentInterviewIndex++

  if (currentInterviewIndex >= interviews.length) {
    currentInterviewIndex = 0
  }

  loadInterview(currentInterviewIndex, 'next')

})


prevInterview.addEventListener('click', () => {

  if (interviewIsTurning || !interviewModal.classList.contains('active')) {
    return
  }

  currentInterviewIndex--

  if (currentInterviewIndex < 0) {
    currentInterviewIndex = interviews.length - 1
  }

  loadInterview(currentInterviewIndex, 'prev')

})


closeInterviewModal.addEventListener('click', closeInterviewReader)
interviewBackdrop.addEventListener('click', closeInterviewReader)

document.addEventListener('keydown', event => {
  if (!interviewModal.classList.contains('active')) {
    return
  }

  if (event.key === 'Escape') {
    closeInterviewReader()
  }

  if (event.key === 'ArrowRight') {
    nextInterview.click()
  }

  if (event.key === 'ArrowLeft') {
    prevInterview.click()
  }
})


renderInterviewGrid()


bindSwipe(dailyPage, () => nextDaily.click(), () => prevDaily.click())
bindDragSwipe(dailyPage, () => nextDaily.click(), () => prevDaily.click())
bindSwipe(bookPage, () => nextPage.click(), () => prevPage.click())
bindDragSwipe(bookPage, () => nextPage.click(), () => prevPage.click())
bindSwipe(interviewPage, () => nextInterview.click(), () => prevInterview.click())
bindDragSwipe(interviewPage, () => nextInterview.click(), () => prevInterview.click())

requestAnimationFrame(() => {
  initCinematicEffects()
})
