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
    file: '01-seo-diensten-pagina-bricks.md',
    client: 'Ranking Masters · oefenopdracht',
    title: 'SEO-diensten-pagina in Bricks',
    description:
      'Een Figma-ontwerp van de SEO-diensten-pagina nabouwen in WordPress met Bricks Builder. Inwerkopdracht om snel productief te worden in de tool die RM voor klantsites gebruikt.',
    status: 'afgerond',
    tags: ['WordPress', 'Bricks Builder', 'Figma', 'SEO']
  },
  {
    file: '02-shopify-wohtah.md',
    client: 'Eigen concept',
    title: "Woh'Tah Shopify-webshop",
    description:
      "Vrije opdracht: een fictieve heksen-webshop bouwen in Shopify als kennismaking met het platform. Eigen concept bedacht, theme aangepast en producten + branding ingericht.",
    status: 'afgerond',
    tags: ['Shopify', 'Concept', 'Branding']
  },
  {
    file: '03-ina-divina-acf.md',
    client: 'Ina Divina',
    title: 'Achtergrondafbeeldingen via ACF',
    description:
      "Op een groot aantal pagina's achtergrondafbeeldingen vervangen via Advanced Custom Fields in WordPress. Eigen tracking-spreadsheet opgezet om gestructureerd te werken en geen pagina te missen.",
    status: 'afgerond',
    tags: ['WordPress', 'ACF']
  },
  {
    file: '04-sabe-verpakkingen.md',
    client: 'Sabé Verpakkingen',
    title: 'Intern linkplan + PageSpeed',
    description:
      "Honderden pagina's voorzien van interne links op semantische woorden volgens het actieplan. Daarnaast PageSpeed-optimalisaties. ~580 link-toevoegingen verwerkt uit 898 actierijen.",
    status: 'lopend',
    tags: ['WordPress', 'SEO', 'PageSpeed', 'Contentstrategie']
  },
  {
    file: '05-acf-leerproject-devjuulr.md',
    client: 'Eigen leerproject',
    title: 'ACF-leerproject (devjuulr)',
    description:
      'Naast het klantwerk een eigen WordPress-dev-omgeving opgezet om ACF en de PHP/template-laag dieper te begrijpen. Custom Post Types, field groups en classic theme Twenty Twenty-One.',
    status: 'afgerond',
    tags: ['WordPress', 'ACF', 'PHP', 'Custom CPT']
  },
  {
    file: '06-acf-barbie-project.md',
    client: 'Eigen leerproject',
    title: 'Barbie ACF-leerproject',
    description:
      'Zelfstandig ACF-leerproject met relaties tussen Custom Post Types. 3 CPT\'s (Barbie, Sidekick, Film), concept en plan vooraf bedacht in Figma. Verdieping na het devjuulr-project.',
    status: 'afgerond',
    tags: ['WordPress', 'ACF', 'Custom CPT', 'Figma']
  },
  {
    file: '07-rm-google-ads-landingspagina.md',
    client: 'Ranking Masters · intern',
    title: 'Google Ads-landingspagina',
    description:
      'Een Google Ads-landingspagina voor RM gebouwd, strikt vanuit het Figma-ontwerp. BEM-classes, Ubuntu Sans en een eigen build-workflow. Feedback van Conrad verwerkt.',
    status: 'afgerond',
    tags: ['WordPress', 'Bricks Builder', 'Figma', 'BEM']
  },
  {
    file: '08-rm-werkwijze-pagina.md',
    client: 'Ranking Masters · intern',
    title: 'Werkwijze-pagina',
    description:
      'De werkwijze-pagina voor Ranking Masters gebouwd en visueel afgestemd op de huisstijl en het Figma-design. Feedback van Sjors en Conrad afgewacht.',
    status: 'lopend',
    tags: ['WordPress', 'Bricks Builder', 'Figma']
  },
  {
    file: '09-bruidsmode-haarlem-sea.md',
    client: 'Bruidsmode Haarlem',
    title: 'SEA-landingspagina',
    description:
      'Een SEA-landingspagina gebouwd die aansluit op de Google Ads-campagne. Zelfstandig opgezet met bewuste CRO-keuzes en ACF-veldkeuzes als design-beslissingen. Klaar voor review.',
    status: 'lopend',
    tags: ['WordPress', 'ACF', 'SEA', 'CRO']
  },
  {
    file: '10-rm-blog-tools-plugin.md',
    client: 'Ranking Masters · intern',
    title: 'RM Blog Tools — WordPress-plugin',
    description:
      'Mijn eerste eigen WordPress-plugin van scratch: een [seo_calculator]-shortcode met conditional asset-loading en scope-geïsoleerde CSS (2488 selectoren geprefixt). Los van het theme en herbruikbaar.',
    status: 'afgerond',
    tags: ['WordPress', 'Plugin', 'PHP', 'CSS']
  },
  {
    file: '11-rm-dynamische-seo-paginas.md',
    client: 'Ranking Masters · intern',
    title: 'Dynamische SEO-paginatemplate',
    description:
      'Een herbruikbare, dummyproof SEO-paginatemplate gebouwd naar het Figma-ontwerp "RM Anouk": ~16 ACF flexible-content secties, video↔formulier-toggle en leek-proof velden. Ingeleverd.',
    status: 'afgerond',
    tags: ['WordPress', 'ACF', 'Flexible Content', 'Figma', 'SEO']
  },
  {
    file: '12-rm-calculators.md',
    client: 'Ranking Masters · intern',
    title: 'Calculator-widgets (SEO + Google Ads)',
    description:
      'Twee interactieve calculator-widgets met de Ranky-mascotte in RM-huisstijl, met de signature gradient-slide hover op de knoppen. Feedback van Conrad verwerkt; mobiele layout nog in ontwikkeling.',
    status: 'lopend',
    tags: ['WordPress', 'CSS', 'JavaScript', 'CRO']
  },
  {
    file: '13-rm-case-study.md',
    client: 'Ranking Masters · intern',
    title: 'Case study-template',
    description:
      'Een herbruikbare case study-template (ACF flexible content, eigen template-part per module) — opgezet vanuit de backend/datastructuur, net als de dynamische SEO-template. In opbouw met de NineTwoFive-case.',
    status: 'lopend',
    tags: ['WordPress', 'ACF', 'Flexible Content', 'CRO']
  },
  {
    file: '14-logboek-tooling.md',
    client: 'Eigen tooling',
    title: 'Logboek-tooling (Stage Logboek-app)',
    description:
      'Eigen tooling voor mijn logboek-workflow: slash commands /daglog en /weekreflectie, een media-inbox, en een klikbare macOS-app in RM-kleuren die alles aanstuurt.',
    status: 'afgerond',
    tags: ['Tooling', 'Automatisering', 'macOS', 'Workflow']
  },
  {
    file: '15-arbawood.md',
    client: 'Eigen leerdoel-opdracht',
    title: 'Arbawood-homepage redesign',
    description:
      'Herontwerp van de Arbawood-homepage: eerst een analyse (UX/CRO/hiërarchie), daarna Figma-ontwerpen vóór het bouwen — bewijs voor leerdoel 3. Ook gepresenteerd aan het webdev-team.',
    status: 'lopend',
    tags: ['Figma', 'UX', 'CRO', 'Redesign']
  },
  {
    file: '16-rm-over-ons.md',
    client: 'Ranking Masters · intern',
    title: 'Over ons-pagina',
    description:
      'De Over ons-pagina op staging gebouwd/afgewerkt: hero + een nieuwe senior-expertise-sectie (cijfer-tegels, info-card), geïtereerd op basis van feedback en headless geverifieerd.',
    status: 'lopend',
    tags: ['WordPress', 'CSS', 'Huisstijl']
  },
  {
    file: '17-rm-research-innovation.md',
    client: 'Ranking Masters · intern',
    title: 'Research & Innovation-pagina',
    description:
      'Een Next.js-app als static export in WordPress getild, volledig responsive gemaakt en de cases/video ACF-bewerkbaar. Work in progress, af te maken na de stage.',
    status: 'lopend',
    tags: ['Next.js', 'WordPress', 'ACF', 'Responsive']
  },
  {
    file: '18-rm-bedankt-pages.md',
    client: 'Ranking Masters · intern',
    title: "Bedankpagina's (campaign host)",
    description:
      "Meerdere bedank-/thank-you-pagina's gebouwd via een static campaign host, met een gedeelde shell en ACF-beheerbare content (o.a. video).",
    status: 'lopend',
    tags: ['WordPress', 'HTML/CSS', 'ACF']
  },
  {
    file: '19-rm-gratis-tools-pagina.md',
    client: 'Ranking Masters · intern',
    title: 'Gratis Tools-pagina',
    description:
      'Een losse HTML-pagina omgebouwd tot een volwaardige, gebrande RM-pagina op staging: CSS-scoping gerepareerd, site-echte knoppen, mascotte en een stabiele tool-kaartenlayout.',
    status: 'afgerond',
    tags: ['WordPress', 'HTML/CSS', 'Huisstijl']
  },
  {
    file: '20-tomasso-tables-migratie.md',
    client: 'Tomasso Tables',
    title: 'WooCommerce-migratie (opschoning)',
    description:
      'Een vastgelopen 50 GB WooCommerce-site geanalyseerd en veilig opgeschoond: per bestand gecheckt welke media echt gebruikt wordt → uploads van 48 GB naar 9,3 GB, volledig omkeerbaar.',
    status: 'lopend',
    tags: ['WooCommerce', 'Migratie', 'Performance']
  }
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
