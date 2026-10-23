function applyPortfolioConfig() {
  const config = window.PORTFOLIO_CONFIG || {};
  document.querySelectorAll('[data-config-href]').forEach((link) => {
    const value = config[link.dataset.configHref];
    if (value) link.href = value;
  });
  document.querySelectorAll('[data-config-text]').forEach((element) => {
    const value = config[element.dataset.configText];
    if (value) element.textContent = value;
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyPortfolioConfig, { once: true });
} else {
  applyPortfolioConfig();
}
