export async function loadMarkdown(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Markdown not found: ${path}`)
  }

  const markdown = await response.text()

  if (!window.marked) {
    return `<pre>${escapeHtml(markdown)}</pre>`
  }

  return window.marked.parse(markdown)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
