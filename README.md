# coinupbtc.xyz

| | |
|---|---|
| **What it is** | The holding page for `coinupbtc.xyz`, a workshop domain. |
| **What it's for** | Keep the domain under my control (not registrar parking) and make future use free. |
| **How to use it** | Open https://coinupbtc.xyz/ — or `./setup.sh` for a local preview. |

The main site is **[coinupbtc.com](https://coinupbtc.com/)** ([repo](https://github.com/Coinupbtc/Coinupbtc.github.io)).
This one is deliberately a stub.

## Why this exists as a repo instead of a redirect

GitHub Pages allows **one custom domain per repository**, and `Coinupbtc.github.io` already
claims `coinupbtc.com`. So `.xyz` needs either a registrar URL-forward or its own repo.

It gets its own repo because the domain's purpose is undecided. With DNS pointed at Pages
**once**, every future decision — temp project host, a real site, a for-sale page — is a
`git push`, with no DNS change and no propagation wait. A registrar forward would have to be
torn down first.

## Try it

```bash
git clone https://github.com/Coinupbtc/coinupbtc-xyz.git
cd coinupbtc-xyz
./setup.sh
# → http://127.0.0.1:8766/
```

## Turning it into something real

Replace the `<main>` block in `index.html` and push. That's the whole procedure.
Drop the `<meta name="robots" content="noindex">` when you want it indexed.

## Contact policy

Pseudonymous: no real name, employer, school, phone, or street address.
Inbound: [GitHub](https://github.com/Coinupbtc) · [X @coinupbtc](https://x.com/coinupbtc) · [coinupbtc@gmail.com](mailto:coinupbtc@gmail.com).

## Stack

One self-contained HTML file — styles inlined on purpose, so changing it is a one-file edit.
Design tokens match `coinupbtc.com`. The motif is pure CSS (two interfering ring sets).
No trackers, no cookies, no analytics, no JavaScript.

## Custom domain

`CNAME` → `coinupbtc.xyz`. See [`DNS-PORKBUN.md`](DNS-PORKBUN.md) for the records.

## License

MIT — see `LICENSE`.
