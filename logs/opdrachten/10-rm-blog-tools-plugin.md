# Opdracht 10 — Ranking Masters: RM Blog Tools plugin (`[seo_calculator]`)

**Type:** Intern project (RM-eigen plugin)
**Periode:** 27/05/2026 — versie 0.4.4 live op staging
**Leerdoelen:** 2 (oriënteren — diep in WordPress-plugin-architectuur), 4 (prototypen en uitwerken), 5 (evalueren — backup-discipline + iteratie-discipline)

---

## Opdracht

Een eigen WordPress-plugin bouwen voor Ranking Masters die een interactieve **SEO calculator** levert als `[seo_calculator]`-shortcode, plus voorbereiding voor een exit-popup. De plugin moet team-vriendelijk zijn: los van het theme, scoped CSS, conditional asset-loading.

---

## Werkproces

### Plugin-structuur
```
/wp-content/plugins/rm-blog-tools/  (v0.4.4)
├── rm-blog-tools.php                 # Bootstrap
├── README.md
├── includes/
│   ├── shortcode-seo-calculator.php  # Shortcode + asset loading
│   └── exit-popup.php                # (uitgeschakeld)
├── templates/
│   └── seo-calculator.php
└── assets/
    ├── css/  (seo-calculator.css ~370KB + V16 overrides, exit-popup.css)
    ├── js/   (seo-calculator.js, exit-popup.js)
    └── images/ (sjors.png, ranky.png, partners-logos.png)
```

### Feature 1 — `[seo_calculator]`-shortcode
- Conditional asset loading (Highcharts CDN alleen bij shortcode-pagina's).
- `has_shortcode` vervangen door `str_contains` vanwege onclosed shortcodes elders.
- Preprocess `the_content` priority **12** (na `wpautop`=10, `do_shortcode`=11) zodat WordPress geen `<br>`/`<p>` injecteert.
- **2488 CSS-selectoren** geprefixt met `.rm-seo-calculator-wrap` voor scope-isolatie.
- **125 `:hover`-rules** vervangen door `.rm-no-hover-disabled` (eis: geen hover-effecten).
- Reveal-snippet voor `.is-loaded`-class (anders blijft calculator `opacity: 0`).
- Asset-permissie-fix: Sjors-photo van 600 → 644 (was 403 op CDN).

### Feature 2 — SEO 2 design (Figma frame 695:3), 16 iteraties
- Title Gilroy-Bold 32px / off-white / max-width 744px / `nowrap`
- Subtitle Ubuntu 20px / off-white / single line
- "1 minuut"-pill transparant (Figma SEO 2 heeft geen pill)
- Input 480×56 wit
- Button 260×48 oranje `#ff7038` met inline `!important` om externe CSS te overrulen
- 5 partners-logos (grayscale, Verno gecropt uit PNG)
- Sjors-PNG bottom-left, Ranky-PNG bottom-right (`right: -60`)
- Step-cover padding `56px 0 40px`, `min-height 480`, deeper blue gradient
- `.seo-calculator max-width: 100%` zodat blog-sidebar intact blijft
- Steps 1/2/3 max-width `1020` (was 650)

### Feature 3 — Exit-popup
- Code geschreven, maar **uitgeschakeld** (`// require_once exit-popup.php`).
- Activeerbaar door één regel uncomment.

---

## Resultaat

- **Live op staging:** https://env-rankingmastersnl-htmlburger.kinsta.cloud/testomgeving-seo-calculator/
- Shortcode `[seo_calculator]` actief op post 36223 voor testen.
- Plugin v0.4.4 actief op de htmlburger staging.


---

## Lessons learned

- **Eigen plugin** > theme-code: herbruikbaar, los van theme, blijft staan bij theme-switch.
- **CSS scope-isolatie** via prefix: alle 2488 selectoren geprefixt = team-vriendelijk en lekvrij.
- **WordPress-hook-volgorde matters**: `wpautop` (10) → `do_shortcode` (11) → eigen preprocess (12).
- **CSS-lasagna anti-pattern**: 15 lagen "even erbij prikken" → "V16 clean reset" met alles eronder weggehaald. Eerder uithalen volgende keer.
- **SCP silent fails** bestaan — altijd `grep` op de remote om wijziging te verifiëren.
- **PIL niet lokaal**: PNG-crops faalden stil → opgelost met `pip3 install Pillow`.
- **Asset-permissies (chmod 600 vs 644)** kan oorzaak zijn van "het laadt niet".

---

## Wat ik eruit meeneem

Dit is mijn eerste WordPress-plugin van scratch — niet een theme-aanpassing maar een losse, herbruikbare unit met eigen bootstrap, eigen scoped assets, conditional loading en een lange iteratie van design tot pixel-perfecte match. Plus een paar pijnlijke maar nuttige lessen (CSS-lasagna, SCP silent fails, permissions). Dit is volwassen WP-werk.
