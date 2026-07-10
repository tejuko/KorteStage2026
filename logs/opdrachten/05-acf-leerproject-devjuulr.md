# Opdracht 5 — Eigen ACF-leerproject op tess.devjuulr.com

**Type:** Zelfstudie / eigen leerproject  
**Periode:** Week 2–3 (april 2026)  
**Leerdoelen:** 2 (oriënteren en begrijpen), 4 (prototypen en uitwerken)

---

## Opdracht (zelf gekozen)

Naast het klantwerk op mijn eigen WordPress-dev-omgeving een leerproject opzetten om WordPress-fundamenten dieper te begrijpen. Bewuste keuze: classic theme **Twenty Twenty-One** in plaats van Bricks, om dichter bij de PHP/template-laag te blijven.

---

## Wat ik heb gebouwd

| Onderdeel | Detail |
|---|---|
| Custom Post Types | `team_member` (featured image, role, bio, linkedin, email); `faq_item` (vraag = title, antwoord = Wysiwyg) |
| Field Groups | Team Member Info, Team Page Content, FAQ Content, Site Instellingen |
| Page templates | `page-ons-team.php` (team grid + intro + contact), `page-faq.php` (accordion via `<details>`/`<summary>`), helper `rm_get_setting()` in `functions.php` |
| ACF JSON sync | actief in `wp-content/themes/twentytwentyone/acf-json/` |
| Live pages | `/ons-team`, `/faq`, `/site-instellingen` |

---

## Resultaat

Werkende ACF-site op `tess.devjuulr.com` met custom post types, field groups en PHP-templates.

> *Van dit eerste ACF-leerproject zijn geen screenshots meer beschikbaar: dezelfde dev-omgeving (`tess.devjuulr.com`) heb ik daarna hergebruikt voor mijn uitgebreidere Barbie-ACF-project (zie opdracht 6), waardoor de team-/FAQ-pagina's zijn vervangen.*

---

## Feedback

Zelfstudie-project — geen formele feedback van collega's.

---

## Wat ik eruit meeneem

ACF-terminologie (CPT, meta fields, taxonomies, display) is nu toegepaste kennis. Ik begrijp nu hoe WordPress "onder de motorkap" werkt via PHP-templates en ACF, los van een page builder als Bricks.
