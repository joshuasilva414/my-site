# Marketing page design

## Scope

This document records the implementation of `/river`, `/bonsai`, and `/mythic-ai`. `layout.tsx` imports `marketing.css`; each page uses `ProductShell` from `components/marketing/shell.tsx`. Product styling is scoped beneath `.product-page` or marketing-specific classes. The existing portfolio has its own design and is outside this document's scope.

## Typography and color

Erode is the primary serif for headings and prose, with Georgia as fallback. Satoshi is the sans serif for navigation, actions, labels, captions, and availability text. Both use the existing font variables. Headings use balanced wrapping, weight 500, and negative letter spacing. Desktop H1 sizes scale to 6rem; H2 uses `clamp(2.4rem, 4.6vw, 4.2rem)`. Body copy is 1.12rem with 1.6 line height. Italic emphasis uses the product accent.

| Token | River | Bonsai | Mythic AI |
| --- | --- | --- | --- |
| Page | `#f8f7f2` | `#101f1a` | `#191c29` |
| Ink | `#17282c` | `#eaf0dc` | `#f0e9db` |
| Muted | `#526064` | `#afc1b3` | `#b9bbcd` |
| Accent | `#244bc1` | `#c6e1a1` | `#c7bde9` |
| Line | `#ccd3cf` | `#395045` | `#464453` |
| Soft surface | `#e9ede7` | `#1b3027` | `#242838` |

Thin borders separate sections. Primary actions have accent backgrounds, 5px corners, and a 50px minimum height. Secondary actions use transparent backgrounds and outlined borders. Screenshot surrounds and illustrated panels generally use 12px corners.

## Shared structure and product visuals

- `ProductShell` provides a skip link, product mark and name, section navigation, primary action, main landmark, and footer links to all three products. The current footer link uses `aria-current="page"`. Lucide waves, sprout, and dice distinguish the products.
- `Action` renders an anchor with a right arrow for section links and an upward-right arrow for other destinations. Hover brightens and raises the action by 2px.
- `Questions` uses native `details` and `summary` elements. Its plus marker rotates when expanded. Links and summaries have visible accent focus outlines.
- River uses a split hero with an evidence note and rotated résumé sheet, followed by an evidence statement, three workflow columns, workspace screenshot, questions, and closing action.
- Bonsai centers its hero above an illustrated three-topic curriculum. Map, Read, and Practice appear as large italic labels in separated rows. Its showcase pairs a product screenshot with explanatory copy.
- Mythic AI uses a split hero with a line-art die, story excerpt, and spoken action. A statement and three workflow columns lead into a wide prototype screenshot.

Product images use `next/image`, descriptive alternative text, explicit dimensions, responsive sizes, and captions. Hero examples are identified as illustrative; the Mythic screenshot is labeled as the actual prototype interface.

## Responsive behavior and motion

Content is capped at 1240px with 56px side gutters. At 1500px and above, the cap becomes 1320px with 80px gutters. At 1000px and below, gutters shrink to 32px and column gaps tighten. At 760px and below, gutters are 20px and section padding generally becomes 64px.

On mobile, header section navigation is hidden while the product name and primary action remain. Split heroes, workflows, showcases, questions, and learning-method rows become single columns. The footer stacks; its product links remain a row. Bonsai's three-topic path stays horizontal, and its showcase image follows the copy. Mobile H1 scales from 3.3rem to 5rem; H2 is generally 2.7rem.

River's paper and Mythic's die have short entrance animations. The decorative voice bars are static, hidden at intermediate widths, and shown again in the stacked mobile layout. Reduced-motion preferences disable animations and transitions.

## Content and availability boundaries

Follow root `PRODUCT.md` when changing claims. River's primary destination is `https://river.jilva.dev`; access may require an invitation. Do not advertise the local replacement editor as available in the hosted release. Explain personal AI provider connections and separate provider charges where relevant.

Bonsai links to its GitHub repository and is described as in development. Mythic AI links to its repository and is described as a voice-driven tabletop roleplaying prototype. Neither page promises a hosted public app. Mythic is independent of Wizards of the Coast and is not presented as a complete rules engine.

Keep examples separate from product screenshots. Do not add unsupported adoption metrics, testimonials, pricing, or guarantees. AI assistance remains subject to user review. Route metadata provides product-specific titles, descriptions, and canonical URLs on `jilva.dev`.
