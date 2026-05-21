# Opdracht 4 — Sabé Verpakkingen: intern linkplan + PageSpeed

**Type:** Klantopdracht (twee deelopdrachten)  
**Periode:** 22–28 april 2026 e.v.  
**Leerdoelen:** 2 (oriënteren en begrijpen), 4 (prototypen en uitwerken), 5 (evalueren)

---

## Deelopdracht A — Intern linkplan implementeren

### Opdracht

Op basis van een actieplan uit februari 2026 op honderden pagina's interne links plaatsen op semantische woorden (bv. "kartonnen doos/dozen", "krimpfolie", "verzenddozen", "verzendzakken", "gripzakken") die naar de juiste verzamelpagina linkten.

### Omvang

| Aspect | Aantal |
|---|---:|
| Totale actierijen in spreadsheet | 898 |
| Link-toevoegingen verwerkt | ~580 |
| Rijen rood gemarkeerd (niet passend) | ~311 |
| Top-target `kartonnen-dozen` | 622 verwijzingen |
| Target `krimpfolie` | 102 |
| Target `verzenddozen` | 99 |
| Target `verzendzakken` | 45 |
| Target `gripzakken` | 28 |

### Werkproces

- Per bron-pagina gecheckt of de link al bestond; zo niet → contextueel anchor-woord gelinkt naar de target-pagina.
- Tracking via groen/rood in de spreadsheet: groen = link toegevoegd, rood = pagina bestond niet of paste inhoudelijk niet.
- Bewuste kwaliteitsafweging: op product-tag pagina's met alleen buttons en geen body-tekst is een contextuele link onlogisch — die rijen rood gemarkeerd mét onderbouwing.
- **Procesoptimalisatie:** Chrome-plugin "Open Multiple URLs" ontdekt waarmee tientallen bron-URL's tegelijk geopend konden worden.

### Resultaat

~580 link-toevoegingen verwerkt + ~311 rijen onderbouwd uitgesloten.

> *Afbeelding: spreadsheet-fragment met groen/rood-markering*  
> `[AAN TE VULLEN]`

### Feedback

> Nick (DGM'er + (AI) Search Projectmanager): "De implementatie ziet er goed uit." *(parafrase, 2026-05-05)*

---

## Deelopdracht B — PageSpeed-verbeterplan

### Opdracht

PageSpeed-scores van Sabé Verpakkingen verbeteren naar groen.

### Werkproces

Systematisch criteria afgegaan, met AI als sparringpartner voor analyse en oplossingen.

### Resultaat

Scores grotendeels naar groen gebracht — performance-score nog lopend.

> *Afbeelding: PageSpeed-score vóór verbeteringen*  
> `[AAN TE VULLEN]`

> *Afbeelding: PageSpeed-score ná verbeteringen*  
> `[AAN TE VULLEN]`

---

## Wat ik eruit meeneem

Repetitief werk wordt schaalbaar door eigen tooling én inhoudelijk wegen — niet alles wat in een actieplan staat hoort blindelings uitgevoerd. De externe bevestiging van Nick laat zien dat bewuste kwaliteitskeuzes (rood markeren waar een link niet past) inderdaad de juiste afweging waren.
