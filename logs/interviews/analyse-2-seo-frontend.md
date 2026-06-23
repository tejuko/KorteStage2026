# Analyseverslag 2 — SEO/AI Search → frontend (o.b.v. interview Yannick)

> **Bewijsmateriaal Leerdoel 2 (Oriënteren en begrijpen).** Het stageplan vraagt: *"minimaal 2 projecten analyseren op gebruikersgedrag/marketingdoelen → frontend"*, met als bewijs analyseverslagen + toegepaste verbeteringen. Dit is **analyseverslag 2 van 2**, gebaseerd op het interview met **Yannick** (AI Search Projectmanager, RM) van 22-04-2026.
>
> Bron: `bijlagen/interview-yannick-seo-aisearch.md`. Het interview met **Rico** (Head of Tech) werk ik nog uit — dat wordt aanvullend bewijs/verdieping.
>

---

## 1. Onderwerp in één zin

Hoe een **SEO-/AI-Search-strategie** binnen Ranking Masters wordt vertaald naar **concrete frontend-keuzes**, geanalyseerd op basis van een interview met onze AI Search Projectmanager en toegepast op mijn eigen pagina's.

## 2. Het marketingdoel achter SEO — en waarom frontend daarin bepalend is

De kernboodschap van Yannick: **SEO is geen optimalisatie achteraf, maar een kwaliteitseis** — net als accessibility of performance. Het marketingdoel (vindbaar zijn op de juiste zoekwoorden → organisch verkeer → conversies) staat of valt met technische uitvoering op de frontend.

De strategie loopt volgens Yannick van **zoekwoordonderzoek en zoekintentie** naar concrete pagina-keuzes:
- welke content op de pagina staat en in welke **volgorde**;
- welke **heading-structuur** daarbij past;
- welke **interne links** relevant zijn;
- wat er in de **title tag** en **meta description** moet.

> *"Elke strategische keuze heeft een technische vertaling."* — Yannick

Daarmee is dit verslag de logische pendant van analyseverslag 1: dáár voerde ik een SEO-linkplan uit (de interne-links-laag), hier analyseer ik de **volledige** vertaalslag van marketingdoel → frontend.

## 3. Analyse: van SEO-strategie naar concrete frontend-keuzes

Uit het interview komen de frontend-keuzes met de meeste impact naar voren. Ik orden ze naar het gebruikers-/crawler-gedrag dat ze beïnvloeden:

| Frontend-keuze | Waarom (gedrag van bezoeker én crawler) |
|---|---|
| **SSR / static rendering i.p.v. client-side** | Een crawler die alles via JavaScript moet laden, ziet de pagina mogelijk niet. Server-side gerenderde HTML is direct leesbaar → de pagina kan überhaupt ranken. |
| **Eén H1 + logische H2/H3** | Geeft Google (en screenreaders) de outline van de pagina. Dubbele/ontbrekende H1's maken het thema onduidelijk. |
| **Afbeeldingen: alt-tekst, WebP, lazy loading, expliciete width/height** | Alt = begrijpbaarheid + toegankelijkheid; WebP + lazy = snelheid (LCP); width/height voorkomt **CLS** (verspringende layout = slechte UX én ranking-schade). |
| **Core Web Vitals (LCP, CLS, INP)** | Directe ranking-factor én conversie-factor. Trage of springerige pagina's verliezen bezoekers. |
| **Canonical tags + crawlbare linkstructuur** | Voorkomt duplicate content en zorgt dat link-waarde naar de juiste pagina gaat. |
| **Schema.org (BreadcrumbList, ItemList)** | Helpt Google de structuur te begrijpen; levert rijke resultaten op die de CTR verhogen. |
| **Mobile-friendliness** | Mobile-first indexing: de mobiele versie is leidend voor de beoordeling. |

Het inhoudelijke inzicht dat ik hieruit haal: **goede UX en goede SEO wijzen meestal dezelfde kant op.** Waar ze botsen (bv. SEO wil lange tekst, CRO wil de CTA bovenaan), is de oplossing volgens Yannick vaak *structureel* — CTA bovenaan, tekst eronder — en anders **testen** (A/B), met als leidende vraag: wat is het primaire doel van déze pagina?

## 4. Toegepast in mijn eigen werk

De principes uit het interview herken ik direct in pagina's die ik tijdens mijn stage heb gebouwd. Concreet:

- **Server-side rendering** — al mijn pagina's draaien op WordPress/PHP met ACF: de HTML wordt server-side opgebouwd (o.a. de dynamische SEO-template en de case study-template met flexible-content-modules). Dat sluit precies aan op Yannicks "SSR > client-side rendering".
- **Core Web Vitals** — bij **Sabé Verpakkingen** een PageSpeed-verbeterplan uitgevoerd (scores grotendeels groen; performance-score was het laatste aandachtspunt). Dit is letterlijk het meten/verbeteren van Core Web Vitals dat Yannick noemt.
- **Crawlbare structuur** — bij Sabé het interne linkplan (analyseverslag 1) + de sitemap-fix met `lastmod` voor subcategoriepagina's. Beide raken direct aan "crawlbare linkstructuur".

**Wat ik morgen al anders doe (Yannicks tips, direct toepasbaar):**
1. Elke nieuwe pagina door **Lighthouse** halen en de score checken.
2. Elke afbeelding nalopen: alt-tekst aanwezig? gecomprimeerd (WebP)? width/height gezet?
3. De heading-structuur als outline bekijken (één H1, logische hiërarchie).

## 5. SEO ↔ CRO — relevant voor mijn landingspagina's


## 6. Wat ik hieruit leer over "gebruikersgedrag → frontend"

- **Crawlbaarheid is een gebruiker-vóór-de-gebruiker.** Voordat een bezoeker de pagina ziet, moet Google hem kunnen lezen. Frontend-keuzes (rendering, headings, Schema) bepalen of de pagina überhaupt gevonden wordt.
- **Snelheid is gedrag.** LCP/CLS zijn niet "techniek voor de techniek" — een springerige of trage pagina verliest echte mensen én ranking. Performance is dus een UX-keuze.
- **SEO is een kwaliteitseis, geen extraatje.** Net als bij analyseverslag 1 (kwaliteit begint bij de uitvoerder) geldt: kleine technische keuzes — een verkeerde canonical, een ontbrekende H1 — kunnen maandenlang onzichtbaar schade doen. Bewust bouwen voorkomt dat.
- **Vroeg betrekken loont.** SEO achteraf inbouwen kost veel meer tijd/geld dan het vanaf de design-fase meenemen — een argument om als front-ender vroeg mee te praten in projecten.
