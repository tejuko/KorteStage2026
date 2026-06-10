import { interviewsData } from '../data/interviews.js'
import { loadMarkdown } from './markdownSystem.js'

const interviewGrid = document.getElementById('interviewGrid')
const interviewReader = document.getElementById('interviewReader')
const interviewPage = document.getElementById('interviewPage')
const interviewTopic = document.getElementById('interviewTopic')
const closeInterview = document.getElementById('closeInterview')

renderInterviews()

function renderInterviews() {
  interviewGrid.innerHTML = interviewsData
    .map((item, index) => `
      <article class="chapter-card" data-index="${index}" tabindex="0">
        <span class="chapter-week">${item.topic}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="chapter-footer">
          <span>${item.colleague}</span>
          <button type="button">Open</button>
        </div>
      </article>
    `)
    .join('')

  document.querySelectorAll('#interviewGrid .chapter-card').forEach(card => {
    card.addEventListener('click', () => openInterview(Number(card.dataset.index)))
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openInterview(Number(card.dataset.index))
      }
    })
  })
}

async function openInterview(index) {
  const item = interviewsData[index]

  interviewGrid.classList.add('hidden')
  interviewReader.classList.remove('hidden')
  interviewTopic.textContent = item.topic

  interviewPage.innerHTML = '<div class="page-content loading">Loading interview...</div>'

  try {
    const html = await loadMarkdown(item.path)
    interviewPage.innerHTML = `
      <div class="page-kicker">${item.title}</div>
      <div class="page-content">${html}</div>
    `
  } catch (error) {
    interviewPage.innerHTML = `
      <div class="page-content">
        <h1>Interview unavailable</h1>
        <p>${error.message}</p>
      </div>
    `
  }
}

closeInterview.addEventListener('click', () => {
  interviewReader.classList.add('hidden')
  interviewGrid.classList.remove('hidden')
})

document.addEventListener('keydown', event => {
  if (interviewReader.classList.contains('hidden')) {
    return
  }

  if (event.key === 'Escape') {
    closeInterview.click()
  }
})
