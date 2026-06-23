# Analyseverslag 1 — Sabé Verpakkingen: intern linkplan

> **Bewijsmateriaal Leerdoel 2 (Oriënteren en begrijpen).** Het stageplan vraagt: *"minimaal 2 projecten analyseren op gebruikersgedrag/marketingdoelen → frontend"*, met als bewijs analyseverslagen + toegepaste verbeteringen. Dit is **analyseverslag 1 van 2**. Het tweede verslag werk ik uit op basis van het Yannick-interview (SEO/AI Search) of een landingspagina-opdracht.
>

---

## 1. Project in één zin

Voor klant **Sabé Verpakkingen** (webshop in verpakkingsmateriaal) heb ik een bestaand SEO-actieplan uit februari 2026 uitgevoerd: op honderden pagina's interne links plaatsen op semantische zoekwoorden die naar de juiste verzamel-/categoriepagina's verwijzen.

## 2. Marketingdoel achter de opdracht

Het actieplan is opgesteld vanuit een **SEO-strategie**, niet vanuit losse onderhoudstaken. De onderliggende marketingdoelen van een intern linkplan:

- **Autoriteit verdelen.** Interne links sturen "link-waarde" door de site. Door veelvoorkomende termen te linken naar de centrale verzamelpagina's (bv. `kartonnen-dozen`) wordt die pagina als belangrijkste binnen z'n thema gepositioneerd voor Google.
- **Thematische structuur verduidelijken.** Google leidt uit de interne linkstructuur af welke pagina's bij elkaar horen. Consistente anchor-woorden ("krimpfolie", "verzenddozen") maken het thema van een verzamelpagina expliciet.
- **Gebruikersgedrag faciliteren.** Een bezoeker die in een producttekst over "verzendzakken" leest, kan via een contextuele link direct doorklikken naar het volledige assortiment — dat verkort het pad naar conversie.

Concreet vertaald naar targetpagina's en omvang:

| Targetpagina | Verwijzingen (gepland) |
|---|---:|
| `kartonnen-dozen` | 622 |
| `krimpfolie` | 102 |
| `verzenddozen` | 99 |
| `verzendzakken` | 45 |
| `gripzakken` | 28 |
| **Totaal actierijen** | **898** |

## 3. Analyse: van marketingdoel naar gebruikersgedrag

De kern van de opdracht was **niet** "plaats 898 links", maar per regel beoordelen of een link de bezoeker daadwerkelijk helpt. Mijn analyse per bron-pagina volgde drie vragen:

1. **Bestaat de link al?** Zo ja → overslaan (dubbel linken voegt niets toe en oogt spammy).
2. **Past het anchor-woord contextueel in de lopende tekst?** Een link werkt alleen als de bezoeker hem als natuurlijk leest. Een geforceerde link op een toevallig woord schaadt zowel UX als de SEO-geloofwaardigheid.
3. **Heeft de pagina überhaupt body-tekst?** Op **product-tag-pagina's met alleen buttons en geen lopende tekst** is een contextuele link onlogisch — er ís geen zin om in te linken.

Dit is het punt waar gebruikersgedrag de doorslag gaf: een link is pas waardevol als hij in een leesbare context staat waar een bezoeker hem zou volgen. Daarom heb ik **~311 van de 898 rijen bewust rood gemarkeerd** (pagina bestond niet, of de link paste inhoudelijk niet) en **~580 link-toevoegingen** wél doorgevoerd.

## 4. Vertaling naar frontend / concrete acties

- **Contextuele anchors** geplaatst in de body-tekst van bron-pagina's, gelinkt naar de juiste verzamelpagina.
- **Tracking via groen/rood** in de gedeelde spreadsheet: groen = link toegevoegd, rood = onderbouwd uitgesloten. Zo is elke beslissing herleidbaar voor collega's.
- **Procesoptimalisatie:** de Chrome-plugin *"Open Multiple URLs"* ontdekt om tientallen bron-URL's tegelijk te openen i.p.v. één voor één — schaalbaar werken bij ~900 rijen.

## 5. Resultaat en validatie

- **~580** contextuele links geplaatst, **~311** rijen onderbouwd uitgesloten.
- Externe bevestiging:

> Nick (DGM'er + (AI) Search Projectmanager): *"De implementatie ziet er goed uit."* (parafrase, 05-05-2026)

De positieve beoordeling bevestigt dat de bewuste kwaliteitsafweging — niet alles blindelings uitvoeren — de juiste keuze was.

## 6. Wat ik hieruit leer over "gebruikersgedrag → frontend"

- Een SEO-actieplan is een **marketingvertaling die op de frontend pas waarde krijgt als de uitvoerder meedenkt.** Een link op een tag-pagina zonder tekst voldoet wel "op papier" maar niet voor een echte bezoeker.
- **Kwaliteitsborging begint bij de uitvoerder.** Durven zeggen "dit klopt niet" en dat onderbouwen, hoort bij de taak — niet pas bij een review.
- **Documentatie maakt strategie overdraagbaar.** Dit plan was bedacht in februari en maanden later door mij uitgevoerd; de duidelijkheid van het plan bepaalde hoeveel beoordelingsmomenten ik zelf moest maken.
