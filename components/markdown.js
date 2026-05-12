export function createDailyLog(log) {
  return `
    <div>
      <p class="log-date">${log.date}</p>
      <h2 class="log-title">${log.title}</h2>
      <div class="log-content">
        ${log.content}
      </div>
    </div>
  `
}


export function createWeeklyLog(log) {
  return `
    <article class="timeline-card">
      <h3>${log.week}</h3>
      <p>${log.summary}</p>
    </article>
  `
}