# localember.com homepage v2 (fresh mock, box only)

Static design preview. Nothing was published, pushed or uploaded, and the live site wasn't touched. Run it with `python3 -m http.server` in this folder, then open `index.html`. Every page carries the banner "Design preview by Local Ember. Not the live site." and has `noindex`.

## Direction: "Ember to paper"

The page opens on a warm near-black hero. A real flame (Local Ember's own hero video, cropped so the flame sits centered) rises behind a centered, mixed-case headline: "You deserve a *partner,* not another account." As you scroll on desktop, the headline holds and fades, and a browser window showing a live client site (Active Spine & Joint) rises out of the flame, tilted back, then flattens and scales up to fill the frame. This is AlphaLedger's "headline holds, then the real thing arrives" device, using our actual work in place of a dashboard. After that, the page warms into paper-colored editorial sections (who we work with, a numbered partnership ledger, steps, FAQ), with two dark bands for proof: real client sites in browser and phone frames, and four "why us" cards. Those cards use AlphaLedger's object-plus-frosted-panel device, with flame stills as the object and a real fact on the frosted panel, and the caption sits below the box. The flame is the one recurring motif, and it shows up again behind the closing form.

Motion uses the shared plumbing from `design-references/process/motion-and-sticky-bar-pattern.md`: 16px fade-up reveals with a 50ms stagger, a one-time hero entrance, `prefers-reduced-motion` support (no scroll scrub, no autoplay, everything visible at once), a phone sticky "Book a discovery call" bar that appears after the hero buttons scroll away and hides at the form, and focus rings on `:focus-visible` only. Below 961px the scroll scrub is off and the frame simply sits flat under the flame.

### How it differs from the client designs we sell (six-axis check vs `our-designs/README.md`)

| Axis | This page | Closest client designs |
|---|---|---|
| Type | `GROTESK-MEDIUM + SERIF-ITALIC` (Inter Tight 500, mixed case, tight, with one Instrument Serif italic accent word) | Apex/Brink/Alpine use heavy geometric sans, Atlas and Custom Fitness use condensed caps, Sage/Grove/Body Bella use serif headlines, and Kodiak uses grotesk caps. None pairs a medium grotesk with an italic serif accent. |
| Hero | `SCROLL-SCALE-REVEAL` (centered headline, then a real site rises and fills the frame) | No split hero, no photo card, no floating badges, no full-bleed photo with copy bottom-left. Recovery Lounge is also centered on dark, but it's static Cinzel caps with orbs. |
| Color | `DARK-WARM → PAPER` (#100C09 to #F5EFE6, one ember accent) | Apex is navy/ink with green, Atlas is ink with orange-red caps, Recovery Lounge is near-black with ice blue. |
| Density | Medium, editorial ledger rows | |
| Motion | Scroll-linked hero transform plus flame video | The Atlas/CFS reveal JS is reused only as plumbing. The hero motion is new. |
| Imagery | Our own work in device frames, plus flame "objects" | No practice or lifestyle photography, no scrim. |

Result: it differs on 5 to 6 of 6 axes from every design in the catalog, and it uses none of the banned moves (condensed-caps split hero, floating stat badges, pill nav, Ken Burns, bento).

## Fonts and colors

- Display and body: **Inter Tight** (variable, 400 to 600, self-hosted in `assets/fonts/`). Headlines are 500 weight with -0.03em tracking.
- Accent: **Instrument Serif Italic**, used only for one accent phrase per heading, the ledger numbers, the step numbers and the FAQ "+".
- Ink `#100C09`, ink-2 `#1A1410`, cream text `#EFE7DD`, muted cream `#B9AC9E`
- Paper `#F5EFE6`, paper-2 `#EDE4D8`, paper ink `#1C1612`, muted `#5E5248`
- Ember (brand orange) `#FC911C` for buttons and accents on dark. Ember-deep `#A8460A` for accents and text on paper (5.2:1).
- The logo is the existing T2 lockup (`assets/logo-T2.png`). Cultivate's name and logo don't appear anywhere.

## Every factual claim and its source

| Claim on the page | Source |
|---|---|
| Local Ember serves chiropractors first, plus other local businesses | Google Doc "Local Ember Business Context" (read Oct 9, 2026) says "Sold to independent healthcare practices, mostly chiropractors, plus some other local businesses" |
| We build, host, secure and edit the site | Business Context: the subscription "covers the site build, hosting, security, edits, SEO, content, and a GoHighLevel (GHL) account" |
| You review a preview link before launch | Business Context, Build stage: "The client reviews a preview link before launch" |
| Google Business Profile, local SEO, tracking Maps and search positions | Business Context, Main platforms (Google Maps) and Baseline stage |
| We run Google and Meta ads, and you pay ad spend directly, never through us | Business Context: "We run Google and Meta ads. The client pays Google and Meta for ad spend directly, never through us." |
| Content is the biggest lever for search and AI answers | Business Context: "Content is ... the main lever for search and AI visibility" |
| Leads land in the client's own GoHighLevel account, with automated follow-up | Business Context: a GHL account is included and "leads land in GHL". The follow-up automation scope came from the brief (Oct 5 decisions). |
| Site ready to go in 10 business days | Business Context, Onboarding: "We promise a site ready to go in 10 business days" |
| We measure Maps, search and ChatGPT before changing anything, then re-measure monthly | Business Context, Baseline stage |
| A check runs every night against the live sites | Business Context, Ongoing care |
| Discovery call is a video call with John, and he'll tell you if you're not a fit | Business Context, Sales: "John sells on video calls. His approach is to disqualify, not to push for a close." |
| You email or call us with changes, and edits are included | Business Context, Ongoing care and the subscription line |
| 120+ clients | Business Context: "roughly 120 to 130+ paying clients, including GrowGonstead ... not counted exactly yet" (**placeholder, see below**) |
| "from New Jersey to Colorado" | The live client sites shown (Rio Grande NJ, Boulder CO, plus PA, OH, SC, FL, WI) |
| Client sites and locations: Active Spine & Joint Institute (Rio Grande, NJ), Choice Chiropractic & Wellness Center (Boulder, CO), Kirshner Health Solutions (Allentown, PA), Stull Chiropractic Center (Kettering, OH), The Recovery Lounge (Summerville, SC), Body Bella (weight loss for women), AHEAD Human Resources (Green Bay, WI), Kodiak Sky Clean (Orlando, FL) | `design-references/our-designs/*/NOTES.md` (each marked live and built by us). On Oct 9, 2026 each URL returned HTTP 200 with the matching page title. Kettering, OH and Rio Grande, NJ come from each site's own schema `addressLocality`. Screenshots are the catalog's live 1440 and 390 captures from 2026-10-09. |
| Left out on purpose | Brinka (live, but originally built by getconcise, not us), Spine Design (the same design as Active Spine), and every preview or unpicked option: Atlas, Custom Fitness, Capela, Precision, Palmetto, LakeWorks, KPM, QTR, The List |
| TrackStat adds AI automation on top of the chiropractic EHR a practice already uses, for reactivation, reminders and reviews | trackstat.org (schema description: "TrackStat builds AI automation for chiropractic EHRs ... working on top of the system a practice already uses", plus "Patient reactivation") and `onboarding/bailey-health/PROSPECT-PREP.md` (recall, reactivation, reminders, reviews, scheduling, EHR integrations) |
| Some of our clients already use TrackStat | `localember-src/INFLIGHT.md` (Gilmore: "Trackstat working") and `onboarding/atlas-chiro/call-notes-2026-10-05.md` (TrackStat embeds) |
| No long-term contract | Business Context subscription line (**placeholder for the new levels**) |

No testimonials, star ratings, rankings, lead counts or results numbers are on the page.

## Placeholders John must confirm (all visible as dashed "[John to confirm ...]" tags)

1. **Client count "120+"** (Why section). The doc says roughly 120 to 130+, uncounted, and including GrowGonstead. Pick a number or drop the card.
2. **Permission to feature each client** (Work section header). Eight live sites are shown and linked.
3. **TrackStat wording** (TrackStat band). It needs TrackStat's OK before going live. No TrackStat logo is used.
4. **Pricing and level names** (FAQ). The page shows no dollar amounts, uses discovery-call framing, and says "we're finishing three partnership levels right now."
5. **No long-term contract** (FAQ). It's true for today's subscription. Confirm it holds for the new levels.
6. **Booking link and contact email** (closing CTA). The form is a placeholder that sends nothing. Its submit shows "In this preview nothing was sent."
7. Also worth a look: the sentence "One team that actually knows your practice" (hero) and "Email or call us and it gets handled" (FAQ) reflect how support works today with John. Reword them if support changes once Ebisa joins.

## QC (Oct 9, 2026, Chrome on the box)

- No horizontal scroll at 360, 390 or 1440 (`scrollWidth == innerWidth`).
- No overlapping text boxes at 360, 390 or 1440 (pairwise check, closed FAQ answers excluded). The desktop reveal frame never starts above the hero buttons, which was checked at 1280x720, 1024x768 and 1440x900.
- Contrast: every text node passes WCAG AA against its background (script check). The frosted panels were checked by hand at their worst case (about 5.8:1).
- An rg search for the em dash and en dash characters finds none in index.html, CSS or JS. Visible copy has no colons at all.
- QC scripts are in `_qc/` (`shoot.py` makes the shots, `qc.py` checks contrast and overflow, `qc2.py` checks overlaps).

## Shots (`shots/`)

- `1440-first-screen.png`, `1440-full-page.png` (the full page renders with reduced motion so the pinned hero shows flat)
- `1440-hero-reveal-mid.png`, `1440-hero-reveal-end.png` (the scroll reveal in motion)
- `390-first-screen.png`, `390-full-page.png`, `390-menu-open.png`
- Extras: `390-sticky-bar.png`, `390-form-submitted.png`

## Files

`index.html`, `assets/styles.css`, `assets/site.js`, `assets/fonts/` (Inter Tight and Instrument Serif woff2), `assets/flame.mp4` (cropped from `localember-research/Local-Ember-Hero-1920x900-1.mp4`), `assets/flame-poster.jpg`, `assets/flame-obj-1..4.jpg` (stills from the same video), `assets/logo-T2.png` and `logo-T3.png`, and `assets/work/*` (resized from the `our-designs` catalog captures).
