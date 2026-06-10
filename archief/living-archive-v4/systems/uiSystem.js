export function switchView(targetId) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active')
  })

  document.getElementById(targetId)?.classList.add('active')
}
