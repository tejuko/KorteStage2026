# Opdracht 6 — ACF Barbie-leerproject

**Type:** Eigen leerproject  
**Periode:** 01/05/2026  
**Leerdoelen:** 2 (oriënteren en begrijpen), 3 (verbeelden — eerste Figma-schets vóór bouwen), 4 (prototypen en uitwerken), 5 (evalueren)

---

## Opdracht (zelf gekozen)

Tweede ACF-leerproject, volledig zelfstandig opgezet als Barbie-themed website — dit keer met relaties tussen Custom Post Types en een eigen concept bedacht vóór het bouwen.

---

## Werkproces

- Concept bedacht: een site met **Barbies**, **Sidekicks** en **Films**, waarbij je per film kunt zien welke Barbie en Sidekick erin spelen.
- Plan geschreven vóór het bouwen (`plan.md`).
- **3 Custom Post Types** via CPT UI aangemaakt: `barbie`, `sidekick`, `barbie_film` (met Has Archive + Show in REST).
- **Field groups in ACF** opgezet voor elke CPT.
- **Child theme `barbie-theme`** gebouwd met `functions.php`, `style.css`, en templates voor alle CPTs.
- Iteraties op de site:
  - Navigatiebalk smaller gemaakt
  - Sidekicks toegevoegd aan de nav
  - "Terug naar home"-knop toegevoegd
  - Knoppen op één stijl gezet
  - Streaming-platformen-veld: bij "Amazon Prime" werd de slug `amazon_prime` getoond in plaats van het label → opgelost
  - Multi-select toegevoegd voor films op meerdere streaming-diensten
- **Eerste keer Figma-design gemaakt vóór bouwen** — doorbraak op leerdoel 3.

---

## Resultaat

Werkende Barbie-site met CPT-relaties, child theme en ACF-velddefinities. Theme geëxporteerd als `barbie-theme.zip`.

![Homepage van de Barbie World-site, gevuld uit de Custom Post Types](media/barbie/barbie-home.png)
> *Homepage / overzicht — tellingen en spotlight, gevuld uit de CPT's Barbies, Sidekicks en Films.*

![Barbie-detailpagina met ACF-velden en gekoppelde film](media/barbie/barbie-detail.png)
> *Single Barbie-pagina (Prinses Annika) met eigen ACF-velden (eerste verschijning, haarkleur, handtekening-outfit) en de gekoppelde film.*

![Filmpagina met via ACF-relatievelden gekoppelde Barbie en sidekick](media/barbie/barbie-film.png)
> *Filmpagina met de via ACF-relatievelden gekoppelde Barbie (Genevieve) en sidekick (Twyla) — de relaties tussen de Custom Post Types in actie.*

![ACF Field Groups-overzicht in wp-admin: Barbies, Films en Sidekicks](media/barbie/06-barbie-acf-fieldgroups.png)
> *De ACF Field Groups in wp-admin — één groep per Custom Post Type.*

![Edit Field Group "Films" met de velddefinities, incl. relatievelden](media/barbie/06-barbie-acf-editfilms.png)
> *De velddefinities van de "Films"-groep, met de relatievelden "Barbie in deze film" en "Sidekick in deze film".*

---

## Feedback

Zelfstudie-project — geen formele collega-feedback.

---

## Wat ik eruit meeneem

- Een ACF-project van scratch zelfstandig opzetten lukt nu: concept → plan → CPTs → field groups → child theme → templates → UX-iteraties.
- ACF labels vs. values (slugs): bij select-velden altijd de label-instelling controleren.
- **Dit was de eerste keer dat ik een Figma-design maakte vóór ik begon te bouwen** — dat voelt als een structurele verandering in mijn werkwijze.
