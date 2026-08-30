/* signals-checkout.js — Signal feed checkout links.
 * Coinup pastes the 4 LemonSqueezy checkout URLs below (LS dashboard → product → share link).
 * Until a URL is set, the card's Join button opens the Telegram contact instead (graceful).
 * After purchase LS fires a webhook to #payments — the payment-watch bot auto-adds the buyer.
 * No manual step per customer. */
window.SIGNAL_CHECKOUT = {
  card_radar: "",   // e.g. "https://coinupbtc.lemonsqueezy.com/buy/xxxx"
  funding:   "",
  defi:      "",
  fight:     ""
};
(function () {
  function apply() {
    var map = { "card_radar":"Card Radar", "funding":"Funding Sniper", "defi":"DeFi Yield Desk", "fight":"Fight Card Intel" };
    document.querySelectorAll('#signals .card').forEach(function (card) {
      var name = card.querySelector('.name');
      if (!name) return;
      var key = Object.keys(map).find(function(k){ return map[k] === name.textContent.trim(); });
      if (!key) return;
      var a = card.querySelector('a[href*="t.me"]'); // the Join tag link
      var url = window.SIGNAL_CHECKOUT[key];
      if (url && a) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();