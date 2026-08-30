# Host — official sprite pack

Original gorilla fighter. Frohawk, blue vest, red belt, gold cuffs. Not Donkey Kong. No necktie.

## At a glance

| | |
|---|---|
| **What** | Locked identity + 4-dir game sprites |
| **Web pack** | `../sprites/web/pack/<dir>/<clip>/<n>.webp` |
| **Pivot** | Center-bottom |

## Dirs

`down` · `left` · `up` · `right`

`down` and `right` are the locked 3/4 still. `left` and `up` are a horizontal flip.

## Clips

| Clip | Frames | Use |
|---|---|---|
| `idle` | 1 | Locked look |
| `walk` | 2 | Snap at 8fps |
| `roar` `talk` `dance` `flex` | 1 | Emote stills |

Snap between frames. Do not optical-flow morph.
