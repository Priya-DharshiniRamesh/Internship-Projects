# WEEK 2 : Responsive Web Layout

**DecodeLabs Frontend Development Internship | Batch 2026**  
**Project 2 (Week 2): Responsive Web Layout**  
**Author:** Priya Dharshini R

A responsive, mobile-first website for **Riverbend Cycles**, a fictional bike repair and commuter-build shop. It is built with plain HTML and CSS only: no JavaScript, no frameworks, no build tools.

---

## Project Goal

Build a responsive webpage that works across different screen sizes, using CSS media queries, responsive navigation, and proper spacing and alignment.

## Requirements Checklist

| Project requirement | How it is met |
|---|---|
| Viewport meta tag | `width=device-width, initial-scale=1` in `index.html`. Zoom is not disabled (no `user-scalable=no`). |
| Mobile-first base CSS | Base styles target phones. `min-width` media queries add layout at 768px and 1024px. |
| CSS media queries | Tablet (`min-width: 768px`), desktop (`min-width: 1024px`), and `prefers-reduced-motion`. |
| Grid for macro layout | Hero, main content and sidebar, card grid, and footer use CSS Grid. |
| Flexbox for components | Header, buttons, cards, hours list, and nav list use Flexbox. |
| Fluid units | `rem`, `%`, `vw`, `dvh`, and `clamp()` for type and spacing. |
| Responsive navigation | Hamburger button and slide-in panel on mobile, horizontal links on tablet and up. |
| Accessible touch targets and zoom | Buttons, the hamburger, nav links and footer links have a minimum height of 44px (`2.75rem`), and pinch zoom is allowed. |
| Proper spacing and alignment | Spacing tokens (`--gutter`, `--section-space`) scale fluidly with the screen. |

## Features

- **Popover API navigation.** The mobile menu uses the native HTML `popover` attribute with `popovertarget`, so open, close, `Esc`, and click-outside all work without JavaScript. On screens 768px and wider the same element is restyled as a normal horizontal nav.
- **Fluid typography.** Headings and lead text use `clamp(min, ideal, max)` to scale smoothly instead of jumping between breakpoints.
- **Self-adjusting card grid.** `repeat(auto-fit, minmax(min(100%, 16rem), 1fr))` adds or removes columns based on available space.
- **Container query.** The "Commuter builds" block responds to its own width (`@container (min-width: 36rem)`), switching from stacked to side by side.
- **Sticky header and sidebar.** The header is always visible, and the "Visit the shop" sidebar sticks beside the content on desktop.
- **Inline SVG.** A decorative hero wave and a bike illustration, both hidden from assistive technology.
- **Design tokens.** Colours, fonts, spacing, and radius are CSS custom properties in `:root`.

## Responsive Behaviour

| Screen | Layout |
|---|---|
| **Mobile** (under 768px) | Single column. Hamburger menu opens a side panel. Hero stacks. Sidebar sits below the main content. |
| **Tablet** (768px and up) | Nav links in a horizontal row. Hero becomes two columns. Footer becomes three columns. |
| **Desktop** (1024px and up) | Main column plus a 19rem sticky sidebar. |

## Accessibility

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, and `dl` for opening hours
- "Skip to content" link
- Visible `:focus-visible` outlines on all interactive elements
- `aria-label` on the menu, close button, and both navs
- Decorative SVGs use `aria-hidden="true"`
- Text and layout sizing uses `rem` so user font settings are respected
- Buttons, the hamburger, nav links and footer links have a minimum height of 44px for easy tapping
- `scroll-behavior: smooth` is switched off for users who prefer reduced motion
- `scroll-padding-top` keeps anchor targets clear of the sticky header

## Page Sections

1. **Header and navigation**: brand, hamburger, links (Services, Commuter builds, Visit, Book a repair)
2. **Hero**: headline, call-to-action buttons, "Today at the shop" panel
3. **Services**: Tune-up, Wheel and brake repair, Puncture fix
4. **Commuter builds**: featured block with SVG illustration
5. **Visit the shop**: opening hours, address, bike racks
6. **Contact**: call and email buttons
7. **Footer**: brand note, links, copyright

## Project Structure

```text
riverbend-cycles/
├── index.html     # page structure and content
├── style.css      # all styling, mobile-first
└── README.md
```

## How to Run

1. Download or clone the project folder.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, or Safari).
3. To test responsiveness, resize the window or open DevTools (`F12`) and use device mode.

> The heading font (Bricolage Grotesque) loads from Google Fonts, so it needs an internet connection. Without one, the page falls back to `system-ui`.

## Notes

- The "Call the shop" button and the email link use placeholder contact details, since Riverbend Cycles is a fictional business.
- Requires a modern browser that supports the Popover API, container queries, and `dvh` units.

## Technologies

HTML5, CSS3, CSS Grid, Flexbox, CSS Container Queries, `clamp()`, CSS custom properties, HTML Popover API, SVG, Google Fonts

## What I Learned

- Designing mobile-first and adding complexity only as space allows
- Using Grid for page layout and Flexbox for components
- Making type and spacing fluid with `clamp()` instead of many breakpoints
- Building a JavaScript-free responsive menu with the Popover API
- Using container queries so components adapt to their container rather than the screen
- Treating accessibility (touch targets, zoom, focus, semantics) as a baseline requirement

## Conclusion

This project showed me that responsive design is about letting content flow to fit any screen instead of fixing it to set dimensions. By building mobile-first and using Grid, Flexbox, `clamp()` and container queries, the Riverbend Cycles site adapts smoothly from phones to desktop monitors using two main responsive breakpoints. The Popover API gave me a working mobile menu without any JavaScript, and building in accessibility from the start (touch targets, zoom, focus styles, semantic HTML) made the site easier for everyone to use.

The project is a solid foundation for the more interactive components in the projects that follow.

## Acknowledgements

Completed as part of the Frontend Development Internship at **DecodeLabs**. Riverbend Cycles is a fictional business created for practice.
