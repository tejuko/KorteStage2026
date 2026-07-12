# Opdracht 14 — Eigen logboek-tooling ("Stage Logboek")

**Type:** Eigen tooling (ondersteunt mijn stage-administratie)
**Periode:** gebouwd 2026-06-29, doorlopend in gebruik
**Status:** Werkend en in dagelijks gebruik
**Locatie:** `Stage/` werkdirectory — `.claude/commands/`, `tools/`, `logboek/` + `~/Desktop/Stage Logboek.app`
**Leerdoelen:** 4 (zelf iets bouwen en itereren), 5 (mijn eigen werkwijze + bewijsmateriaal-verzameling verbeteren)

---

## Opdracht

Een eigen, herbruikbare workflow bouwen om mijn stage-logboek bij te houden: daglogs en weekreflecties snel en consistent kunnen maken, en screenshots/foto's als bewijsmateriaal moeiteloos in de logboek-media kunnen opslaan. Doel: minder drempel om elke dag te loggen → completer bewijsmateriaal voor mijn stageverslag.

---

## Werkproces

**2026-06-29 — gebouwd**
- **Twee herbruikbare slash commands:**
  - `/daglog` (`.claude/commands/daglog.md`): ik plak een brain-dump, de command structureert die naar `logboek/template-dag.md`, koppelt aan mijn 5 leerdoelen, verwerkt media en werkt `stageopdrachten/` bij.
  - `/weekreflectie` (`.claude/commands/weekreflectie.md`): bundelt de daglogs van de week tot `logboek/week/JJJJ-Www.md`.
- **Media-inbox ingericht:** ik dump screenshots/foto's in `logboek/inbox/`; bij `/daglog` worden ze automatisch verplaatst naar `logboek/media/JJJJ-MM-DD/` en in de log gelinkt (`LEESMIJ.md` blijft staan).
- **Plak-naar-media-tool** (`tools/plak-naar-media.sh`): een gekopieerde afbeelding wordt via het klembord direct als PNG opgeslagen in de media-map van die dag (klembord → PNG via AppleScript `«class PNGf»`).
- **Desktop-app** `~/Desktop/Stage Logboek.app`: klikbaar icoon in RM-kleuren (navy/oranje notitieboek) met een keuzevenster van 3 opties: Daglog / Weekreflectie / "Afbeelding uit klembord opslaan".

---

## Technische opbouw

- **Slash commands:** markdown-commands in `.claude/commands/` die Claude Code uitvoert.
- **macOS `.app`:** minimale app-bundle (`Info.plist` + launcher-script + eigen `.icns`-icoon).
- **AppleScript:** opent een Terminal met `claude '/daglog'` resp. `'/weekreflectie'`, en schrijft het klembord weg als PNG (`the clipboard as «class PNGf»`).

---

## Resultaat

Werkende logboek-workflow, dagelijks in gebruik vanaf 2026-06-29.

![Het keuzevenster van de Stage Logboek-app: Daglog maken / Weekreflectie maken / Afbeelding uit klembord opslaan](media/2026-06-29/stage-logboek-app-keuzevenster.png)

![Het app-icoon op het bureaublad in RM-kleuren (navy/oranje notitieboek)](media/2026-06-29/stage-logboek-app-icoon.png)

---

## Wat ik eruit meeneem

- Door de drempel om te loggen weg te halen (één klik + brain-dump plakken) verzamel ik veel completer en consistenter bewijsmateriaal voor mijn stageverslag.
- Eerste keer een macOS `.app` + AppleScript-tooling gebouwd — kleine eigen tools kunnen mijn dagelijkse werkwijze flink versnellen.
