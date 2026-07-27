# Porkbun DNS for coinupbtc.xyz → GitHub Pages

Same shape as the `coinupbtc.com` cutover. Do this **once** — after it, every change to this
domain is a `git push`, never a DNS edit.

In Porkbun → Domains → coinupbtc.xyz → DNS:

## Delete the parking records first

Remove the existing **A** records pointing at `207.207.210.*` (Porkbun park).
As of the last check, `coinupbtc.xyz` still resolved to `207.207.210.229` / `207.207.210.107`.

## Apex (coinupbtc.xyz) — four A records

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| A | (blank / @) | 185.199.108.153 | 600 |
| A | (blank / @) | 185.199.109.153 | 600 |
| A | (blank / @) | 185.199.110.153 | 600 |
| A | (blank / @) | 185.199.111.153 | 600 |

Optional IPv6 (AAAA), same host:
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

## www

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| CNAME | www | Coinupbtc.github.io | 600 |

## Leave mail alone

Keep existing MX / TXT records unless you change email later.

## In GitHub

Repo → Settings → Pages → Custom domain = `coinupbtc.xyz` → Save.
The `CNAME` file in this repo already holds that value.

## After DNS propagates

1. `dig +short coinupbtc.xyz` should return the four `185.199.*` addresses, not `207.207.210.*`.
2. `curl -sI http://coinupbtc.xyz/` should return `200`.
3. **HTTPS lags DNS.** GitHub provisions the Let's Encrypt certificate only after it sees the
   apex resolving to Pages; until then `https://` fails and the server presents a `*.github.io`
   certificate. This is normal — it is not a misconfiguration. Check with:

   ```bash
   echo | openssl s_client -connect 185.199.108.153:443 -servername coinupbtc.xyz 2>/dev/null \
     | openssl x509 -noout -subject
   ```

   When that prints `CN = coinupbtc.xyz` instead of `CN = *.github.io`, tick **Enforce HTTPS**.
   If it has not flipped after a few hours, re-save the custom domain in Settings → Pages.
