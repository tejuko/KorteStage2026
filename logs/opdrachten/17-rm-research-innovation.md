# Opdracht 17 — Ranking Masters: Research & Innovation-pagina

**Type:** Intern project (RM-eigen website)
**Periode:** gestart 2026-07-02
**Status:** Live op staging — Next.js-app als static export gedeployed, volledig responsive + cases/video ACF-bewerkbaar
**Locatie:** post 36310 (htmlburger-staging), gepubliceerd op `/research-innovation`; export in `/pages_static/research-innovation/`
**Leerdoelen:** 1 (samenwerken/overdracht met Alex + feedback verwerken), 4 (pagina bouwen + itereren), 5 (per stap visueel geverifieerd)

---

## Opdracht

De **Research & Innovation-pagina** van Ranking Masters (verder) bouwen. Alex had de pagina al voor een groot deel gecodeerd; ik neem het over en werk het af op basis van zijn design/code.

---

## Werkproces

**2026-07-02 — meeting met Alex + overdracht**
- Meeting met **Alex** over de opzet/aanpak van de pagina.
- **Design-zipfile ontvangen** met de pagina die Alex al grotendeels had gecodeerd.
- De zip bleek een **Next.js-app** (repo `Alexandervnk/ranking-masters`) te bevatten — geen kant-en-klare WordPress-template, maar een losse front-end-app die ik als static export in WordPress moest tillen.

**2026-07-03 — Next.js-app live + responsive + ACF-bewerkbaar**
- **Next.js-app live gezet:** de GitHub-repo `Alexandervnk/ranking-masters` bleek een Next.js-app (geen statische HTML). Als **static export** gebouwd en gedeployed naar `/pages_static/research-innovation/`. Node lokaal geïnstalleerd (prebuilt binary), asset-paden herschreven, geüpload via **tar-over-ssh**. **WP Rocket gericht omzeild** (die herschreef anders de asset-URL's en brak de pagina). Gepubliceerd op `/research-innovation`.
- **Volledig responsive gemaakt (was desktop-only):** via ~21 parallelle subagents + een gedeeld playbook mobiel gemaakt, inclusief een mobiel menu in de header en 24px mobiele zij-padding.
- **Detailwerk / uitlijning:** CTA-knoppen hover-lift verwijderd; heading op 72px; container-breedte teruggebracht (smallere zijmarges, in lijn met de RM-huisstijl). "De verschuiving"-sectie (03) en "Onderzoeken"-sectie (09) uitgelijnd; legenda-balk (datawarehouse) links uitgelijnd; paragraaf in "Achter de schermen" verbreed.
- **ACF-bewerkbaar gemaakt:** de cases ("In de praktijk") + video/thumbnail zijn nu bewerkbaar vanuit wp-admin op 36310, live zonder rebuild — een passthrough injecteert de ACF-data (met decode-content als fallback), geseed met de bestaande content (afbeeldingen naar de media-library).
- Alles live op staging, per stap visueel geverifieerd (headless op 390px mobiel + desktop).

---

## Resultaat

![De Research & Innovation-pagina op staging (tussenstand)](media/opdrachten/17-research-innovation.png)
> *De Research & Innovation-pagina op staging — een work in progress die ik na mijn stageperiode afmaak. De Next.js-app is als static export live gezet, volledig responsive gemaakt en de cases/video zijn ACF-bewerkbaar.*

---

## Open punten

- ACF-patroon uitbreiden naar meer secties, óf de hele pagina naar **productie** (rankingmasters.nl) tillen.

---

## Wat ik eruit meeneem

- Een **Next.js-app kun je als static export** in een WordPress-site tillen; WP Rocket moet je dan gericht omzeilen omdat die anders de asset-URL's herschrijft en de pagina breekt.
- Repetitief responsive-werk laat zich goed opschalen met **parallelle subagents + een gedeeld playbook**, mits je per stap visueel verifieert.
