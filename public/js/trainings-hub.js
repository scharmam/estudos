/**
 * Hub central de treinamentos — adicione novas matérias em TRAININGS_REGISTRY.
 */
const TRAININGS_REGISTRY = [
  {
    id: 'cgpi',
    name: 'CGPI Quest',
    discipline: 'Computação Gráfica & PI',
    description: 'Provas N1 e N2 · 84 questões · simulados · questões com código Java',
    icon: '🖥️',
    status: 'active',
    screen: 'welcome',
    theme: 'cgpi',
    meta: ['84 questões', '7 modos', 'Central de estudo'],
  },
  {
    id: 'cloud',
    name: 'Cloud Quest',
    discipline: 'Computação em Nuvem',
    description: '100 questões B2 · armazenamento, Big Data, arquiteturas e simulado de prova',
    icon: '☁️',
    status: 'active',
    screen: 'cloudWelcome',
    theme: 'cloud',
    meta: ['100 questões', '4 modos', '10 temas'],
  },
  {
    id: 'cpl',
    name: 'CPL Quest',
    discipline: 'Compiladores',
    description: 'Provas N1 e N2 · 78 questões · simulados · questões com código Java',
    icon: '⚙️',
    status: 'active',
    screen: 'cplWelcome',
    theme: 'cpl',
    meta: ['78 questões', '6 modos', 'Cifra Java'],
  },
];

const TrainingsHub = (() => {
  const els = {
    screen: document.getElementById('screen-hub'),
    grid: document.getElementById('hub-trainings-grid'),
    soonScreen: document.getElementById('screen-training-soon'),
    soonContent: document.getElementById('training-soon-content'),
    btnSoonBack: document.getElementById('btn-soon-back'),
  };

  function getTraining(id) {
    return TRAININGS_REGISTRY.find(t => t.id === id);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCard(training) {
    const isActive = training.status === 'active';
    const badge = isActive
      ? '<span class="training-card__badge training-card__badge--live">Disponível</span>'
      : '<span class="training-card__badge training-card__badge--soon">Em breve</span>';
    const meta = (training.meta || [])
      .map(m => `<span class="training-card__tag">${escapeHtml(m)}</span>`)
      .join('');

    return `
      <button
        type="button"
        class="training-card training-card--${training.theme}${isActive ? '' : ' training-card--disabled'}"
        data-training-id="${training.id}"
        data-screen="${training.screen || ''}"
        ${isActive ? '' : 'data-coming-soon="1"'}
      >
        <span class="training-card__icon">${training.icon}</span>
        <span class="training-card__discipline">${escapeHtml(training.discipline)}</span>
        <strong class="training-card__name">${escapeHtml(training.name)}</strong>
        <p class="training-card__desc">${escapeHtml(training.description)}</p>
        <div class="training-card__meta">${meta}</div>
        ${badge}
      </button>`;
  }

  function renderGrid() {
    if (!els.grid) return;
    els.grid.innerHTML = TRAININGS_REGISTRY.map(renderCard).join('');
    els.grid.querySelectorAll('.training-card').forEach(card => {
      card.addEventListener('click', () => handleCardClick(card.dataset.trainingId));
    });
  }

  function activateScreen(name) {
    const map = {
      hub: 'screen-hub',
      welcome: 'screen-welcome',
      cloudWelcome: 'screen-cloud-welcome',
      cplWelcome: 'screen-cpl-welcome',
      trainingSoon: 'screen-training-soon',
    };
    if (typeof window.showAppScreen === 'function') {
      window.showAppScreen(name);
      return;
    }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen--active'));
    const target = document.getElementById(map[name] || `screen-${name}`);
    if (target) target.classList.add('screen--active');
  }

  function open() {
    renderGrid();
    activateScreen('hub');
  }

  function openTraining(trainingId) {
    const training = getTraining(trainingId);
    if (!training) return;
    if (typeof window.setActiveTraining === 'function') {
      window.setActiveTraining(training.id);
    }
    if (training.status === 'active' && training.screen) {
      activateScreen(training.screen);
      return;
    }
    openComingSoon(trainingId);
  }

  function openComingSoon(trainingId) {
    const training = getTraining(trainingId);
    if (!training || !els.soonContent) return;

    els.soonContent.innerHTML = `
      <span class="training-soon__icon">${training.icon}</span>
      <span class="logo-tag">${escapeHtml(training.discipline)}</span>
      <h2 class="training-soon__title">${escapeHtml(training.name)}</h2>
      <p class="training-soon__desc">${escapeHtml(training.description)}</p>
      <div class="training-soon__badge">🚧 Em breve</div>
      <p class="training-soon__hint">
        Este treinamento ainda está sendo preparado. Volte em breve ou comece pelo
        <strong>CGPI Quest</strong> enquanto isso.
      </p>
    `;
    activateScreen('trainingSoon');
  }

  function handleCardClick(trainingId) {
    openTraining(trainingId);
  }

  if (els.btnSoonBack) {
    els.btnSoonBack.addEventListener('click', () => open());
  }

  document.getElementById('btn-back-hub')?.addEventListener('click', () => open());
  document.getElementById('btn-back-hub-cloud')?.addEventListener('click', () => open());
  document.getElementById('btn-back-hub-cpl')?.addEventListener('click', () => open());
  document.getElementById('btn-result-hub')?.addEventListener('click', () => open());

  return {
    open,
    openTraining,
    openComingSoon,
    getTraining,
    registry: TRAININGS_REGISTRY,
  };
})();
