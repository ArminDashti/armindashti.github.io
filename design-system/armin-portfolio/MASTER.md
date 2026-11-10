# Design System Master: Armin Portfolio

> Cursor Dark product aesthetic for armindashti.github.io.
> Generated from ui-ux-pro-max, then locked to Cursor theme tokens used in `src/index.css`.

## Style

- **Name:** Cursor Dark (editor)
- **Mode:** Dark only
- **Keywords:** near-black, orange accent, editor chrome, mono labels, subtle grid
- **Avoid:** VS Code blue (#007acc), purple/glow AI defaults, cream backgrounds, rounded-full pill nav clusters, white logo plates on dark UI, light-mode default

## Colors

| Role | Hex / value | CSS variable |
|------|-------------|--------------|
| Background | `#0a0a0a` | `--bg` |
| Elevated | `#141414` | `--bg-elevated` |
| Hover | `#1c1c1c` | `--bg-hover` |
| Text | `#ededed` | `--text` |
| Text soft | `#a1a1a1` | `--text-soft` |
| Text muted | `#737373` | `--text-muted` |
| Accent | `#f54e00` | `--accent` |
| Accent soft | `#ff6b2b` | `--accent-soft` |
| Accent muted | `rgba(245, 78, 0, 0.16)` | `--accent-muted` |
| Border | `rgba(255,255,255,0.08)` | `--border` |
| Border strong | `rgba(255,255,255,0.14)` | `--border-strong` |

## Typography

- **Display / chrome labels:** JetBrains Mono
- **Body:** IBM Plex Sans
- Google Fonts: `IBM+Plex+Sans` + `JetBrains+Mono`

## Layout

- Max width: `--page-max: 840px`
- Radius: `8px`
- Nav: editor-tab strip (soft radius), not pill bar
- Logos: `ThemeLogo` dark elevated pad — never `bg-white`

## Motion

- Page enter: translateY + opacity ~400ms
- Nav underline: 250ms
- Hover: 150–250ms color/border only
- Respect `prefers-reduced-motion`

## Atmosphere

- Soft orange radial + faint editor grid on `--bg`
- Top accent hairline in `PageShell`
