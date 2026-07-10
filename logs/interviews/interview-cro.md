# Interview — Rico (CRO, Ranking Masters)

> **Bron / bijlage bij Leerdoel 2 (Oriënteren en begrijpen).** Onderwerp: conversie-optimalisatie (CRO) en de vertaling naar frontend. Uitgewerkt 23/06/2026 uit drie ruwe transcripts (`~/Downloads/transcripts/Ranking Masters*.txt`) + mijn eigen vragenlijst en aantekeningen. De ruwe spraak-naar-tekst is hieronder samengevat tot leesbare antwoorden; kernuitspraken staan als citaat.
>

---

## Algemeen

### Wat betekent conversie-optimalisatie binnen jullie bedrijf?
CRO is in de kern **meer resultaat halen uit dezelfde hoeveelheid verkeer naar een bepaald aanbod**. Het aanbod staat online op een webpagina; daar willen we het maximale uithalen, zeker omdat we vaak bétaald verkeer inkopen (denk ~€1 per klik, duurder bij koopgerichte zoekwoorden).

> *"Je kan tienduizend bezoekers blijven kopen, maar als niemand koopt, heb je een lege portemonnee."*

De randvoorwaarden voor conversie: is je **aanbod sterk**, ben je **betrouwbaar/geloofwaardig** (niet te-mooi-om-waar-te-zijn), en **toon je bewijs**. Op internet ken je de verkoper niet, dus vertrouwen moet je actief opbouwen.

> Metafoor: een broodjeszaak waar het ruikt naar vers brood, netjes is en druk is, "converteert" beter dan een tent met behaarde armen en een vieze menukaart. Hoe toegankelijker je de informatie maakt waarop iemand z'n besluit baseert, hoe beter.

Belangrijke nuance: de "juiste" conversieratio is niet zwart-wit. Die **hangt af van wat je verkoopt en hoe duur je verkeer was**. Een no-brainer van €10–20 converteert hoog; een auto van €30.000 kopen niemand direct online — daar optimaliseer je op een laagdrempelige tussenstap (gratis proefrit) en bouw je via een funnel vertrouwen op (vgl. de "BMW-club" voordat je de auto koopt).

### Hoe ziet een CRO-proces eruit van begin tot eind?
**Geen enkel CRO-traject is hetzelfde** — niet elk bedrijf/website is even ver. Idealiter werk je **vanuit data**:
1. **Data-tracking inregelen** — meten hoeveel mensen doorklikken vs. **bouncen**, en wáár in de funnel het misgaat (homepage → categorie → product → winkelmand → checkout).
2. **Analyseren** waar het stuk loopt.
3. **Designs maken** op de plek waar het probleem zit, en de verbetering meten.

