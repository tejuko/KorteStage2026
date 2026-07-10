# Opdracht 9 — Bruidsmode Haarlem: SEA-landingspagina

**Type:** Klantopdracht  
**Periode:** 19/05/2026 t/m 20/05/2026  
**Leerdoelen:** 1 (klaar voor review begeleider), 3 (ACF-veldkeuzes = design-beslissingen), 4 (zelfstandig landingspagina gebouwd), 5 (bewuste CRO-keuzes gedocumenteerd)

---

## Opdracht

Voor **Bruidsmode Haarlem** een SEA-landingspagina bouwen die aansluit op hun Google Ads-campagne.

- Locatie: `bruidsmodehaarlem.devjuulr.com`
- Page slug: `sea-paservaring`
- Status bij oplevering: draft, klaar voor review

---

## Werkproces

- Custom page template `page-sea.php` opgezet.
- **5 template-parts** gebouwd: `sea-hero`, `sea-twijfel-helpen`, `sea-uniek`, `sea-bruiden`, `sea-cta`.
- **ACF-veldgroep** `group_sea_landing` aangemaakt met 5 tabs — alle content aanpasbaar via WP-admin.
- **Custom infinite carousel** gebouwd: eigen JavaScript, geen externe library. 21 slides (7×3 sets) met silent-jump techniek voor een naadloze loop.
- **8 Noun Project line-icons** geïntegreerd.
- Responsive gemaakt voor schermen onder 768px.
- Back-up gemaakt: `~/.backups/bmh-sea-20260519-113142/` (tar.gz + DB-export).

---

## Resultaat

Volledig werkende SEA-landingspagina, compleet aanpasbaar via ACF — bewuste keuze zodat het team de content zelf kan beheren.

![De door mij gebouwde SEA-landingspagina voor Bruidsmode Haarlem](media/opdrachten/iv-5-1-bruidsmode.png)
> *De SEA-landingspagina (eigen bouw, volledig ACF-bestuurbaar). [Live: bruidsmodehaarlem.nl/vind-je-droomjurk](https://www.bruidsmodehaarlem.nl/vind-je-droomjurk/)*

---

## Feedback

Reviewpunten ontvangen op 28/5 (ochtendblok) en een tweede ronde op 2/6 (8 concrete punten op `/sea-paservaring/`) — live geverifieerd en verwerkt, met backups en geleegde caches.

---

## Wat ik eruit meeneem

- Een custom carousel zonder library bouwen geeft volledige controle over animatie en performance — de silent-jump techniek zorgt voor een naadloze loop zonder zichtbare herhaling.
- ACF-veldgroepen voor klantsites altijd zo opzetten dat het team content zonder ontwikkelaar kan aanpassen.
