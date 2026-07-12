# Opdracht 18 — Ranking Masters: Bedank-/thank-you-pagina's

**Type:** Intern project (RM-eigen, herbruikbare campagne-pagina's)
**Periode:** gestart 2026-07-03
**Status:** Pagina 1 (Algemeen) afgewerkt als shell; pagina 2 (SEO/AI SEO) + pagina 3 (Google Ads) gebouwd; pagina 4 t/m 6 nog te bouwen
**Locatie:** static campaign host — `pages_static/<slug>/index.html` gekoppeld via `template-page-static-campaign-host.php` + meta `_rm_static_campaign_html_path`
**Leerdoelen:** 3 (Figma als vertrekpunt), 4 (pagina's bouwen), 5 (per stap visueel geverifieerd)

---

## Opdracht

**6 bedank-/thank-you-pagina's** bouwen voor Ranking Masters op basis van Figma. Aanpak: **pagina 1 (SEO) eerst helemaal af** als gedeeld fundament (shell), daarna pagina 2 t/m 6 uitrollen met diezelfde shell.

---

## Werkproces

**2026-07-03 — infrastructuur + pagina 1 opgezet**
- **"Static campaign host"-mechanisme uitgezocht:** losse HTML in `pages_static/<slug>/index.html`, gekoppeld via `template-page-static-campaign-host.php` + meta `_rm_static_campaign_html_path`. De host scopet de CSS automatisch en strips de top-header + footer uit het thema (`get_header('2')` / `get_footer('2')`). Vastgelegd in geheugen als `reference_static_campaign_host`.
- **Pagina 1 opgebouwd:** badge, H1 met placeholders, alinea, checklist, review-kaarten (Trustpilot + Google), 3 statkaarten en de rechter container.
- **Problemen opgelost:**
  1. **Responsive overflow** — img-reset + `min-width: 0` toegevoegd (intrinsieke fotobreedte duwde de layout uit z'n voegen).
  2. **Kapotte header** — kernoorzaak: een functie draaide bewust níet op host-pagina's, waardoor de header half rendde. Opgelost (met backup) → header/footer nu identiek aan de rest van de site.
  3. **Typografie** — Ubuntu overal + Gilroy-Bold voor H1/tussenkop, per onderdeel font/size/gewicht/kleur afgesteld.
  4. **H1 die niet paste** — opgelost met 50px + een bredere linkerkolom.
  5. **Placeholders `{firstName}` / `{website}`** — ingevuld via een WP-script (`id="rm-thankyou-fill"`) met Rocket-delay.
  6. **Foto-afmeting** — vaste 620×520 i.p.v. aspect-ratio; de wrap verbreed naar 1300px zodat de foto z'n breedte krijgt.
- Vastgelegd in geheugen: `project_bedankt_pages` (shell + type-a voor 2–6).

**2026-07-06 — pagina 1 afgewerkt + pagina 2 & 3 gebouwd**
- **Pagina 1 (Algemeen, ID 36314, /bedankt-seo/):** foto op vaste 620×520, hairline-rand weg, 3 decoratieve cirkels (560/229/100) met meer tussenruimte, nieuwe avatar-stack. **Hero-offset-bug opgelost** (JS mat de fixed header vóór settle → 67px dode ruimte) + hero-marge verkleind zodat de hele hero in één beeld past.
- **Iconen gestandaardiseerd (overal):** checklist-pijl (Frame3), trending-up / zap / award in de statkaarten, phone-call in de contactregel — aangeleverde SVG's inline.
- **Pagina 2 (SEO / AI SEO):** video-variant gebouwd; groen icoon + caption verwijderd; H1-break aangepast. **Video beheerbaar via ACF** (video-upload + optionele thumbnail) die de video op de pagina vervangt — geen code nodig.
- **Pagina 3 (Google Ads): nieuw gebouwd** — "ROAS-doel bereikt"-badge + LinkedIn-kaart, volledig in HTML/CSS/SVG.
- **Naamgeving:** WP-titels hernoemd (Algemeen / SEO-AI SEO / Google Ads); slugs/URL's ongewijzigd.

---

## Resultaat

![Bedankpagina — Linkbuilding](media/opdrachten/18-bedankt-google-ads.png)
> *De "Linkbuilding bedankt"-pagina, met een prestaties-dashboard en LinkedIn-kaart.*

![Bedankpagina — Algemeen](media/opdrachten/18-bedankt-seo.png)
> *De "Algemeen bedankt"-pagina, met teamfoto, resultaatcijfers en de contactpersoon.*

---

## Open punten

- **Formulier-integratie:** bepalen welk formulier welke bedankpagina afvangt → dan de CF7 + `wpcf7-redirect` (met `?firstName=&website=`) klaarzetten.
- **Placeholders** (`{firstName}` etc.) vullen/testen.
- **Pagina 2:** juiste video + persoon aanleveren of via ACF plaatsen.
- **Pagina 4 t/m 6** (Linkbuilding, Webdesign, CRO) nog bouwen met de shell.

---

## Wat ik eruit meeneem

- Eén pagina eerst helemaal afmaken als **gedeelde shell** loont: de overige 5 pagina's erven de opzet en zijn daardoor snel uit te rollen.
- Een **static campaign host** (losse HTML-export + PHP-template die CSS scopet en thema-header/footer strips) laat een design-export als WordPress-pagina serveren zonder het thema te vervuilen.
