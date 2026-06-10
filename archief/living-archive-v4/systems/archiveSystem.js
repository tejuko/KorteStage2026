import { archiveData } from '../data/archive.js'
import { loadMarkdown } from './markdownSystem.js'

const chapterGrid = document.getElementById('chapterGrid')
const bookView = document.getElementById('bookView')
const bookPage = document.getElementById('bookPage')
const closeBook = document.getElementById('closeBook')
const prevPage = document.getElementById('prevPage')
const nextPage = document.getElementById('nextPage')
const pageCounter = document.getElementById('pageCounter')
const bookWeek = document.getElementById('bookWeek')

let currentChapter = null
let currentPage = 0

renderChapters()

function renderChapters() {
  chapterGrid.innerHTML = archiveData
    .map((chapter, index) => `
      <article class="chapter-card" data-index="${index}" tabindex="0">
        <span class="chapter-week">${chapter.week}</span>
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
        <div class="chapter-footer">
          <span>${chapter.pages.length} pages</span>
          <button type="button">Open</button>
        </div>
      </article>
    `)
    .join('')

  document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => openChapter(Number(card.dataset.index)))
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openChapter(Number(card.dataset.index))
      }
    })
  })
}

async function openChapter(index) {
  currentChapter = archiveData[index]
  currentPage = 0

  chapterGrid.classList.add('hidden')
  bookView.classList.remove('hidden')
  bookWeek.textContent = currentChapter.week

  await renderPage()
}

async function renderPage() {
  const page = currentChapter.pages[currentPage]
  const path = typeof page === 'string'
    ? `./logs/daily/${page}`
    : page.path

  bookPage.innerHTML = '<div class="page-content loading">Loading archive page...</div>'

  try {
    const html = await loadMarkdown(path)
    bookPage.innerHTML = `
      <div class="page-kicker">${getPageTitle(page)}</div>
      <div class="page-content">${html}</div>
    `
  } catch (error) {
    bookPage.innerHTML = `
      <div class="page-content">
        <h1>Page unavailable</h1>
        <p>${error.message}</p>
      </div>
    `
  }

  pageCounter.textContent = `PAGE ${currentPage + 1} / ${currentChapter.pages.length}`
}

function getPageTitle(page) {
  return typeof page === 'string'
    ? page.replace('.md', '')
    : page.title
}

nextPage.addEventListener('click', async () => {
  currentPage = (currentPage + 1) % currentChapter.pages.length
  await renderPage()
})

prevPage.addEventListener('click', async () => {
  currentPage = currentPage - 1

  if (currentPage < 0) {
    currentPage = currentChapter.pages.length - 1
  }

  await renderPage()
})

closeBook.addEventListener('click', () => {
  bookView.classList.add('hidden')
  chapterGrid.classList.remove('hidden')
})

document.addEventListener('keydown', async event => {
  if (!currentChapter || bookView.classList.contains('hidden')) {
    return
  }

  if (event.key === 'Escape') {
    closeBook.click()
  }

  if (event.key === 'ArrowRight') {
    nextPage.click()
  }

  if (event.key === 'ArrowLeft') {
    prevPage.click()
  }
})
