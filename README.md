# coinupbtc.xyz — the lab

![Screenshot](docs/screenshots/hero.png)

## At a glance

| | |
|---|---|
| **What it is** | Six interactive demos you poke in the browser — measured mechanisms, plus Host. And a signal-feeds storefront. |
| **What it's for** | Show the mechanism behind work done on my own hardware — not screenshots of it. |
| **How to use it** | Open https://coinupbtc.xyz/ — pick a card. Or `./setup.sh` for a local preview. |

The landing hub is **[coinupbtc.com](https://coinupbtc.com/)**
([repo](https://github.com/Coinupbtc/Coinupbtc.github.io)). This domain is the part you can poke.

## The demos

| | Page | What it does |
|---|---|---|
| 01 | [`demos/mempool.html`](demos/mempool.html) | Simulated mempool. Transactions arrive, sort into fee bands, and race for space in the next four blocks. Set a fee rate and see which block takes you — or whether the cutoff climbs past you when demand rises. |
| 02 | [`demos/spec-decode.html`](demos/spec-decode.html) | Speculative decoding. A small model guesses `k` tokens ahead, a big one verifies in a single pass. Plots speedup against draft length so the peak — and the decline past it — is visible. |
| 03 | [`demos/render-cost.html`](demos/render-cost.html) | A real O(N) render bug, reproduced. 516 rows, one click, two implementations, **timed in your browser**. |
| 04 | [`demos/memory-pack.html`](demos/memory-pack.html) | Pick 1 / 2 / 3 Sparks. Tap models. Watch each 121 GB tank fill — per-Spark residents from this box. |
| 05 | [`demos/moire.html`](demos/moire.html) | Two grids that almost agree. Detune or rotate one and the interference pattern appears. Includes the exact parameters of the site-motif headers. |
| 06 | [`demos/host/`](demos/host/) | Slash-command Host. `/twirl` `/walk` `/roar`. |

![Host](docs/screenshots/host.png)

## Rules these pages follow

- **Small.** Demos 01–05 are one HTML file each. 06 Host is one HTML file plus sprites.
  No backend, no framework, no build step, no bundler, no dependencies beyond a webfont.
- **No tracking.** No analytics, no cookies, no third-party scripts, no network calls at runtime.
- **Numbers are measured, not asserted.** Demo 03 times the visitor's own machine and prints what
  it finds. Demo 04 uses per-Spark residents from this box.
  Where a page is a simplification, it says so and lists what it leaves out.
- **Motion is optional.** Every animation respects `prefers-reduced-motion`.

## Notes worth keeping

**Demo 03 — timer resolution is a trap.** The fast path runs far under the clock's resolution, and
browsers deliberately coarsen `performance.now()` to resist fingerprinting (Brave quantises to
100µs). Timing a single call, or even a fixed batch, can land inside one tick and read `0.00` —
which would make the headline ratio a fabrication. The page grows the batch until the total clears
the timer floor by a wide margin, then divides. It also caps the slow path against a 4-second
budget so a 2048-row run cannot lock the tab, and races `requestAnimationFrame` against a timer so
a backgrounded tab cannot stall the run forever.

**Demo 01 — the simulation is calibrated, not decorative.** Arrival volume is tuned against block
drain so that "Busy" holds the backlog roughly steady; the demand slider therefore genuinely decides
whether the mempool grows or clears, and the cutoff moves with it. Each moving dot carries a bundle
of transactions rather than one, because drawing them individually would put tens of thousands of
rectangles on screen for no extra information.

## Try it

### One command
```bash
git clone https://github.com/Coinupbtc/coinupbtc-xyz.git
cd coinupbtc-xyz && ./setup.sh
# → http://127.0.0.1:8766/
```

### One click
https://coinupbtc.xyz/ — or Host at https://coinupbtc.xyz/demos/host/

Or open `index.html` directly. Demos 01–05 work from `file://`; Host needs the folder (or `./setup.sh`).

## Contact policy

Pseudonymous: no real name, employer, school, phone, or street address.
Inbound: [GitHub](https://github.com/Coinupbtc) · [X @coinupbtc](https://x.com/coinupbtc).

## Stack

Static HTML, one file per page. Fraunces + IBM Plex Mono via Google Fonts. Design tokens match
`coinupbtc.com` so the two domains read as one brand. The header motif is pure CSS — two
`repeating-radial-gradient` ring sets, no image and no JavaScript.

## Custom domain
