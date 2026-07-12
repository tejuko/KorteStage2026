# Opdracht 20 — Tomasso Tables: WooCommerce-migratie + media-opschoning

**Type:** Klantproject (WooCommerce-webshop)
**Periode:** gestart 2026-07-06
**Status:** Uploads opgeschoond + geverifieerd; database + eigenlijke migratie klaarstaand
**Locatie:** migratie Kinsta → Hostinger
**Leerdoelen:** 2 (analyseren waar de omvang vandaan komt + welke media écht gebruikt wordt), 4 (opschoning uitvoeren), 5 (verifiëren dat de site heel blijft)

---

## Opdracht

De WooCommerce-webshop van **Tomasso Tables** migreren van Kinsta naar Hostinger. Probleem: de site was met ~50 GB te groot en een eerdere overzet liep vast. Eerst oorzaak achterhalen en veilig opschonen, daarna migreren.

---

## Werkproces

**2026-07-06 — oorzaak achterhaald + uploads opgeschoond**
1. **Onderzocht waar de 50 GB zat** → 96% in uploads, met ~990.000 losse bestanden — het aantal bestanden (niet de GB's) was de echte oorzaak van de vastloper.
2. **Geanalyseerd welke media écht gebruikt wordt:** elk bestand vergeleken met de database én de thema-/plugin-code → **210.236 bestanden in gebruik (8 GB)**; de rest was weesdata van imports.
3. **Veilig opgeruimd (alles omkeerbaar, naar quarantaine buiten de site):**
   - 780.528 ongebruikte mediabestanden (26 GB)
   - wcvtemp + logs + niet-gekoppelde bestanden
4. **Behouden:** alle gebruikte media/video's en de bestaande back-ups — onaangeroerd.
5. **Geverifieerd:** homepage + producten geven allemaal 200 OK, 0 fouten.

---

## Resultaat

- Uploads: **48 GB → 9,3 GB**.
- Migratie-payload (public/) fors omlaag.
- Een deelbare **PDF met alle bevindingen** (op bureaublad).

> 📄 **Bewijsmateriaal:**
> - Het **migratieplan** — [`bijlagen/Tomasso-Tables-migratieplan.pdf`](assets/pdfs/Tomasso-Tables-migratieplan.pdf).
> - De **uitwerking/uitvoering** met alle bevindingen — [`bijlagen/Tomasso-Tables-uitwerking.pdf`](assets/pdfs/Tomasso-Tables-uitwerking.pdf).

---

## Open punten (klaarstaand)

- Database (~6 GB) meenemen.
- De eigenlijke migratie uitvoeren.
- Ná bevestiging de quarantaine definitief legen.

---

## Wat ik eruit meeneem

- Bij een vastgelopen migratie zit het probleem niet altijd in de totale omvang, maar in het **aantal losse bestanden** — ~990.000 stuks overweldigen het overzetproces meer dan de GB's zelf.
- Media veilig opruimen kan **volledig omkeerbaar** door naar een quarantaine buiten de site te verplaatsen i.p.v. te verwijderen — pas na verificatie (200 OK, 0 fouten) definitief legen.
