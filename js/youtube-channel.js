/* Legacy helper: current counts live in js/site-config.js. */
document.addEventListener('DOMContentLoaded', () => {
  const count = document.querySelector('[data-youtube-subscribers]');
  const config = window.PORTFOLIO_CONFIG;
  if (count && config) count.textContent = config.YOUTUBE_SUBSCRIBERS;
});
