(function () {
  var desktopMenus = [
    {
      key: 'products',
      triggerHref: 'products.html',
      triggerLabel: '产品中心',
      menuLabel: '产品菜单',
      viewAllLabel: '查看全部产品 →',
      isActivePath: function (pathname) {
        return /(?:^|\/)(products|iot-sensors|disaster-monitoring|platform)\.html$/.test(pathname) ||
          pathname.indexOf('/products-gnss/') !== -1 ||
          pathname.indexOf('/product-sensor/') !== -1 ||
          pathname.indexOf('/stations/') !== -1 ||
          pathname.indexOf('/platforms/') !== -1;
      },
      categories: [
        { title: 'GNSS 系列', target: 'mega-products-gnss', href: 'products.html' },
        { title: '物联网传感器', target: 'mega-products-sensors', href: 'iot-sensors.html' },
        { title: '灾害监测站', target: 'mega-products-stations', href: 'disaster-monitoring.html' },
        { title: '云平台', target: 'mega-products-platforms', href: 'platform.html' },
      ],
      panels: [
        {
          target: 'mega-products-gnss',
          items: [
            { title: 'M20 GNSS 接收机', desc: '实时位移监测', href: 'products-gnss/1-gnss.html' },
            { title: 'M50 GNSS 监测站', desc: '一体化监测站', href: 'products-gnss/2-gnss.html' },
            { title: 'E50Pro GNSS 基准接收机', desc: '亚毫米级高精度引擎', href: 'products-gnss/3-gnss.html' },
            { title: 'E40 GNSS 接收机', desc: '无人值守变形监测', href: 'products-gnss/4-gnss.html' },
            { title: 'A800 三维扼流圈天线', desc: '稳定可靠的信号基础', href: 'products-gnss/5-gnss.html' },
          ],
        },
        {
          target: 'mega-products-sensors',
          items: [
            { title: 'DR030 水位传感器', desc: '泥位与水位监测', href: 'product-sensor/dr.html' },
            { title: 'SY035 振弦式渗压计', desc: '孔隙水压力遥测', href: 'product-sensor/sy.html' },
            { title: 'BHY-3S 倾角振动监测仪', desc: '滑坡与崩塌监测', href: 'product-sensor/bhy.html' },
            { title: 'MD-TR 管式土壤墒情监测仪', desc: '水分、温度与角度感知', href: 'product-sensor/sqj.html' },
          ],
        },
        {
          target: 'mega-products-stations',
          items: [
            { title: 'GNSS-MD40 表面位移监测站', desc: '表面位移校核', href: 'stations/display.html' },
            { title: 'MD-IN20 深部位移监测站', desc: '深部位移监测', href: 'stations/sbwy.html' },
            { title: 'MD-MO20 土壤墒情监测站', desc: '高精度墒情跟踪', href: 'stations/soil.html' },
            { title: 'MD-WL20 地下水监测站', desc: '地下水位与压力监测', href: 'stations/under.html' },
            { title: 'MD-ML20 泥水位监测站', desc: '泥位与水位跟踪', href: 'stations/level.html' },
            { title: 'MD-RN20 智能雨量站', desc: '降雨监测', href: 'stations/rain.html' },
          ],
        },
        {
          target: 'mega-products-platforms',
          items: [
            { title: 'MDT', desc: '物联网中台与 AI 集成', href: 'platforms/mdt.html' },
            { title: 'MD-NET 3.0', desc: '安全监测与预警分析', href: 'platforms/net.html' },
            { title: 'MYT App', desc: '移动端设备管理', href: 'platforms/miyitong.html' },
            { title: '数字孪生流域平台', desc: '联通物理模型与空间模型', href: 'platforms/szls.html' },
            { title: '智慧灌区平台', desc: '动态空间遥测', href: 'platforms/zhgq.html' },
          ],
        },
      ],
    },
    {
      key: 'solutions',
      triggerHref: 'solutions.html',
      triggerLabel: '解决方案',
      menuLabel: '解决方案菜单',
      viewAllLabel: '查看全部方案 →',
      isActivePath: function (pathname) {
        return pathname.indexOf('solutions.html') !== -1 ||
          pathname.indexOf('solutions-') !== -1 ||
          pathname.indexOf('solution-') !== -1;
      },
      categories: [
        { title: '矿山安全', target: 'mega-solutions-mining', href: 'solutions-mining-main.html' },
        { title: '水利工程', target: 'mega-solutions-water', href: 'solutions-water-main.html' },
        { title: '地质灾害', target: 'mega-solutions-geo', href: 'solutions-geology-main.html' },
        { title: '城市基础设施', target: 'mega-solutions-urban', href: 'solutions-urban-main.html' },
      ],
      panels: [
        {
          target: 'mega-solutions-mining',
          items: [
            { title: '尾矿库安全监测方案', desc: '', href: 'solution-tailing.html' },
            { title: '露天矿边坡安全监测方案', desc: '', href: 'solutions-mining-pit.html' },
            { title: '排土场高边坡安全监测方案', desc: '', href: 'solutions-mining-waste.html' },
            { title: '磷石膏堆场在线监测方案', desc: '', href: 'solutions-mining-chemical.html' },
            { title: '采空区沉降与位移监测方案', desc: '', href: 'solutions-mining-goaf.html' },
          ],
        },
        {
          target: 'mega-solutions-water',
          items: [
            { title: '水库山塘在线监测方案', desc: '', href: 'solutions-water-pond.html' },
            { title: '库区边坡在线监测方案', desc: '', href: 'solutions-water-slope.html' },
            { title: '水库大坝安全监测方案', desc: '', href: 'solutions-water-dam.html' },
            { title: '河湖生态水质监测方案', desc: '', href: 'solutions-water-lake.html' },
            { title: '智慧灌区综合监测方案', desc: '', href: 'solutions-water-irrigation.html' },
            { title: '堤防安全在线监测方案', desc: '', href: 'solutions-water-embankment.html' },
          ],
        },
        {
          target: 'mega-solutions-geo',
          items: [
            { title: '滑坡安全监测方案', desc: '', href: 'solutions-geo-landslide.html' },
            { title: '泥石流与山洪监测方案', desc: '', href: 'solutions-geo-flow.html' },
            { title: '危岩崩塌在线监测方案', desc: '', href: 'solutions-geo-collapse.html' },
          ],
        },
        {
          target: 'mega-solutions-urban',
          items: [
            { title: '桥梁结构安全在线监测方案', desc: '', href: 'solutions-urban-bridge.html' },
            { title: '隧道与地下空间监测方案', desc: '', href: 'solutions-urban-tunnel.html' },
            { title: '建筑结构健康综合监测方案', desc: '', href: 'solutions-urban-fundation.html' },
          ],
        },
      ],
    },
    {
      key: 'cases',
      triggerHref: 'cases.html',
      triggerLabel: '项目案例',
      menuLabel: '项目案例菜单',
      viewAllLabel: '查看全部案例 →',
      isActivePath: function (pathname) {
        return pathname.indexOf('cases.html') !== -1 ||
          pathname.indexOf('cases-mining.html') !== -1 ||
          pathname.indexOf('cases-water.html') !== -1 ||
          pathname.indexOf('cases-geology.html') !== -1 ||
          pathname.indexOf('cases-urban.html') !== -1 ||
          pathname.indexOf('/cases/') !== -1;
      },
      categories: [
        { title: '矿山案例', target: 'mega-cases-mining', href: 'cases-mining.html' },
        { title: '水利案例', target: 'mega-cases-water', href: 'cases-water.html' },
        { title: '地灾案例', target: 'mega-cases-geo', href: 'cases-geology.html' },
        { title: '城市案例', target: 'mega-cases-urban', href: 'cases-urban.html' },
      ],
      panels: [
        {
          target: 'mega-cases-mining',
          items: [
            { title: '刚果（金）铜矿露天边坡监测', desc: '案例 1', href: 'cases/miningcase-1.html' },
            { title: '矿山安全监测系统', desc: '案例 2', href: 'cases/miningcase-2.html' },
            { title: '贵州磷石膏堆场数字化与环境监测', desc: '案例 3', href: 'cases/miningcase-3.html' },
            { title: '内蒙古露天矿排土场在线监测系统', desc: '案例 4', href: 'cases/miningcase-4.html'},
          ],
        },
        {
          target: 'mega-cases-water',
          items: [
            { title: '福建水库大坝智能安全监测系统', desc: '案例 1', href: 'cases/watercase-1.html' },
            { title: '四川水电站库区边坡智能安全监测', desc: '案例 2', href: 'cases/watercase-2.html' },
            { title: '广西智慧堤防安全监测', desc: '案例 3', href: 'cases/watercase-3.html' },
          ],
        },
        {
          target: 'mega-cases-geo',
          items: [
            { title: '贵州大型滑坡成功预警', desc: '案例 1', href: 'cases/geocase-1.html' },
            { title: '西南多省地质灾害监测', desc: '案例 2', href: 'cases/geocase-2.html' },
            { title: '贵州地灾监测能力建设', desc: '案例 3', href: 'cases/geocase-3.html' },
          ],
        },
        {
          target: 'mega-cases-urban',
          items: [
            { title: '上海核心城区深基坑监测', desc: '案例 1', href: 'cases/urbancase-1.html' },
            { title: '污水处理厂储池设施监测', desc: '案例 2', href: 'cases/urbancase-2.html' },
          ],
        },
      ],
    },
  ];

  var mobileSections = [
    {
      key: 'products',
      triggerHref: 'products.html',
      toggleLabel: '产品中心',
      links: [
        { title: 'GNSS 系列', href: 'products.html' },
        { title: '物联网传感器', href: 'iot-sensors.html' },
        { title: '灾害监测站', href: 'disaster-monitoring.html' },
        { title: '云平台', href: 'platform.html' },
      ],
    },
    {
      key: 'solutions',
      triggerHref: 'solutions.html',
      toggleLabel: '解决方案',
      links: [
        { title: '矿山安全', href: 'solutions-mining-main.html' },
        { title: '水利工程', href: 'solutions-water-main.html' },
        { title: '地质灾害', href: 'solutions-geology-main.html' },
        { title: '城市基础设施', href: 'solutions-urban-main.html' },
      ],
    },
    {
      key: 'cases',
      triggerHref: 'cases.html',
      toggleLabel: '项目案例',
      links: [
        { title: '矿山案例', href: 'cases-mining.html' },
        { title: '水利案例', href: 'cases-water.html' },
        { title: '地灾案例', href: 'cases-geology.html' },
        { title: '城市案例', href: 'cases-urban.html' },
      ],
    },
  ];

  function renderDesktopMenu(config) {
    var categoriesHtml = config.categories.map(function (category, index) {
      return [
        '<a class="mega-menu-tab' + (index === 0 ? ' is-active' : '') + '" href="' + resolveMenuHref(category.href) + '" data-mega-target="' + category.target + '">',
        '  <span class="mega-menu-tab-title">' + category.title + '</span>',
        '</a>',
      ].join('\n');
    }).join('\n');

    var panelsHtml = config.panels.map(function (panel, index) {
      var itemsHtml = panel.items.map(function (item) {
        return [
          '<a class="mega-panel-link" href="' + resolveMenuHref(item.href) + '">',
          '  <span class="mega-panel-link-title">' + item.title + '</span>',
          '  <span class="mega-panel-link-desc">' + item.desc + '</span>',
          '</a>',
        ].join('\n');
      }).join('\n');

      return [
        '<section class="mega-panel' + (index === 0 ? ' is-active' : '') + '" data-mega-panel="' + panel.target + '">',
        '  <div class="mega-panel-links">',
        itemsHtml,
        '  </div>',
        '</section>',
      ].join('\n');
    }).join('\n');

    return [
      '<a class="nav-link nav-link--mega" href="' + resolveMenuHref(config.triggerHref) + '" aria-haspopup="true">',
      '  <span>' + config.triggerLabel + '</span>',
      '  <span class="nav-link-caret" aria-hidden="true">▾</span>',
      '</a>',
      '<div class="mega-menu" aria-label="' + config.menuLabel + '">',
      '  <div class="container mega-menu-inner">',
      '    <div class="mega-menu-left" aria-label="' + config.triggerLabel + ' categories">',
      categoriesHtml,
      '      <a class="mega-menu-all" href="' + resolveMenuHref(config.triggerHref) + '">' + config.viewAllLabel + '</a>',
      '    </div>',
      '    <div class="mega-menu-content">',
      panelsHtml,
      '    </div>',
      '  </div>',
      '</div>',
    ].join('\n');
  }

  function normalizeHref(href) {
    return String(href || '')
      .split('#')[0]
      .split('?')[0]
      .replace(/^\.\//, '')
      .replace(/^(\.\.\/)+/, '')
      .replace(/^\/+/, '');
  }

  function getSitePrefix() {
    var pathname = (window.location && window.location.pathname) || '';
    var normalized = pathname.replace(/\\/g, '/');
    if (normalized.indexOf('/zh/') !== -1) return '../';

    var isSubdirPage = normalized.indexOf('/cases/') !== -1 ||
      normalized.indexOf('/products-gnss/') !== -1 ||
      normalized.indexOf('/product-sensor/') !== -1 ||
      normalized.indexOf('/stations/') !== -1 ||
      normalized.indexOf('/platforms/') !== -1;

    return isSubdirPage ? '../' : '';
  }

  function resolveMenuHref(href) {
    var normalizedHref = normalizeHref(href);
    var pathname = (window.location && window.location.pathname || '').replace(/\\/g, '/');
    if (pathname.indexOf('/zh/') !== -1) {
      var afterZh = pathname.split('/zh/')[1] || '';
      var isZhSubdir = afterZh.indexOf('/') !== -1;
      var zhPages = {
        'index.html': true,
        'products.html': true,
        'solutions.html': true,
        'cases.html': true,
        'iot-sensors.html': true,
        'disaster-monitoring.html': true,
        'platform.html': true,
        'products-gnss/1-gnss.html': true,
        'products-gnss/2-gnss.html': true,
        'products-gnss/3-gnss.html': true,
        'products-gnss/4-gnss.html': true,
        'products-gnss/5-gnss.html': true
      };
      if (isZhSubdir) {
        return zhPages[normalizedHref] ? '../' + normalizedHref : '../../' + normalizedHref;
      }
      return zhPages[normalizedHref] ? normalizedHref : '../' + normalizedHref;
    }
    return getSitePrefix() + normalizedHref;
  }

  function buildDesktopMenu(config) {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var triggerLink = Array.prototype.slice.call(nav.querySelectorAll('a.nav-link')).find(function (link) {
      return normalizeHref(link.getAttribute('href')) === normalizeHref(config.triggerHref);
    });
    if (!triggerLink) return;

    var wrapper = triggerLink.closest('.nav-item--mega');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'nav-item nav-item--mega nav-item--mega--' + config.key;
      wrapper.innerHTML = renderDesktopMenu(config);
      triggerLink.replaceWith(wrapper);
    }

    var navLink = wrapper.querySelector('.nav-link--mega');
    if (navLink) {
      navLink.classList.toggle('active', config.isActivePath(window.location.pathname));
    }

    var tabs = Array.prototype.slice.call(wrapper.querySelectorAll('[data-mega-target]'));
    var panels = Array.prototype.slice.call(wrapper.querySelectorAll('[data-mega-panel]'));
    if (!tabs.length || !panels.length) return;

    function activateMega(target) {
      tabs.forEach(function (tab) {
        tab.classList.toggle('is-active', tab.getAttribute('data-mega-target') === target);
      });
      panels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.getAttribute('data-mega-panel') === target);
      });
    }

    tabs.forEach(function (tab) {
      var target = tab.getAttribute('data-mega-target');
      tab.addEventListener('mouseenter', function () { activateMega(target); });
      tab.addEventListener('focus', function () { activateMega(target); });
      tab.addEventListener('click', function () { activateMega(target); });
    });

    activateMega(tabs[0].getAttribute('data-mega-target'));
  }

  function renderMobileSection(config) {
    var linksHtml = config.links.map(function (link) {
      return '<a class="nav-drawer-sub-link" href="' + resolveMenuHref(link.href) + '">' + link.title + '</a>';
    }).join('\n');

    return [
      '<button class="nav-drawer-' + config.key + '-toggle" type="button" aria-expanded="false" aria-controls="mobile-' + config.key + '-panel">',
        '  <span>' + config.toggleLabel + '</span>',
        '  <span class="nav-drawer-' + config.key + '-caret" aria-hidden="true">+</span>',
      '</button>',
      '<div class="nav-drawer-' + config.key + '-panel" id="mobile-' + config.key + '-panel" hidden aria-hidden="true">',
      linksHtml,
      '</div>',
    ].join('\n');
  }

  function buildMobileSection(config) {
    var drawer = document.getElementById('mobile-nav');
    if (!drawer) return;

    var drawerInner = drawer.querySelector('.nav-drawer-inner');
    if (!drawerInner) return;

    var triggerLink = Array.prototype.slice.call(drawerInner.querySelectorAll('a.nav-drawer-link')).find(function (link) {
      return normalizeHref(link.getAttribute('href')) === normalizeHref(config.triggerHref);
    });
    if (!triggerLink || drawerInner.querySelector('.nav-drawer-' + config.key)) return;

    var section = document.createElement('div');
    section.className = 'nav-drawer-' + config.key;
    section.innerHTML = renderMobileSection(config);

    drawerInner.insertBefore(section, triggerLink);
    triggerLink.remove();

    var toggle = section.querySelector('.nav-drawer-' + config.key + '-toggle');
    var panel = section.querySelector('.nav-drawer-' + config.key + '-panel');
    var caret = section.querySelector('.nav-drawer-' + config.key + '-caret');
    if (!toggle || !panel || !caret) return;

    function setOpen(nextOpen) {
      toggle.setAttribute('aria-expanded', String(nextOpen));
      panel.hidden = !nextOpen;
      panel.setAttribute('aria-hidden', String(!nextOpen));
      panel.style.display = nextOpen ? 'grid' : 'none';
      section.classList.toggle('is-open', nextOpen);
      caret.textContent = nextOpen ? '−' : '+';
    }

    toggle.addEventListener('click', function (evt) {
      if (evt && typeof evt.preventDefault === 'function') evt.preventDefault();
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    Array.prototype.slice.call(panel.querySelectorAll('a')).forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    setOpen(false);
  }

  function init() {
    desktopMenus.forEach(buildDesktopMenu);
    mobileSections.forEach(buildMobileSection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
