# Opdracht 11 — Ranking Masters: Dynamische SEO-pagina's

**Type:** Intern project (RM-eigen, herbruikbare paginatemplate)
**Periode:** gestart 2026-06-01 (toegewezen in webdev kick-off juni), **template afgerond 2026-06-09**, **ingeleverd 2026-06-12**
**Status:** Ingeleverd — pagina af op staging, wacht op live-zetting door Danique
**Leerdoelen:** 2 (briefing → frontend-eisen), 3 (Figma "RM Anouk" als vertrekpunt), 4 (volledige pagina bouwen), 5 (live verifiëren op staging)

---

## Opdracht

Een **dynamische, herbruikbare SEO-paginatemplate** bouwen op basis van het Figma-ontwerp "RM Anouk". Eisen uit de briefing (webdev kick-off 1 juni):

- Dynamische template — elke sectie verschuif- en aanpasbaar via ACF.
- Bij een video: een knop met pijl omhoog en de tekst "SEO analyse aanvragen".
- Dummyproof — o.a. afbeeldingen die automatisch schalen.
- Code zo klein mogelijk houden, optimaal presteren in snelheid.

---

## Werkproces

- **2026-06-01:** verbonden met nieuwe staging-env (RankingmastersStaging-1), key-auth ingesteld (wachtwoordloos inloggen).
- Hele Figma-pagina nagebouwd op `dynamische-seo-test` (post 36429): ~16 ACF flexible-content secties + fragments — hero, uitleg-varianten, steps-carousel, geschikt/niet-geschikt, vergelijkingstabel, grafiek-cards, lead-form, cases, timeline, quote, logo-grid, impact, steden, link-kolommen, USP-band, team, reviews, FAQ.
- Alles bewerkbaar via ACF, scoped CSS/JS, conform RM-styleguide.
- Hero van collega per ongeluk overschreven → hersteld uit WP-revisie 36535 (alleen video-hero behouden).
- Hero geperfectioneerd naar Figma: thumbnail + oranje play-knop (click-to-play), Gilroy-Bold titel + "met visie" in Playfair, EMERCE 100-badge + Google Beoordelingen, RM-CTA (Ubuntu 500).
- **Video ↔ formulier-toggle:** klik → video wordt het "Meer autoriteit nodig?"-formulier (CF7 36537, zelfde footprint), knop wordt "Lees verder" → scrollt naar eerstvolgende H2.
- Live op staging, met backups en cache geleegd.
- **2/6:** ontwerp gepresenteerd aan Danique + Conrad → goede feedback, richting bevestigd.
- **3/6:** feedbackronde Conrad verwerkt — cijfers (waren groen) herstellen, afsnijdend element terug naar volledig zichtbaar, overbodige elementen weg.
- **4/6:** hele dag doorgebouwd aan de secties.
- **5/6:** verder afgebouwd.
- **8/6:** finishing-touches-fase + dummyproof/SEO-checklist opgesteld (LinkedIn-link toevoegbaar, Trustoo-reviews, FAQ als Schema-markup?, afbeeldingen automatisch schalen, alles invulbaar/aanpasbaar, code compact voor Google, blauwe achtergrond → wit met automatisch zwarte tekst).
- **9/6 — template afgerond op staging (post 36429):**
  - `winning_case`, `video_testimonials`, `logo_grid`, `client_experiences` (reviews), `project_results` en `intro_toc` volledig naar Figma gestyled en mobiel rechtgetrokken.
  - `logo_grid` + `intro_toc` omgezet naar **ACF-gestuurd met JS-/marquee-fallback** (redactie kan content direct aanpassen).
  - **36 ACF-velden leek-proof gemaakt:** instructies bij elk veld, jargon eruit, duidelijke NL-labels + poster-/thumbnail-velden gelabeld.
  - Lessen: `winning_case`-CSS staat dubbel (inline fragment + `dynamic-seo.css`) → beide bijwerken; generieke regels vereisten `!important`; RUCSS-cache vereist DB-row delete (niet alleen `rocket_clean_domain`); verifiëren via headless render + CDP computed-styles.
- **10/6:** testimonials-sectie afgemaakt en op een **aparte pagina** geplaatst. Backend van de case study verkend — die moet een herbruikbare **template** worden (bouw gepland 11/6).
- **11/6:** hero-achtergrond uitgebreid — optionele achtergrondfoto met blauwe waas + behoud stip-accenten (effen blauw als er geen foto is), aparte mobiel-toggle (≤900px) voor de achtergrond, no-video gedrag ("Bekijk video" verdwijnt, oranje CTA wordt "Lees verder" → scrollt naar eerstvolgende H2), pijltje schuin omlaag (↘). Pagespeed-optimalisatie opgepakt. Les: pagespeed is op staging niet betrouwbaar te meten — cache-plugins lossen op live veel op. Live-zetting doet Danique (bestanden overzetten). Feedback: "mooie pagina, werkt vlekkeloos op mobiel én desktop."
- **12/6 — ingeleverd:** slider-fix in de "Hoe gaan wij te werk"-sectie (stappenkaarten 01/02/03) opgelost; dynamische SEO-pagina ingeleverd. Wacht nu op live-zetting door Danique (pas dan echte pagespeed-cijfers).

---

## Resultaat (tot nu toe)

_Template staat af op staging (post 36429) en wacht op live-zetting door Danique. Screenshot volgt._

---

## Open punten

- Live-zetting door Danique afwachten → daarna echte pagespeed-cijfers verifiëren.
- Verder uitwerken/itereren op de overige toegewezen pagina's uit de kick-off (Over ons, zoekmachine-optimalisatie, home).

---

## Wat ik eruit meeneem

- Een template die "dummyproof" en volledig verschuifbaar moet zijn dwingt je vooraf in herbruikbare bouwblokken te denken, niet in een vaste pagina.
- Check WP-revisies vóór je verder bouwt op een gedeelde pagina, om werk van collega's niet te overschrijven.
