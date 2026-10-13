(() => {
  'use strict';
  const config = window.CLIENT_CONFIG;
  const params = new URLSearchParams(location.search);
  const value = key => (params.get(key) ?? config[key] ?? '').trim();
  const setAll = (selector, text) => document.querySelectorAll(selector).forEach(el => { el.textContent = text; });
  const nome = value('nome') || 'Psicóloga';
  const bio = value('bio');
  const nicho = value('nicho');
  const normalized = nicho.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const nicheMap = [
    [/ansiedade|ansios/, 'Ansiedade e cuidado emocional', 'Um espaço para acolher suas preocupações, compreender o que você sente e encontrar outras formas de se relacionar com a ansiedade.'],
    [/casal|relacionamento/, 'Relacionamentos e vínculos', 'Um espaço para compreender relações, reconhecer limites e olhar com cuidado para a forma como você se conecta com outras pessoas.'],
    [/infantil|crianca|adolesc/, 'Infância e adolescência', 'Um espaço de escuta para compreender emoções, vínculos e desafios que fazem parte do desenvolvimento.'],
    [/luto/, 'Luto e recomeços', 'Um espaço para acolher perdas, dar lugar aos sentimentos e encontrar suas próprias formas de atravessar esse momento.'],
    [/tcc|cognitiv/, 'Terapia cognitivo-comportamental', config.descricao],
    [/psicanal/, 'Escuta psicanalítica', config.descricao],
    [/humanist|gestalt/, 'Psicologia e autoconhecimento', config.descricao],
  ];
  const match = nicheMap.find(([test]) => test.test(normalized));
  const nicheLabel = match?.[1] || (nicho && !/^(saude|geral|psicologia|clinica)$/.test(normalized) ? nicho.charAt(0).toUpperCase() + nicho.slice(1) : 'Escuta, acolhimento e autoconhecimento');
  setAll('[data-name]', nome);
  document.title = `${nome} | Psicologia e cuidado`;
  document.querySelector('meta[name="description"]').content = `Conheça ${nome}. ${match?.[2] || config.descricao}`;
  setAll('[data-niche]', nicheLabel);
  document.getElementById('hero-description').textContent = match?.[2] || config.descricao;
  const heading = document.querySelector('h1');
  heading.replaceChildren();
  config.hero.split('|').forEach((line, i, all) => {
    const node = i === all.length - 1 ? document.createElement('em') : document.createElement('span');
    node.textContent = line; heading.append(node);
    if (i < all.length - 1) heading.append(document.createElement('br'));
  });
  if (/infantil|crianca|adolesc/.test(normalized)) {
    heading.replaceChildren();
    heading.append(document.createTextNode('Um espaço para '));
    const em = document.createElement('em'); em.textContent = 'crescer e sentir.'; heading.append(em);
  }
  if (bio) document.getElementById('bio-text').textContent = bio;
  const crp = value('crp') || bio.match(/\bCRP\s*[:\-]?\s*(\d{2}\s*[\/-]\s*\d{3,8})/i)?.[1];
  if (crp && /^(?:CRP\s*)?\d{2}\s*[\/-]\s*\d{3,8}$/i.test(crp)) {
    const el = document.getElementById('crp'); el.textContent = 'CRP ' + crp.replace(/^CRP\s*/i, ''); el.hidden = false;
  }
  const modalidade = value('modalidade');
  const tags = [nicheLabel, modalidade].filter(Boolean);
  document.getElementById('profile-tags').replaceChildren(...tags.map(text => { const el = document.createElement('span'); el.className = 'tag'; el.textContent = text; return el; }));
  const foto = value('foto');
  function photoURL(input) {
    if (!input) return '';
    if (/^https?:\/\//i.test(input)) { const u = new URL(input); return u.href; }
    const file = input.replace(/^\/?fotos\//, '').replace(/^\/+/, '');
    if (!/^[a-z0-9_.-]+$/i.test(file) || file.includes('..')) return '';
    return 'fotos/' + (/\.(jpg|jpeg|png|webp)$/i.test(file) ? file : file + '.jpg');
  }
  let source = ''; try { source = photoURL(foto); } catch {}
  document.getElementById('initials').textContent = nome.split(/\s+/).filter(Boolean).slice(0,2).map(n => n[0]).join('').toUpperCase();
  if (source) {
    for (const id of ['hero-photo', 'about-photo']) {
      const img = document.getElementById(id);
      img.alt = `Foto de ${nome}`;
      img.addEventListener('load', () => { img.hidden = false; if (id === 'hero-photo') document.getElementById('photo-fallback').hidden = true; });
      img.addEventListener('error', () => { img.hidden = true; if (id === 'hero-photo') document.getElementById('photo-fallback').hidden = false; });
      img.src = source;
    }
  }
  const instagram = value('instagram').replace(/^@/, '') || foto.replace(/^.*\//, '').replace(/\.(jpg|jpeg|png|webp)$/i, '');
  if (/^[a-z0-9._]{1,30}$/i.test(instagram)) {
    const link = document.getElementById('instagram-link'); link.href = 'https://www.instagram.com/' + encodeURIComponent(instagram) + '/'; link.hidden = false;
    const seg = value('seg'); const count = Number(seg);
    if (/^\d+$/.test(seg) && Number.isSafeInteger(count) && count > 0) {
      const el = document.getElementById('followers'); el.textContent = new Intl.NumberFormat('pt-BR').format(count) + ' seguidores no Instagram'; el.hidden = false;
    }
  }
  let zap = value('zap').replace(/\D/g, '');
  if (zap.length === 10 || zap.length === 11) zap = '55' + zap;
  const validZap = /^\d{12,15}$/.test(zap);
  const message = config.mensagem.replace('{nome}', nome);
  for (const link of document.querySelectorAll('[data-whatsapp]')) {
    if (validZap) { link.href = `https://wa.me/${zap}?text=${encodeURIComponent(message)}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.addEventListener('click', () => { document.getElementById('contact-feedback').textContent = 'O contato deste profissional ainda não foi informado. Você pode conhecer o perfil pelo Instagram, quando disponível.'; });
  }
  const topics = document.getElementById('topic-grid');
  const topicKey = /infantil|crianca|adolesc/.test(normalized) ? 'infantil' : /casal|relacionamento/.test(normalized) ? 'relacionamentos' : /luto/.test(normalized) ? 'luto' : '';
  (config.temasPorNicho?.[topicKey] || config.temas).forEach((item, i) => {
    const card = document.createElement('article'); card.className = 'topic-card reveal'; card.style.setProperty('--delay', `${i * 70}ms`);
    const icon = document.createElement('span'); icon.className = 'topic-icon';
    // Ícones vêm exclusivamente da configuração local, nunca da URL.
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class','icon'); svg.setAttribute('aria-hidden','true');
    const use = document.createElementNS('http://www.w3.org/2000/svg','use'); use.setAttribute('href','#i-' + item.icon); svg.append(use); icon.append(svg);
    const title = document.createElement('h3'); title.textContent = item.title;
    const text = document.createElement('p'); text.textContent = item.text;
    card.append(icon,title,text); topics.append(card);
  });
  const faq = document.getElementById('faq-list');
  config.perguntas.forEach(([q,a]) => {
    const details = document.createElement('details'); details.className = 'faq-item reveal';
    const summary = document.createElement('summary'); summary.textContent = q;
    const p = document.createElement('p'); p.textContent = a;
    if (q.includes('online') && modalidade) p.textContent = `Modalidade informada: ${modalidade}. Pelo WhatsApp, confirme os detalhes e a disponibilidade de horários.`;
    details.append(summary,p); faq.append(details);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: .08});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
