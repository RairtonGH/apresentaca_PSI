// Paletas editoriais por área; não representam efeitos clínicos das cores.
(() => {
  'use strict';
  const config = window.CLIENT_CONFIG;
  const params = new URLSearchParams(location.search);
  const normalize = text => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const niche = normalize(params.get('nicho') ?? config.nicho);
  const rules = [
    ['infantil', /infantil|infanto|crianca|adolesc/],
    ['neuropsicologia', /neuropsic/],
    ['relacionamentos', /casal|casais|relacionamento/],
    ['trauma', /trauma|emdr/],
    ['organizacional', /organizacional|trabalho|carreira/],
    ['luto', /luto|perdas/],
    ['ansiedade', /ansiedade|ansios|depress/],
  ];
  const requested = normalize(params.get('paleta') ?? config.paleta);
  const palettes = config.paletas;
  const automatic = rules.find(([, rule]) => rule.test(niche))?.[0] || 'geral';
  const key = Object.hasOwn(palettes, requested) ? requested : automatic;
  const palette = palettes[key];
  const root = document.documentElement;
  root.dataset.palette = key;
  for (const [token, color] of Object.entries(palette)) root.style.setProperty('--' + token, color);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', palette.bg);
})();
