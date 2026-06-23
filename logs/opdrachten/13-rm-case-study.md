# Opdracht 13 — Ranking Masters: Case study-pagina (herbruikbare template)

**Type:** Intern project (RM-eigen)
**Periode:** voorbereiding 2026-06-10, doorgebouwd vanaf 2026-06-22
**Status:** In ontwikkeling
**Locatie:** post **30328** ("Case study template - SEA / SEO") op staging — `env-rankingmastersnl-getdevdone.kinsta.cloud`
**Edit-URL:** https://env-rankingmastersnl-getdevdone.kinsta.cloud/wp-admin/post.php?post=30328&action=edit
**Leerdoelen:** 1 (planning + prioriteit afgestemd met Danique), 4 (template/pagina bouwen + itereren), 5 (vooraf naar backend/datastructuur kijken)

---

## Opdracht

Een **case study-pagina** voor Ranking Masters bouwen — niet als één losse pagina, maar als **herbruikbare template**, zodat toekomstige cases met dezelfde structuur (en dummyproof datastructuur) kunnen worden opgezet. Vergelijkbare aanpak als de dynamische SEO-template (opdracht 11).

---

## Werkproces

**2026-06-10**
- Goed naar de **backend** van de case study gekeken: die moet écht een herbruikbare template worden.
- Vooraf naar de backend/datastructuur kijken (i.p.v. pas tijdens het bouwen) — zelfde les als bij de dynamische SEO-template.

**2026-06-22** (eerste dag terug na ziekteweek)
- Planning doorgekeken en met **Danique** overlegd → prioriteit: case study-pagina afmaken.
- **Veel progressie** op de case study-pagina gemaakt.

---

## Technische opbouw

**Theme:** `rankinmasters-child`
**Page template:** `page-case-study-sea.php`
**ACF-veldgroep:** "Case Study Modules" — `acf-json/group_sea_case_study.json` (local JSON sync, veldkeys netjes met de hand benoemd als `field_sea_*`)

De pagina draait op één **ACF flexible-content-veld `sea_modules`** met losse module-layouts. Elke layout heeft een eigen **template-part** in `template-parts/case-study-sea-modules/`, net als bij de dynamische SEO-template (opdracht 11). Zo is de pagina dummyproof en zijn secties verschuifbaar/herbruikbaar.

**De 10 modules (volgorde op deze pagina):**

| # | Layout | Anchor | Belangrijkste velden |
|:-:|---|---|---|
| 0 | `hero` | `heroSection` | labels (repeater), headline, copy, highlighted_copy, image, cta |
| 1 | `key_results` | `kernresultaten` | label, headline, items (repeater: value + label) |
| 2 | `four_column_items` | `beginsituatie` | label, headline, items (repeater: heading + copy) |
| 3 | `navigation` | `aanpak` | label, headline (+ navigatie-items) |
| 4 | `ux` | `basis` | (UX-sectie) |
| 5 | `ai_agents` | `ai-agents` | label, headline |
| 6 | `video` | `video` | (video-sectie) |
| 7 | `results` | `resultaten` | headline |
| 8 | `team` | `team` | label, headline |
| 9 | `bottom_cta` | `cta` | label, headline |

> Voorbeeld-inhoud op staging: case **NineTwoFive** (SEA) — hero "Van Google Ads Startup naar Gifting Season Dominantie", kernresultaten +183% conversies / +153% conversiewaarde / +113% marge na ad spend.

---

## Resultaat

_Case study-template op staging (post 30328), in opbouw met de NineTwoFive-case (SEA). Screenshot volgt zodra de pagina af is._

---

## Open punten

- Case study-pagina afmaken.

---

## Wat ik eruit meeneem

- Een pagina als **template** opzetten dwingt om vooraf de backend/datastructuur te ontwerpen, niet pas tijdens het bouwen — zelfde les als bij de dynamische SEO-template.
