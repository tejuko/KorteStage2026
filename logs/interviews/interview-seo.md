# Interview — Yannick (AI Search Projectmanager, Ranking Masters)

> **Bron / bijlage bij Leerdoel 2 (Oriënteren en begrijpen).** Interview afgenomen 22/04/2026, antwoorden uitgewerkt 23/06/2026. Onderwerp: SEO / AI Search en de vertaling naar frontend-development. Dit ruwe interview is de basis voor `analyseverslag-2-yannick-seo-frontend.md`.

## Algemeen

**Wat zijn de belangrijkste SEO-factoren voor een frontend developer?**
De meest impactvolle factoren zijn:
- Correcte HTML (juiste heading-structuur, landmarks en HTML5-elementen)
- Paginasnelheid (Core Web Vitals: LCP, CLS, INP)
- Mobile-friendliness
- Correcte implementatie van canonical tags, structured data (Schema.org) en een crawlbare linkstructuur

Bovenal: **communicatie**. Proactief communiceren en de SEO-specialist meenemen in het gehele verhaal.

**Hoe werken jullie samen met developers binnen projecten?**
Idealiter nauw samen via een CRM zoals Monday, waarbij SEO-eisen al als acceptatiecriteria in tickets staan. Regelmatig technische SEO-audits, bevindingen direct met het dev-team bespreken. Geen "over de muur gooien" — samen in reviews en sprintplanningen.

**Op welk moment in het proces betrekken jullie development?**
Wanneer nodig, maar bij het maken van een website het liefst al in de design-fase. Als een pagina al gebouwd is, kost het veel meer tijd en geld om SEO-problemen te fixen (URL-structuur, redirects bij redesigns, hoe een CMS omgaat met metadata). Vroegtijdige betrokkenheid voorkomt technische problemen.

## Vertaling naar frontend

**Hoe vertaal je een SEO-strategie naar concrete aanpassingen op een pagina?**
Een strategie begint bij zoekwoordonderzoek en zoekintentie. Dat vertaal je naar: welke content moet er op de pagina staan (en in welke volgorde), welke heading-structuur past daarbij, welke interne links relevant zijn, en wat er in de title tag en meta description moet. Elke strategische keuze heeft een technische vertaling.

**Welke frontend keuzes hebben de meeste impact op SEO?**
- **Rendering methode:** SSR of static generation is véél beter dan client-side rendering voor crawlers. Een React-app die alles via JavaScript laadt, kan Google's crawler in de problemen brengen.
- **Heading hiërarchie:** één H1 per pagina, logische H2/H3-structuur.
- **Afbeeldingen:** alt-teksten, WebP-formaat, lazy loading, en expliciete width/height om CLS te voorkomen.

**Wat zijn veelgemaakte fouten van developers op SEO-gebied?**
- Alles in JavaScript renderen zonder SSR/SSG
- Ontbrekende of dubbele H1's
- Afbeeldingen zonder alt-tekst of zonder afmetingen (veroorzaakt CLS)
- Canonical tags die naar de verkeerde URL wijzen
- Onnodige redirectchains (A > B > C i.p.v. A > C)
- Robots.txt die per ongeluk belangrijke pagina's blokkeert
- Pagina's die achter een login of JavaScript-event verstopt zitten

**Hoe belangrijk zijn laadtijd en technische structuur?**
Extreem belangrijk. Google gebruikt Core Web Vitals als ranking-factor. Een trage LCP of hoge CLS schaadt zowel ranking als conversie. Technische structuur bepaalt of Google je pagina's überhaupt kan crawlen en begrijpen.

## Diepgang

**Hoe ga je om met conflicten tussen design/UX en SEO?**
Door data te gebruiken i.p.v. meningen. Wil een designer een full-image hero zonder tekst, dan laat ik zien wat dat doet met crawlbaarheid. Vaak is er een middenweg: tekst visueel klein maar semantisch aanwezig. Moet er écht gekozen worden, dan weeg je de business impact af. Soms wint UX, soms SEO. Maar: goede UX is ook goed voor SEO.

**Hoe bepaal je welke pagina's geoptimaliseerd moeten worden?**
Prioriteren op impact: zoekvolume op relevante keywords, huidige ranking (positie 4–15 = "low hanging fruit"), organisch verkeer vs. potentieel, en commerciële waarde van de pagina. Tools: Google Search Console, Ahrefs, Semrush.

**Welke tools gebruiken jullie en wat haal je daar concreet uit?**
- **Google Search Console:** welke queries impressies/clicks genereren, crawlfouten signaleren
- **Ahrefs:** zoekwoordonderzoek, backlinkanalyse, concurrentenvergelijking
- **Screaming Frog:** technische audit van de hele site (broken links, duplicate content, missing tags)
- **PageSpeed Insights / Lighthouse:** Core Web Vitals meten en verbeterpunten identificeren
- **SE Ranking:** keyword rankings en audits

## Toepassing op mijn werk

**Waar moet ik als stagiair vooral op letten bij het bouwen van pagina's?**
Focus op de basis: één duidelijke H1 per pagina, logische heading-hiërarchie, alt-teksten op alle afbeeldingen, snelle laadtijd (afbeeldingen comprimeren, geen onnodige scripts), en zorg dat de pagina zonder JavaScript toegankelijk is voor crawlers. Gebruik semantische HTML: niet alles in `<div>`s. Check altijd of een pagina vindbaar is (niet per ongeluk genoindexed).

**Kun je een voorbeeld geven van een pagina die goed scoort en waarom?**
Een goede productcategoriepagina scoort omdat: de H1 het exacte zoekwoord bevat, er een inleidende tekst is die de zoekintentie beantwoordt, producten snel laden (goede LCP), er interne links zijn naar subcategorieën, en er Schema.org markup (BreadcrumbList, ItemList) aanwezig is. Technische correctheid + relevante content + goede UX = de winnende formule.

**Wat zou ik morgen al anders kunnen doen?**
- Open elke pagina die je bouwt in Lighthouse en check de score
- Controleer elke afbeelding: alt-tekst? gecomprimeerd?
- Bekijk de heading-structuur van je pagina's als een outline
- Installeer de browser-extensie **Detailed SEO Extension** om snel metadata te checken

## Extra

**Hoe werken SEO en CRO samen binnen een project?**
Ze versterken elkaar: SEO brengt mensen naar de pagina, CRO zorgt dat ze converteren. Een pagina die hoog rankt maar slecht converteert is net zo problematisch als andersom.

**Wat doe je als SEO en conversie elkaar tegenwerken?**
Dan test je het. Soms wil SEO lange tekst (keyword-relevantie) terwijl CRO wil dat de CTA meteen zichtbaar is. Oplossing is vaak structureel: tekst onderaan, CTA bovenaan. A/B-testen helpt. In twijfel leidend: welk doel heeft deze pagina primair?

**Wanneer is een pagina "succesvol"?**
Als die zijn doel bereikt. Voor een SEO-pagina: vindbaar op de juiste zoekwoorden, organisch verkeer genereren, bijdragen aan conversies (direct of assisted). Gekeken wordt naar rankings, CTR uit Search Console, bounce rate, tijd op pagina, en uiteindelijk (micro-)conversies.

**Wat zou jij willen dat developers beter begrijpen?**
Dat SEO geen optimalisatie achteraf is, maar een **kwaliteitseis** — net als accessibility of performance. En dat kleine technische keuzes grote gevolgen hebben: een verkeerde canonical, een ontbrekende H1 of een JS-render-probleem kan betekenen dat een pagina maandenlang niet rankt zonder dat iemand het doorheeft.
