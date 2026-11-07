# Nehmat Gereige — portfolio homepage

One refined homepage combining the Catalyst's leadership and education narrative with the Humanist's values, using the Explorer visual direction.

Run `python3 -m http.server 8000 --bind 127.0.0.1` and open http://127.0.0.1:8000.

## Selected direction

- Leadership and team enablement lead the story.
- Strategy, design systems, and education form the practice section.
- Human values explain the approach beneath that leadership umbrella.
- Curated learning resources link to existing YouTube videos.
- Contact links use email and LinkedIn.
- A single static homepage replaces the comparison tabs and game discovery mechanics. Native links and disclosures work without JavaScript.

## Design sources

Uses the provided Figma design system, file `2OKAewBQYU6CsnOc9imfPk`, Colors frame `6:34`: cyan primary scale, neutral surfaces, Aclonica headings, Nunito body text, and 8px control corners. Larger rounded scene containers extend that foundation. The original CSS explorations remain as styling history; `.unified` defines the selected homepage refinements.

Avatar: user-provided 2026 illustration at `img/nehmat-avatar-2026-front-facing.png`.

Copy is proposed wording based on the original portfolio, public LinkedIn activity, and user-provided context. No unverified business outcome metrics or endorsements have been added. Other pages are outside this refinement's scope.

Google Fonts supplies typefaces, with system fallbacks. Reduced-motion preferences disable the avatar animation and smooth scrolling.

## Verification

Checked desktop and mobile layouts, section anchor targets, image loading, native disclosures, removal of comparison tabs, and browser errors. No horizontal overflow or browser errors were observed in the checked layouts.

## Continuous ocean experience

The homepage uses `img/ocean-of-ideas.png` as a continuous ocean environment. `css/ocean.css` adds scroll-driven depth, turquoise light, drifting particles, and translucent content panels. The centered avatar still switches to the real portrait. The former opening exploration bubbles have been removed.

Three animated jellyfish reveal draft insights about leadership, human judgment, and shared learning. Their buttons support keyboard interaction and Escape closes the insight. Visitors can pause motion, and system reduced-motion preferences are respected.

Verified the ocean opening and content visually, image loading, insight reveal, desktop/mobile horizontal fit, and pause/resume state. The insight copy is provisional for editorial refinement.

## Portfolio design system

Use [tokens.css](css/tokens.css) and [components.css](css/components.css) when building a portfolio page. Load tokens before the page styles and shared components after them.

- Use semantic tokens for UI roles, such as `--ds-color-text`, `--ds-color-body`, `--ds-color-panel`, and `--ds-color-accent`. Use the existing spacing, radius, and type tokens before adding a new value.
- Use `<a class="ds-button ds-button--primary" href="…">Explore the project</a>` for a primary destination. Switch to `ds-button--secondary` for a supporting action. Use a native `button` for actions that change the current page.
- Use `ds-section ds-surface ds-surface--glass` for a homepage panel, `ds-section ds-section--offer ds-surface` for a service panel, and `ds-section-divider` for a case study section.
- Use `ds-surface ds-surface--card` for a card. Keep card artwork and content layout in the page styles.
- The `--palette-*` values preserve colors from existing artwork and legacy pages. For new UI, give a recurring color a semantic role in the token file. Keep literal hex values in that file. Vendor CSS and standalone image assets have their own palettes.