In de praktijk **slaat RM de tracking-fase nu vaak over** (capaciteit/tijd; klanten hebben verschillende tools — Google Analytics vs. andere — en CMS'en — WordPress vs. Shopify — dus veel uitzoekwerk). In plaats daarvan handelt RM **"op our best knowledge"**: de twee belangrijkste pagina's (productpagina + checkout) worden aangepakt met een nieuw, helderder, gepolisht design.

> Het risico daarvan, eerlijk benoemd: *"Bounce was 95%, nu 85% — drie keer zoveel doorklikkers. Maar misschien ligt de volgende winst in de stap erna, en dat weet je niet zonder tracking."*

Naarmate de conversieratio stijgt richting de ~2% marktstandaard, worden de aanpassingen **kleiner/fijner** (perfectioneren: 4 i.p.v. 2 thumbnails tonen, sale-prijs net iets groter) — je wilt niet kapotmaken wat al werkt. Zit je ver onder 1–2%, dan zijn de ingrepen **drastischer** (of zelfs: klopt je aanbod/prijs überhaupt wel?).

> Het ideaalbeeld dat Rico schetst: CRO als een **laboratorium** — analisten die de funnel-tracking bijhouden, een **bibliotheek van ~200 bewezen verbeteringen** gerangschikt op implementatie-moeilijkheid, en een team dat snippets test, meet en de bevindingen documenteert ("werkt goed bij 90% van de sites"). Nu werkt RM nog volledig op maat. *"Het is beter dan niks, maar eigenlijk zou je het als een fabriekje/ronddraaiend proces willen aanvliegen."*

### Met wie werk je samen binnen projecten?
**Designers, developers en projectmanagers/analisten** (zoals Nick). De PM's/strategen doen het strategische denkwerk; dev is in dat model "de uitvoering / de resources".

> *"In the end of the day zijn wij maar middelen voor hun."* — maar in de praktijk corrigeert dev vaak: *"ze komen met een idee en dan zeg ik als dev: dat is niet handig, het zit zo en zo, ik zou dit doen."* Dev weet vaak beter wat er gevraagd moet worden en kan het zo beter organiseren.

Voorbeeld van die samenwerking: een PM wil een subcategoriepagina verbeteren, maar zonder *last updated*-datum crawlt Google 'm minder vaak → dat wordt als dev-taak uitgezet. Soms wil de strateeg alleen design (nieuwe hero-banner), soms alleen dev. (Herkenbaar t.o.v. de Sabé `lastmod`-sitemapfix uit analyseverslag 1.)

---

## Vertaling naar frontend

### Welke elementen op een pagina hebben de meeste invloed op conversie?
Twee dingen springen eruit: **helderheid van het aanbod** en **vertrouwen**.

- **Helderheid van het aanbod** (steeds herhaald als kernpunt): wat kost het? wanneer heb ik het in huis? wat zit er in de doos / zit er een handleiding bij? welke kleur krijg ik nou? Ontbrekende helderheid = afhaken.
- **Vertrouwen** — sterk afhankelijk van merkgrootte en bestaande band:
  - Grote merken (IKEA, Apple, Albert Heijn, bol.com) hebben **nauwelijks vertrouwenselementen** nodig; zij leunen op naam + sterke **USP's** (bv. bol.com: gratis retour / gratis verzending / morgen in huis).
  - Coolblue (kleiner): voegt wél bewijs toe — "een half miljoen likes op Facebook" (grootte) + klantbeoordeling (goed helpen) + een USP.
  - Eigen RM-case **slaapbanken.nl** (merk: Easy Living): logo-naam-mismatch kost vertrouwen, dus dat actief teruggewonnen met **showroom, vakkundig advies, gratis bezorging, review-scores op meerdere platformen** (bewust meerdere platformen om "niet-gecheat" te tonen), reviews terugkerend in de 4e sectie en footer + verzekerde aankoop.

> Kernregel: *"Hoe kleiner/onbekender je bent, hoe meer je je best moet doen om vertrouwen op te bouwen."* Eenpitter? Zet foto's van je showroom én van jezelf erop — "in een wereld met AI wordt aantonen dat je echt bent steeds belangrijker."

### Hoe bepalen jullie waar op een pagina verbeteringen nodig zijn?
- **Bovenaan beginnen**: ~80% scrollt niet, dus boven de vouw moet het in één keer overtuigend én duidelijk zijn → daar gaat ~80% van de focus naartoe.
- **"Ben ik op de juiste plek?"** — de bezoeker moet meteen voelen (1) jullie bieden dit aan én (2) jullie zijn hier ook echt de juiste partij voor. Navigatie moet logisch zijn.
  > Anti-voorbeeld: een hero "wij verkopen perfecte kartonnen dozen", maar de CTA-knop is "Algemene voorwaarden" → onlogisch.
- **Interactie-elementen als "deuren"**: productkaarten, dienstkaarten, case-study-kaarten — zien ze er uitnodigend uit, kun je doorklikken, staat de juiste info erin?
- **Listing pages**: is filteren/verminderen makkelijk genoeg om snel te vinden wat je zoekt? (Rico verwacht dat AI dit filteren straks overneemt op basis van een zoekzin.)
- **Frustratiemeter**: houd als bezoeker je frustratieniveau in je hoofd — piekt het, dan haakt iemand af. Doel: frustratie zo laag mogelijk, zoveel mogelijk voor de bezoeker uitzoeken.
- **CTA-blokken + vertrouwen samen**: bij een dienstpagina (bv. "stuur je laptop op, wij maken 'm snel") hoort een groot, opvallend actie-blok mét vertrouwenselementen — bv. expert-namen met ervaring ("MacBook-held, al 10 jaar" / "2000+ laptops versneld") naast de CTA.

### Hoe vertaal je data naar concrete aanpassingen in design of frontend?
**Hangt af van waar je voor optimaliseert** — dat moet je vooraf scherp hebben:
- Optimaliseren op *verder scrollen* → minder knoppen, meer doorlopende content.
- Optimaliseren op *doorklikken* → meer knoppen + urgentie.
- Bij RM gaat het meestal om het **% naar de volgende funnel-stap** (categorie → product → winkelmand → checkout → voltooid), gecombineerd met metrics als aantal bekeken producten en **gemiddelde bestelwaarde (AOV)**.

Voorbeeld AOV verhogen → bundels, *subscribe & save*, gift sets; vervolgens **meten** welke variant hoe vaak wordt aangeklikt (gift set 5% vs. bundel 12%) om te zien waar de stijging vandaan komt.

> Eerlijk: *"Wij doen het nu op basis van wat we denken."* AI kan hierbij steeds beter adviseren als je het toegang geeft tot de site-data. (Vgl. SEO/CRO ≈ "autoriteit/expertise opbouwen voor je website in de ogen van Google", en dat verschilt per bedrijf.)

---

## Diepgang

### Voorbeeld van een succesvolle optimalisatie en waarom die werkte — bureaustoelshop.nl
Het werkt zelden door één ding; het is **"een bundel van heel veel dingetjes bij elkaar"**. Wat ze deden:
- **Hero**: van een saaie stoel-met-typenaam ("Comfort LX 151") → "**Al meer dan 15 jaar de specialist in bureaustoelen, 100+ producten**" + **sfeervolle, betekenisvolle namen** voor stoelen (bv. gericht op "goede rugleuning" of "gamer") i.p.v. cijfercodes → voelt aanklikbaar en helder.
- **Kleurgebruik**: oude pagina had 3 nogal "cheap" kleuren → je wist niet waar te kijken. Nieuw: rustiger, **blauw + groen**, duidelijke focus.
  > Tess' eigen schoolkennis bevestigd in het gesprek: **blauw = vertrouwen, groen = goed/positief**; bewuste kleurkeuze zie je terug.
- **Categoriepagina**: linkeroog-volgorde gefixt — eerst "weten waar je voor komt", dán "advies nodig" (i.p.v. eerst "hulp met zoeken").
- **Productpagina**: cleaner, **juiste elementen neergezet, lage-kwaliteit dingen eruit**.

### Hoe ga je om met aannames vs. data (gevoel vs. "feit")?
Idealiter data; in de praktijk nu vaak **op basis van wat we denken** ("our best knowledge"), omdat de tracking-fase wordt overgeslagen. Rico erkent dat dit het zwakke punt is en dat het ideaal een meet-/testcyclus (lab) zou zijn. AI wordt genoemd als hulpmiddel om sneller van aanname naar onderbouwing te komen.

### Veelgemaakte fouten bij het ontwerpen van landingspagina's
Uit het gesprek af te leiden: boven-de-vouw niet meteen overtuigend/duidelijk; onlogische of niet-actiegerichte CTA (bv. "Algemene voorwaarden" als hero-knop); te veel concurrerende aandachtstrekkers/kleuren; ontbrekende helderheid (prijs, levertijd, inhoud); ontbrekende vertrouwenselementen bij een (kleiner) merk; te druk/rommelig (Coolblue als "net te druk"). *(Niet als aparte vraag uitgediept in de opname — afgeleid uit de voorbeelden.)*

---

## Toepassing op mijn werk

### Waar moet ik op letten bij het bouwen van een landingspagina?
Boven de vouw in één keer duidelijk + overtuigend; meteen laten voelen "juiste plek + juiste partij"; logische navigatie; helderheid van het aanbod (prijs, levertijd, inhoud); vertrouwenselementen passend bij de merkgrootte; interactie-elementen ("deuren") uitnodigend; frustratie laag houden.

### Wat maakt een goede call-to-action volgens jou?
- **Valt op** (goed **contrast** — geen rode knop op rode achtergrond; maak 'm wit/geel zodat 'ie knalt).
- **Kort, krachtig en actiegericht** ("Bekijk product", niet "Productinformatie").
- **Op de juiste plek** + gekoppeld aan de **juiste actie** voor díé pagina (op een eet-bestelpagina geen "Reserveer voor morgen", maar "In winkelmand").
- **Drempelverlaging** bij een hoge drempel: klein tekstje onder de knop ("geen creditcard nodig", "direct beginnen, geen login").
- **Niet concurreren**: de CTA mag niet "verslagen" worden door andere elementen die om aandacht vechten (twee keer dezelfde kleur/actie = ze vechten → niet doen). Eén duidelijke primaire actie laten winnen.

### Hoe kan ik mijn werk beter laten aansluiten op conversiedoelen?

---

## Extra

### Hoe werken SEO en CRO samen binnen een project?
**SEO levert het verkeer (liefst warm, koopgericht); CRO zet dat verkeer om in conversie.** Als beide groeien ontstaat een vliegwiel: meer verkeer dat steeds beter converteert.

> Rico noemt concrete getallen: klanten met een **ROAS van 10–20+** (elke ingelegde euro komt 10–20× terug), opgebouwd door jarenlang aan beide knoppen te draaien. RM's eigen "SEO uitbesteden"-pagina zit rond ROAS ~4.

Voor duurdere diensten gebruikt RM dezelfde "proefrit"-logica als bij de auto: een laagdrempelig aanbod vooraan (**gratis groeiplan / gratis adviesgesprek**) i.p.v. meteen "betaal €1500/maand", omdat direct verkopen een veel lagere conversieratio zou geven.

### Wat doe je als SEO en conversie elkaar tegenwerken?

### Wanneer is een pagina "succesvol"?
Als die zijn doel bereikt binnen de funnel-logica: warm verkeer binnenhalen en dat omzetten in (micro-)conversies, met als ultieme maat de ROAS / het rendement op het ingekochte verkeer.

### Wat zou jij willen dat developers beter begrijpen?
