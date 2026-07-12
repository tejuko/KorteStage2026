# Opdracht 19 — Ranking Masters: Gratis Tools-pagina

**Type:** Intern project (RM-eigen landingspagina)
**Periode:** gestart 2026-07-06
**Status:** Op staging gebouwd + gebugfixt; live zetten + header-link door collega
**Locatie:** static campaign host (htmlburger) — WP-pagina ID 36320, `/gratis-tools`
**Leerdoelen:** 2 (bron-HTML doorgronden + CSS-scoping-probleem analyseren), 4 (ombouwen naar volwaardige RM-pagina), 5 (verifiëren tegen styleguide)

---

## Opdracht

Een losse `index.html` (bestaande "Gratis Tools"-export) omzetten naar een volwaardige, gebrande en gebugfixte Ranking Masters-pagina op staging. Live zetten en de header-link toevoegen doet een collega.

---

## Werkproces

**2026-07-06 — opgezet + volledig omgebouwd**
1. **Opgezet:** bron-HTML gevonden (stond op live), gekopieerd naar staging, WP-pagina aangemaakt via de Static Campaign Host (ID 36320).
2. **Structurele fixes:** dubbele header verwijderd; CSS-scoping gerepareerd (styles lekten naar de hele site); video-componenten aanwezig-maar-verborgen gemaakt voor de latere walkthroughs.
3. **Correctheid:** tool-links gefixt (`/scan` → `/seo-waardecalculator/`); SEO/indexering gezet (Yoast titel/description, index,follow); branding geverifieerd tegen de styleguide.
4. **Rankie-flair:** mascotte toegevoegd (met glow), boven de closing-CTA.
5. **Live-feed gefixt:** puntjes verwijderd en de roterende JS uitgeschakeld (brak onvoorspelbaar in de browser: overlap / lege lijst) → feed nu statisch en stabiel.
6. **Knoppen exact als rankingmasters.nl:** omgebouwd naar de echte site-`.cta` (oranje gradient + ghost-variant, Ubuntu-font, hover-slide); pijltjes gecorrigeerd naar de diagonale ↗ site-pijl, consistent — behalve "Bekijk uitleg" (bewust teruggedraaid).
7. **Kaart-uitlijning:** pills, lijn, "Bekijk uitleg" en "Open tool" liggen nu op gelijke hoogte in alle 3 de tool-kaarten.

---

## Resultaat

![De Gratis Tools-pagina op staging](media/opdrachten/19-gratis-tools.png)
> *De omgebouwde Gratis Tools-pagina in RM-huisstijl: drie tool-kaarten (SEO Calculator, SEA Grader, Backlink Scan), uitleg-secties en de Rankie-mascotte.*

---

## Open punten (optioneel)

- "Open tool" / "Start de …"-knoppen ook volledig naar site-stijl.
- Meer Rankie-flair.
- Walkthrough-video's t.z.t. plaatsen (componenten staan al verborgen klaar).
- Live zetten + header-link → collega.

---

## Wat ik eruit meeneem

- Lekkende CSS los je op met **scoping** — een losse export drukt anders zijn styles op de hele site.
- Een instabiele JS-animatie die onvoorspelbaar breekt kun je beter **statisch en stabiel** maken; voorspelbaarheid weegt zwaarder dan flair.
