# Analyseverslag 3 — CRO → frontend (o.b.v. interview Rico)

> **Bewijsmateriaal Leerdoel 2 (Oriënteren en begrijpen).** Het stageplan vraagt analyses van projecten op *gebruikersgedrag/marketingdoelen → frontend*. Dit is **analyseverslag 3** (aanvullend op verslag 1 = Sabé linkplan en verslag 2 = Yannick/SEO), gebaseerd op het interview met **Rico** (CRO) — bron: `bijlagen/interview-rico-cro.md`.
>
> Waar verslag 2 de **SEO**-kant van "verkeer naar de pagina" behandelt, gaat dit verslag over de **CRO**-kant: het verkeer dat binnen is omzetten in conversie. Samen dekken ze het vliegwiel dat Rico beschrijft: *SEO levert (warm) verkeer, CRO zet het om.*
>
> Opgesteld 2026-06-23, afgerond juli 2026.

---

## 1. Onderwerp in één zin

Hoe **conversie-optimalisatie (CRO)** binnen Ranking Masters wordt vertaald naar concrete **frontend- en designkeuzes**, geanalyseerd via een interview met onze CRO-verantwoordelijke en toegepast op mijn eigen landingspagina's.

## 2. Het marketingdoel achter CRO

CRO is volgens Rico: **meer resultaat halen uit dezelfde hoeveelheid (betaald) verkeer.** Omdat RM verkeer inkoopt (≈ €1+ per klik), is elke niet-converterende bezoeker verloren geld:

> *"Je kan tienduizend bezoekers blijven kopen, maar als niemand koopt, heb je een lege portemonnee."*

De conversiekans hangt af van drie dingen die de frontend direct beïnvloedt: **een sterk, helder aanbod**, **vertrouwen/geloofwaardigheid**, en **bewijs tonen**. En cruciaal: de "goede" conversieratio is niet absoluut — die hangt af van prijs en koopdrempel (no-brainer van €10 vs. dienst van €1500/maand). Hoe hoger de drempel, hoe meer je met een **laagdrempelige tussenstap** werkt (gratis adviesgesprek/proefrit) en vertrouwen opbouwt via een funnel.

Dit raakt mijn werk direct: ik bouw vooral **CRO-landingspagina's** voor RM-diensten (SEO, Google Ads) — precies de "duurdere dienst met laagdrempelig vooraanbod" die Rico beschrijft.

## 3. Analyse: van CRO-doel naar concrete frontend-keuzes

Uit het interview destilleer ik de keuzes met de meeste conversie-impact, geordend naar bezoekersgedrag:

