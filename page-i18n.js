(function () {
  const langList = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' }
  ];

  const en = {
    brand: 'Lighter Parts & Automation Equipment',
    lighter: 'Lighters',
    more: 'More',
    more_lighters_title_main: 'More',
    more_lighters_title_accent: 'Lighters',
    more_lighters_subtitle: 'Filter lighter styles by factory and product category',
    more_molds_title: 'Lighter Parts Molds',
    exploded_detail_title: 'Lighter Parts Exploded Diagram',
    production_detail_title: 'Lighter Production Process',
    production_detail_subtitle: 'Production process details',
    back_materials: 'Back to Raw Materials',
    back_molds: 'Back to Mold System',
    back_exploded: 'Back to Parts Gallery',
    back_production: 'Back to Production Process',
    view_video: 'View Video',
    search_aria: 'Search lighter name or model',
    search_open: 'Open search',
    search_title: 'Search',
    search_placeholder: 'Search name / model',
    search_clear: 'Clear search',
    image_zoom_tools: 'Image zoom',
    zoom_out: 'Zoom out',
    zoom_reset: 'Reset',
    zoom_in: 'Zoom in',
    prev_page: 'Previous',
    next_page: 'Next',
    empty_factory: 'No product images for this factory',
    empty_category: 'No product images in this category',
    no_results: 'No results for "{query}"',
    factory1: 'Factory 1',
    factory2: 'Factory 2',
    factory3: 'Factory 3',
    factory4: 'Factory 4',
    factory5: 'Factory 5',
    product_center: 'Product Center',
    electronic_lighter: 'Electronic Lighter',
    windproof_lighter: 'Windproof Lighter',
    flint_lighter: 'Flint Wheel Lighter',
    torch_lighter: 'Torch Lighter',
    car_lighter: 'Cigarette Lighter',
    other_products: 'Other Products',
    lamp_lighter: 'Lamp Lighter',
    flint_head: 'Flint Finished Head',
    molds: 'Molds',
    lighter_parts: 'Lighter Parts',
    exploded_alt_suffix: ' exploded detail image'
  };

  const packs = {
    zh: {
      brand: '打火机散件及自动化设备',
      lighter: '打火机',
      more: '更多',
      more_lighters_title_main: '更多',
      more_lighters_title_accent: '打火机',
      more_lighters_subtitle: '按工厂和产品栏目筛选打火机款式图',
      more_molds_title: '打火机散件模具',
      exploded_detail_title: '打火机部件拆解图',
      production_detail_title: '打火机生产制作工艺',
      production_detail_subtitle: '生产工艺更多细节',
      back_materials: '返回原材料供应',
      back_molds: '返回模具系统',
      back_exploded: '返回部件拆解',
      back_production: '返回生产工艺',
      view_video: '查看视频',
      search_aria: '搜索打火机名称或型号',
      search_open: '打开搜索',
      search_title: '搜索',
      search_placeholder: '搜索名称 / 型号',
      search_clear: '清空搜索',
      image_zoom_tools: '图片缩放',
      zoom_out: '缩小',
      zoom_reset: '还原',
      zoom_in: '放大',
      prev_page: '上一页',
      next_page: '下一页',
      empty_factory: '该工厂暂无产品图片',
      empty_category: '该栏目暂无产品图片',
      no_results: '没有找到“{query}”',
      factory1: '工厂一',
      factory2: '工厂二',
      factory3: '工厂三',
      factory4: '工厂四',
      factory5: '工厂五',
      product_center: '产品中心',
      electronic_lighter: '电子打火机',
      windproof_lighter: '防风打火机',
      flint_lighter: '砂轮打火机',
      torch_lighter: '点火枪',
      car_lighter: '点烟器',
      other_products: '其他产品',
      lamp_lighter: '灯机',
      flint_head: '砂轮成品头',
      molds: '模具',
      lighter_parts: '打火机散件',
      exploded_alt_suffix: '拆解详情图'
    },
    en,
    ja: {
      ...en,
      brand: 'ライター部品・自動化設備',
      lighter: 'ライター',
      more: 'もっと見る',
      more_lighters_title_main: 'その他の',
      more_lighters_title_accent: 'ライター',
      more_lighters_subtitle: '工場と商品カテゴリでライター画像を絞り込み',
      more_molds_title: 'ライター部品金型',
      exploded_detail_title: 'ライター部品分解図',
      production_detail_title: 'ライター生産工程',
      back_materials: '原材料供給へ戻る',
      back_molds: '金型システムへ戻る',
      back_exploded: '部品分解へ戻る',
      back_production: '生産工程へ戻る',
      view_video: '動画を見る',
      search_placeholder: '名称 / 型番を検索',
      empty_factory: 'この工場には商品画像がありません',
      empty_category: 'このカテゴリには商品画像がありません',
      no_results: '「{query}」は見つかりません',
      factory1: '工場 1',
      factory2: '工場 2',
      factory3: '工場 3',
      factory4: '工場 4',
      factory5: '工場 5',
      product_center: '製品センター',
      electronic_lighter: '電子ライター',
      windproof_lighter: '防風ライター',
      flint_lighter: 'フリントライター',
      torch_lighter: 'トーチライター',
      car_lighter: 'シガーライター',
      other_products: 'その他製品',
      lamp_lighter: 'ランプライター',
      flint_head: 'フリント完成ヘッド',
      molds: '金型',
      lighter_parts: 'ライター部品'
    },
    ko: {
      ...en,
      brand: '라이터 부품 및 자동화 설비',
      lighter: '라이터',
      more: '더보기',
      more_lighters_title_main: '더 많은',
      more_lighters_title_accent: '라이터',
      more_lighters_subtitle: '공장과 제품 분류별 라이터 이미지 필터',
      more_molds_title: '라이터 부품 금형',
      exploded_detail_title: '라이터 부품 분해도',
      production_detail_title: '라이터 생산 공정',
      back_materials: '원자재 공급으로 돌아가기',
      back_molds: '금형 시스템으로 돌아가기',
      back_exploded: '부품 분해로 돌아가기',
      back_production: '생산 공정으로 돌아가기',
      view_video: '동영상 보기',
      search_placeholder: '이름 / 모델 검색',
      empty_factory: '이 공장에는 제품 이미지가 없습니다',
      empty_category: '이 카테고리에는 제품 이미지가 없습니다',
      no_results: '"{query}" 검색 결과 없음',
      factory1: '공장 1',
      factory2: '공장 2',
      factory3: '공장 3',
      factory4: '공장 4',
      factory5: '공장 5',
      product_center: '제품 센터',
      electronic_lighter: '전자 라이터',
      windproof_lighter: '방풍 라이터',
      flint_lighter: '플린트 라이터',
      torch_lighter: '토치 라이터',
      car_lighter: '차량용 라이터',
      other_products: '기타 제품',
      lamp_lighter: '램프 라이터',
      flint_head: '플린트 완제품 헤드',
      molds: '금형',
      lighter_parts: '라이터 부품'
    },
    es: {
      ...en,
      brand: 'Piezas y Equipos Automatizados de Encendedor',
      lighter: 'Encendedores',
      more: 'Más',
      more_lighters_subtitle: 'Filtra estilos de encendedores por fábrica y categoría',
      more_molds_title: 'Moldes para piezas de encendedor',
      exploded_detail_title: 'Diagrama de piezas del encendedor',
      production_detail_title: 'Proceso de producción de encendedores',
      back_materials: 'Volver a materias primas',
      back_molds: 'Volver al sistema de moldes',
      back_exploded: 'Volver al despiece',
      back_production: 'Volver al proceso',
      view_video: 'Ver video',
      search_placeholder: 'Buscar nombre / modelo',
      empty_factory: 'No hay imágenes de productos para esta fábrica',
      empty_category: 'No hay imágenes en esta categoría',
      no_results: 'No se encontró "{query}"',
      factory1: 'Fábrica 1',
      factory2: 'Fábrica 2',
      factory3: 'Fábrica 3',
      factory4: 'Fábrica 4',
      factory5: 'Fábrica 5',
      product_center: 'Centro de productos',
      electronic_lighter: 'Encendedor electrónico',
      windproof_lighter: 'Encendedor antiviento',
      flint_lighter: 'Encendedor de rueda',
      torch_lighter: 'Encendedor tipo soplete',
      car_lighter: 'Encendedor de coche',
      other_products: 'Otros productos',
      lamp_lighter: 'Encendedor con lámpara',
      flint_head: 'Cabezal terminado de rueda',
      molds: 'Moldes',
      lighter_parts: 'Piezas de encendedor'
    },
    pt: {
      ...en,
      brand: 'Peças e Equipamentos Automatizados para Isqueiro',
      lighter: 'Isqueiros',
      more: 'Mais',
      more_lighters_subtitle: 'Filtre estilos de isqueiro por fábrica e categoria',
      more_molds_title: 'Moldes de peças de isqueiro',
      exploded_detail_title: 'Diagrama explodido de peças',
      production_detail_title: 'Processo de produção de isqueiros',
      back_materials: 'Voltar aos materiais',
      back_molds: 'Voltar ao sistema de moldes',
      back_exploded: 'Voltar à desmontagem',
      back_production: 'Voltar ao processo',
      view_video: 'Ver vídeo',
      search_placeholder: 'Pesquisar nome / modelo',
      factory1: 'Fábrica 1',
      factory2: 'Fábrica 2',
      factory3: 'Fábrica 3',
      factory4: 'Fábrica 4',
      factory5: 'Fábrica 5',
      product_center: 'Centro de produtos',
      electronic_lighter: 'Isqueiro eletrônico',
      windproof_lighter: 'Isqueiro antivento',
      flint_lighter: 'Isqueiro de pedra',
      torch_lighter: 'Isqueiro maçarico',
      car_lighter: 'Isqueiro automotivo',
      other_products: 'Outros produtos',
      lamp_lighter: 'Isqueiro com lâmpada',
      flint_head: 'Cabeça acabada de roda',
      molds: 'Moldes',
      lighter_parts: 'Peças de isqueiro'
    },
    fr: {
      ...en,
      brand: 'Pièces et équipements automatisés de briquet',
      lighter: 'Briquets',
      more: 'Plus',
      more_lighters_subtitle: 'Filtrer les modèles par usine et catégorie',
      more_molds_title: 'Moules pour pièces de briquet',
      exploded_detail_title: 'Schéma éclaté des pièces',
      production_detail_title: 'Processus de production des briquets',
      back_materials: 'Retour aux matières premières',
      back_molds: 'Retour au système de moules',
      back_exploded: 'Retour aux pièces',
      back_production: 'Retour au processus',
      view_video: 'Voir la vidéo',
      search_placeholder: 'Rechercher nom / modèle',
      factory1: 'Usine 1',
      factory2: 'Usine 2',
      factory3: 'Usine 3',
      factory4: 'Usine 4',
      factory5: 'Usine 5',
      product_center: 'Centre produits',
      electronic_lighter: 'Briquet électronique',
      windproof_lighter: 'Briquet anti-vent',
      flint_lighter: 'Briquet à molette',
      torch_lighter: 'Briquet torche',
      car_lighter: 'Allume-cigare',
      other_products: 'Autres produits',
      lamp_lighter: 'Briquet lampe',
      flint_head: 'Tête finie à molette',
      molds: 'Moules',
      lighter_parts: 'Pièces de briquet'
    },
    de: {
      ...en,
      brand: 'Feuerzeugteile & Automatisierungsausrüstung',
      lighter: 'Feuerzeuge',
      more: 'Mehr',
      more_lighters_subtitle: 'Feuerzeugmodelle nach Fabrik und Kategorie filtern',
      more_molds_title: 'Formen für Feuerzeugteile',
      exploded_detail_title: 'Explosionszeichnung der Feuerzeugteile',
      production_detail_title: 'Produktionsprozess für Feuerzeuge',
      back_materials: 'Zurück zu Rohmaterialien',
      back_molds: 'Zurück zum Formsystem',
      back_exploded: 'Zurück zur Teileansicht',
      back_production: 'Zurück zum Prozess',
      view_video: 'Video ansehen',
      search_placeholder: 'Name / Modell suchen',
      factory1: 'Fabrik 1',
      factory2: 'Fabrik 2',
      factory3: 'Fabrik 3',
      factory4: 'Fabrik 4',
      factory5: 'Fabrik 5',
      product_center: 'Produktzentrum',
      electronic_lighter: 'Elektronisches Feuerzeug',
      windproof_lighter: 'Windfestes Feuerzeug',
      flint_lighter: 'Reibrad-Feuerzeug',
      torch_lighter: 'Jet-Feuerzeug',
      car_lighter: 'Autoanzünder',
      other_products: 'Andere Produkte',
      lamp_lighter: 'Lampenfeuerzeug',
      flint_head: 'Fertiger Reibradkopf',
      molds: 'Formen',
      lighter_parts: 'Feuerzeugteile'
    },
    ru: {
      ...en,
      brand: 'Детали и автоматизированное оборудование для зажигалок',
      lighter: 'Зажигалки',
      more: 'Больше',
      more_lighters_subtitle: 'Фильтр моделей по фабрике и категории',
      more_molds_title: 'Пресс-формы для деталей зажигалок',
      exploded_detail_title: 'Схема деталей зажигалки',
      production_detail_title: 'Процесс производства зажигалок',
      back_materials: 'Назад к материалам',
      back_molds: 'Назад к формам',
      back_exploded: 'Назад к деталям',
      back_production: 'Назад к процессу',
      view_video: 'Смотреть видео',
      search_placeholder: 'Поиск имени / модели',
      factory1: 'Фабрика 1',
      factory2: 'Фабрика 2',
      factory3: 'Фабрика 3',
      factory4: 'Фабрика 4',
      factory5: 'Фабрика 5',
      product_center: 'Центр продукции',
      electronic_lighter: 'Электронная зажигалка',
      windproof_lighter: 'Ветрозащитная зажигалка',
      flint_lighter: 'Кремниевая зажигалка',
      torch_lighter: 'Турбо-зажигалка',
      car_lighter: 'Автомобильная зажигалка',
      other_products: 'Другие продукты',
      lamp_lighter: 'Зажигалка с фонарем',
      flint_head: 'Готовая головка с колесом',
      molds: 'Пресс-формы',
      lighter_parts: 'Детали зажигалок'
    },
    ar: {
      ...en,
      brand: 'قطع الولاعات ومعدات الأتمتة',
      lighter: 'ولاعات',
      more: 'المزيد',
      more_lighters_subtitle: 'تصفية موديلات الولاعات حسب المصنع والفئة',
      more_molds_title: 'قوالب قطع الولاعات',
      exploded_detail_title: 'مخطط تفكيك قطع الولاعة',
      production_detail_title: 'عملية إنتاج الولاعات',
      back_materials: 'العودة إلى المواد الخام',
      back_molds: 'العودة إلى نظام القوالب',
      back_exploded: 'العودة إلى تفكيك القطع',
      back_production: 'العودة إلى عملية الإنتاج',
      view_video: 'مشاهدة الفيديو',
      search_placeholder: 'بحث عن الاسم / الموديل',
      factory1: 'مصنع 1',
      factory2: 'مصنع 2',
      factory3: 'مصنع 3',
      factory4: 'مصنع 4',
      factory5: 'مصنع 5',
      product_center: 'مركز المنتجات',
      electronic_lighter: 'ولاعة إلكترونية',
      windproof_lighter: 'ولاعة مقاومة للرياح',
      flint_lighter: 'ولاعة بعجلة حجر',
      torch_lighter: 'ولاعة تورش',
      car_lighter: 'ولاعة سيارة',
      other_products: 'منتجات أخرى',
      lamp_lighter: 'ولاعة بمصباح',
      flint_head: 'رأس ولاعة عجلة كامل',
      molds: 'قوالب',
      lighter_parts: 'قطع الولاعات'
    }
  };

  const textKeyMap = {
    '工厂一': 'factory1',
    '工厂二': 'factory2',
    '工厂三': 'factory3',
    '工厂四': 'factory4',
    '工厂五': 'factory5',
    '产品中心': 'product_center',
    '电子打火机': 'electronic_lighter',
    '防风打火机': 'windproof_lighter',
    '砂轮打火机': 'flint_lighter',
    '点火枪': 'torch_lighter',
    '点烟器': 'car_lighter',
    '其他产品': 'other_products',
    '灯机': 'lamp_lighter',
    '砂轮成品头': 'flint_head',
    '打火机散件': 'lighter_parts',
    '打火机': 'lighter',
    '模具': 'molds',
    '更多': 'more',
    '查看视频': 'view_video'
  };

  const aliases = {
    it: 'en',
    nl: 'en',
    tr: 'en',
    vi: 'en',
    th: 'en',
    id: 'en',
    ms: 'en',
    hi: 'en',
    pl: 'en',
    uk: 'en',
    fa: 'en',
    he: 'en'
  };
  const rtlLangs = new Set(['ar', 'fa', 'he']);
  let currentLang = 'zh';

  function getPack() {
    const code = packs[currentLang] ? currentLang : (aliases[currentLang] || 'en');
    return packs[code] || packs.en;
  }

  function pageT(key, vars) {
    const pack = getPack();
    let text = pack[key] || packs.en[key] || packs.zh[key] || key;
    Object.entries(vars || {}).forEach(([name, value]) => {
      text = text.split(`{${name}}`).join(String(value));
    });
    return text;
  }

  function translatePageText(text) {
    const value = String(text || '');
    if (!value || currentLang === 'zh') return value;
    if (textKeyMap[value]) return pageT(textKeyMap[value]);
    return Object.keys(textKeyMap)
      .sort((a, b) => b.length - a.length)
      .reduce((out, source) => out.split(source).join(pageT(textKeyMap[source])), value);
  }

  function normalizeLang(raw) {
    const code = String(raw || '').toLowerCase().split('-')[0];
    return langList.some(lang => lang.code === code) ? code : 'zh';
  }

  function getStoredLang() {
    return normalizeLang(localStorage.getItem('lighter_lang') || navigator.language || 'zh');
  }

  function renderLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (!dropdown) return;
    dropdown.innerHTML = langList.map(lang =>
      `<button class="lang-option${lang.code === currentLang ? ' active' : ''}" type="button" data-lang="${lang.code}"><span>${lang.flag}</span><span>${lang.name}</span><span>${lang.code.toUpperCase()}</span></button>`
    ).join('');
  }

  function ensureLanguageSelector() {
    if (document.getElementById('langDropdown')) return;
    const header = document.querySelector('.header');
    if (!header) return;
    let actions = header.querySelector('.header-actions');
    const back = header.querySelector('.back');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'header-actions';
      if (back) {
        header.insertBefore(actions, back);
        actions.appendChild(back);
      } else {
        header.appendChild(actions);
      }
    }
    const select = document.createElement('div');
    select.className = 'lang-select';
    select.innerHTML = `
      <button class="lang-btn" id="langBtn" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="globe" aria-hidden="true">🌐</span>
        <span id="currentLangLabel">中文</span>
      </button>
      <div class="lang-dropdown" id="langDropdown" role="listbox"></div>
    `;
    actions.appendChild(select);
  }

  function applyPageI18n(options) {
    const active = langList.find(lang => lang.code === currentLang) || langList[0];
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
    document.documentElement.dir = rtlLangs.has(currentLang) ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl-lang', rtlLangs.has(currentLang));
    const label = document.getElementById('currentLangLabel');
    if (label) label.textContent = active.name;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = pageT(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', pageT(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', pageT(el.dataset.i18nTitle));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', pageT(el.dataset.i18nAria));
    });
    renderLangDropdown();
    if (!options || options.dispatch !== false) {
      window.dispatchEvent(new CustomEvent('page-language-change', { detail: { lang: currentLang } }));
    }
  }

  function setPageLang(code) {
    currentLang = normalizeLang(code);
    localStorage.setItem('lighter_lang', currentLang);
    localStorage.setItem('lighter_lang_manual', '1');
    applyPageI18n();
  }

  function toggleLangDropdown(force) {
    const dropdown = document.getElementById('langDropdown');
    const button = document.querySelector('.lang-btn');
    if (!dropdown) return;
    const open = typeof force === 'boolean' ? force : !dropdown.classList.contains('show');
    dropdown.classList.toggle('show', open);
    if (button) button.setAttribute('aria-expanded', String(open));
  }

  function initPageI18n(onChange) {
    currentLang = getStoredLang();
    ensureLanguageSelector();
    renderLangDropdown();
    document.addEventListener('click', event => {
      if (!event.target.closest('.lang-select')) toggleLangDropdown(false);
    });
    const button = document.getElementById('langBtn');
    if (button) {
      button.addEventListener('click', event => {
        event.stopPropagation();
        toggleLangDropdown();
      });
    }
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
      dropdown.addEventListener('click', event => {
        const option = event.target.closest('[data-lang]');
        if (!option) return;
        setPageLang(option.dataset.lang);
        toggleLangDropdown(false);
      });
    }
    if (typeof onChange === 'function') {
      window.addEventListener('page-language-change', onChange);
    }
    applyPageI18n({ dispatch: false });
  }

  window.pageLangList = langList;
  window.pageT = pageT;
  window.translatePageText = translatePageText;
  window.setPageLang = setPageLang;
  window.toggleLangDropdown = toggleLangDropdown;
  window.initPageI18n = initPageI18n;
})();
