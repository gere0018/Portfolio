/* Update this value when refreshing the portfolio's rounded YouTube count.
   An automatically refreshed count should come from a private serverless proxy,
   never a YouTube API key embedded in browser code. */
document.addEventListener('DOMContentLoaded', () => {
  const count = document.querySelector('[data-youtube-subscribers]');
  if (!count) return;
  count.textContent = count.dataset.fallback || '8,500+';
});