| Frontend-/designkeuze | Waarom (gedrag van de bezoeker) |
|---|---|
| **Boven de vouw meteen overtuigend** | ~80% scrollt niet. Is de hero niet direct duidelijk + overtuigend, dan haakt de bezoeker af → ~80% van de aandacht moet hiernaartoe. |
| **"Juiste plek + juiste partij"** | De bezoeker moet meteen voelen: jullie bieden dit aan én jullie zijn hier de juiste voor. Navigatie moet logisch zijn. |
| **Helderheid van het aanbod** | Prijs, levertijd, wat-zit-erin, welke variant — ontbrekende helderheid = afhaken. Het kernpunt dat Rico het vaakst herhaalt. |
| **Vertrouwenselementen, geschaald naar merkgrootte** | Klein/onbekend merk → méér bewijs nodig (reviews op meerdere platformen, showroomfoto's, expert-namen). Groot merk leunt op USP's. |
| **CTA: opvallen, actiegericht, juiste actie, geen concurrentie** | Goed contrast, kort & krachtig ("Bekijk product"), de juiste actie voor díé pagina, en niet "verslagen" worden door andere aandachtstrekkers. |
| **Drempelverlaging onder de CTA** | Bij hoge drempel: klein tekstje ("geen creditcard nodig", "gratis, geen verplichting") verlaagt de weerstand. |
| **Interactie-elementen als "deuren"** | Product-/dienst-/case-kaarten moeten uitnodigend zijn en de juiste info bevatten, zodat doorklikken logisch voelt. |
| **Frustratie laag houden** | Filteren/vinden makkelijk maken; elke frustratiepiek = vertrekkans. |
| **Cleaner design + bewuste kleur** | Rommel en "cheap" kleuren verwarren; bewuste kleur (blauw = vertrouwen, groen = positief) stuurt de blik en verhoogt vertrouwen. |

Rico's bureaustoelshop-voorbeeld laat zien dat conversiewinst zelden uit één ding komt maar uit **"een bundel van veel kleine dingetjes"**: betekenisvolle productnamen i.p.v. cijfercodes, rustiger kleurgebruik, juiste leesvolgorde, lage-kwaliteit-elementen eruit.

## 4. Toegepast in mijn eigen werk

De CRO-principes herken ik direct in mijn landingspagina's — en ze geven me een taal om mijn keuzes te onderbouwen:

- **Boven de vouw / hero** — mijn **case study-template** (post 30328, NineTwoFive-case) opent met een hero met label ("Ninetwofive" / "SEA case study"), kop, copy en CTA. Rico's "80% scrollt niet" onderbouwt waarom daar de meeste zorg in zit (zie de illustraties in §7).
- **Vertrouwenselementen geschaald naar merk** — in de template zit precies de "bewijs tonen"-laag die Rico beschrijft, geverifieerd op staging:
  - **Kernresultaten**: `+183%` Conversies · `+153%` Conversiewaarde · `+113%` Marge na Ad Spend
  - **Resultaten-sectie** ("Primary results"): `Top 5% performance` (+183% meer aankopen via Google Ads) · `4,8×` rendement per euro ad spend · `−38%` CPA (benchmark −12% sector)
  - **Team-sectie** ("Team achter het project"): Tristan van Duin, Jordy de Boer, Nick Houtzager → de "echte mensen erbij"-/expert-laag die Rico aanraadt
  - **Beginsituatie** (probleemstelling die de case geloofwaardig maakt): Moordende concurrentie · Koud verkeer converteren · Geen merkherkenning · Druk op rendement
- **Laagdrempelig vooraanbod** — de afsluitende CTA van de template is letterlijk **"Plan een groeigesprek"** — exact Rico's "proefrit"-logica: geen directe verkoop, maar een laagdrempelige eerste stap voor een duurdere dienst.
- **CTA-principes** — hero-CTA "**Bekijk website**" en eind-CTA "**Plan een groeigesprek**" zijn beide kort en **actiegericht** (Rico's eis). De signature **gradient-slide hover** op mijn calculator-knoppen sluit aan op "opvallen + contrast".
- **Bewuste kleur** — Rico bevestigde mijn schoolkennis (blauw = vertrouwen, groen = positief); ik kan mijn kleurkeuzes in de RM-huisstijl daarmee onderbouwen.
- **Interactie-"deuren"** — de flexible-content-kaarten in mijn templates (case-/dienstkaarten) zijn letterlijk de "deuren" die Rico beschrijft.

**Wat ik direct meeneem naar mijn volgende landingspagina:**
1. Eerst het **primaire doel** van de pagina scherp maken (waarvoor optimaliseer ik?) vóór ik ontwerp.
2. Boven de vouw: in één blik **aanbod helder + juiste partij + één duidelijke primaire CTA**.
3. **Helderheidscheck**: staan prijs/levertijd/inhoud er duidelijk?
4. **Vertrouwenscheck** passend bij merkgrootte: reviews/cases/expert-namen aanwezig? (In de case study-template ✓: kernresultaten + resultaten-sectie + team.)
5. **CTA-check**: opvallend contrast, actiegericht, niet-concurrerend, evt. drempelverlagend regeltje.

## 5. SEO ↔ CRO — het vliegwiel

Rico en Yannick (verslag 2) sluiten naadloos op elkaar aan: **SEO brengt warm verkeer, CRO zet het om.** Groeien beide, dan ontstaat een vliegwiel — Rico noemt klanten met een **ROAS van 10–20+** (elke euro 10–20× terug), opgebouwd door jarenlang aan beide knoppen te draaien. Voor mijn landingspagina's betekent dit: een pagina die hoog rankt maar niet converteert (of andersom) is half werk; ik bouw voor **beide** doelen tegelijk.

## 6. Wat ik hieruit leer over "gebruikersgedrag → frontend"

- **Vertrouwen is een ontwerpbeslissing, geen bijzaak.** Hoe onbekender het merk, hoe meer bewijs de frontend moet tonen — en met AI wordt "aantonen dat je echt bent" alleen maar belangrijker.
- **De eerste schermvulling is bijna alles.** Met 80% niet-scrollers is de hero geen "intro" maar de hele pitch.
- **Een CTA is gedrag, geen knop.** Opvallen, de juiste actie, geen concurrentie en drempelverlaging bepalen of iemand klikt.
- **Eerlijk over data.** RM werkt nu vaak "op our best knowledge" omdat tracking ontbreekt; het ideaal is een meet-/testlab. Dat leert me dat ik mijn eigen aannames expliciet moet maken en, waar mogelijk, met Lighthouse/data moet staven — net als bij analyseverslag 1 en 2.

## 7. Illustratie

De CRO-principes zijn zichtbaar in mijn case study-template:

![Hero van de case study-template met label, kop en CTA](media/analyse/case-study-hero-video.png)
> *Boven de vouw: label, kop, copy en CTA — waar volgens Rico ~80% van de aandacht naartoe moet.*

![Resultaten-sectie met kerncijfers en count-up-animatie](media/analyse/primaryperformance-cards-091632.png)
> *De "bewijs tonen"-laag: kernresultaten (+183% / 4,8× / −38%) als vertrouwenselementen, geschaald naar de case.*

Rico is Head of Tech bij Ranking Masters en sprak in dit interview vanuit de CRO-kant.
