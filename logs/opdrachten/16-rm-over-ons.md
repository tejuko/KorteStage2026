# Opdracht 16 — Ranking Masters: "Over ons"-pagina

**Type:** Intern project (RM-eigen website)
**Periode:** in uitwerking 2026-06-26
**Status:** Hero + senior-expertise sectie gebouwd/geïtereerd; overige Conrad-feedback nog te verwerken
**Locatie:** post **28095** op **htmlburger-staging**
**Leerdoelen:** 1 (feedback Conrad verwerken), 4 (pagina bouwen + itereren), 5 (headless-verificatie)

> Hoort bij de RM-webdev-pagina's uit de kick-off (zie ook opdracht 11 — "Over ons" stond daar als toegewezen vervolgpagina).

---

## Opdracht

De **"Over ons"-pagina** van Ranking Masters bouwen/afwerken op staging, conform ontwerp en feedback.

---

## Werkproces

**2026-06-26 — hero + senior-expertise sectie**
- **Hero:** H1 "Wij schalen merken…" → donkerblauw `#08288c` (zoals de andere h2's); `<p>` eronder → zwart `#000`; Kai Bijl-badge verwijderd uit de ACF-data (alleen Sjors blijft).
- **Senior-expertise sectie:** drie cijfer-tegels (… / +25% / 24/7) + info-card met titel "Klanten lopen altijd voor op de markt.", subtitel en 3 bullets met groene vinkjes.
- **Iteraties tegels + info-card (CSS V12 → V14):** zelfde witte achtergrond + blauwe gradient-border; tegels smaller met meer witruimte + animerende sweep ertussen (zoals de cards erboven), full-bleed tot beide paginaranden; marge onder de groene cijfers + tegel-gap weg (cijfer strak op label); panel-gap tegels ↔ info-card → 24px.
- **Info-card finetuning:** titel + subtitel gecentreerd (desktop), titel 24px, subtitel-margin `0 0 30px`; bullets in een gecentreerde rij i.p.v. kolom; mobiel (≤768px) stacken titel + subtitel + bullets netjes.
- **Werkwijze:** bestanden `assets/new-styles.css` (hero), `…-expertise.php` (markup), `markup/dist/css/template-updates…28095`. Per deploy RUCSS + object-cache + Kinsta-cache geleegd; geverifieerd met headless screenshots (desktop + 390px mobiel); backups als `.backup-20260625-…`.

---

## Resultaat

![Over ons — hero, eerste versie](media/opdrachten/16-over-ons-hero-voor.png)
> *Vóór: de hero van de Over ons-pagina.*

![Over ons — hero na mijn aanpassingen](media/opdrachten/16-over-ons-hero-na.png)
> *Ná: hero met donkerblauwe H1 (`#08288c`) en aangepaste styling.*

![De door mij gebouwde senior-expertise-sectie](media/opdrachten/16-over-ons-senior-expertise.png)
> *De nieuwe senior-expertise-sectie (bestond eerder niet): 4 stap-cards, cijfer-tegels (−60% / +25% / 24/7) en de info-card, geïtereerd van V12 → V14.*

---

## Open punten (Conrad-feedback 26/6)

- **3 punten naast elkaar** op de pagina.
- Hele pagina moet **in één keer geladen** ogen (niet "inpoppen").
- Het **Ons team**-blok moet **vloeiender inladen**.

---

## Wat ik eruit meeneem

- Kleine, herhaalde iteraties (V12 → V14) op één sectie tillen het detailniveau naar de RM-huisstijl. Door elke stap headless te verifiëren (desktop én 390px mobiel) weet ik zeker dat het ook echt zo rendert — niet alleen in de code, maar in de browser.
