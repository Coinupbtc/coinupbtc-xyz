# Host — module contract

Official frohawk gorilla. One identity. Snap frames, never morph.

## Controls

| Control | Where | What it does |
|---|---|---|
| Paint: Color / Punch / Dusk | top, ≥44px | Filter on the same sprites |
| Emote chips | under the stage, ≥44px | Play that clip |
| `/cmd` + Go | bottom | Same as chips; unknown lists help |
| `/twirl` | chip or type | Cycle 4-dir facings |
| `/walk` `/roar` `/talk` `/dance` `/flex` | chip or type | Pack clips |
| `/idle` | chip or type | Locked identity, down facing |

Thumb-only. No hover-only. Phone frame **390×844**.

## What’s in frame at spawn

- Host (frohawk, blue vest, red belt, gold cuffs) centered on the black stage
- Pedestal glow under his feet
- Line: “Host holds the floor.”
- `/idle` chip selected

## Pack

`sprites/web/pack/` — this page (WebP). Godot: same folders, frames `0.webp`…

Dirs: `down` `left` `up` `right`. `down`/`right` = locked 3/4. `left`/`up` = mirror (camera orbit i2i would not hold identity).
