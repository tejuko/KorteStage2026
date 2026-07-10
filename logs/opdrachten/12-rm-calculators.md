# Opdracht 12 — Ranking Masters: Calculator-widgets (SEO + Google Ads)

**Type:** Intern project (RM-eigen interactieve widgets)
**Periode:** gestart 01/06/2026
**Status:** In ontwikkeling
**Leerdoelen:** 1 (feedback Conrad verwerkt), 4 (interactief component bouwen + itereren), 5 (live verifiëren op staging)

---

## Opdracht

Twee interactieve calculator-widgets met Ranky-mascotte, in RM-huisstijl:
- **SEO calculator** — "Hoeveel SEO & AI Search omzet loop jij mis?"
- **Google Ads calculator** — "Ontdek hoeveel je verspilt aan Google Ads."

---

## Werkproces

**01/06/2026**
- SEO calculator: Ranky-afbeelding vervangen door `ranky-bg.webp` (`/uploads/2025/09/ranky-bg.webp`), Ranky op desktop `bottom: 70px`.
- Google Ads calculator: Ranky op desktop `bottom: 45px`.
- Beide oranje knoppen: hover in rankingmasters.nl-stijl — de signature **gradient-slide** (200% oranje gradient die op hover van 0 → -100% schuift in 0.27s) + subtiele lift + schaduw.
- Techniek: CSS onderaan beide bestanden, desktop-scoped (`@media min-width:769px`) zodat de mobiele layout intact blijft. Versie 0.9.24 → 0.9.25, `php -l` schoon, `.bak25`-backups, alle WP Rocket/RUCSS-caches geleegd.
- Alles live geverifieerd op staging.

---

## Resultaat

_Beide calculators live geverifieerd op staging. Screenshot volgt._

---

## Feedback

**Conrad** (01/06/2026, tussendoor):
| # | Punt | Actie |
|:-:|---|---|
| 1 | Persoon op Google Ads-calculator | 2× Sjors → **Jordy** links | ✅ verwerkt |
| 2 | Ruimte voor afbeelding | Plek vrijgemaakt om afbeelding toe te voegen | ✅ verwerkt |

---

## Open punten

- Mobiele layout van de Google Ads-calculator herinrichten naar het doelontwerp (mockup volgt). Jordy blijft links (niet Sjors).

---

## Wat ik eruit meeneem

- Nieuwe CSS desktop-scopen (`@media min-width:769px`) is een veilige manier om op live componenten te itereren zonder de mobiele layout te breken.
- Versiebeheer + backups (`.bak25`) + cache legen + live verifiëren als vaste afrond-routine.
