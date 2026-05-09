(function () {
  var desktopMenus = [
    {
      key: 'products',
      triggerHref: 'products.html',
      triggerLabel: 'Products',
      menuLabel: 'Product mega menu',
      viewAllLabel: 'View All Products →',
      isActivePath: function (pathname) {
        return /(?:^|\/)(products|iot-sensors|disaster-monitoring|platform)\.html$/.test(pathname) ||
          pathname.indexOf('/products-gnss/') !== -1 ||
          pathname.indexOf('/product-sensor/') !== -1 ||
          pathname.indexOf('/stations/') !== -1 ||
          pathname.indexOf('/platforms/') !== -1;
      },
      categories: [
        { title: 'GNSS Series', target: 'mega-products-gnss', href: 'products.html' },
        { title: 'IoT Sensors', target: 'mega-products-sensors', href: 'iot-sensors.html' },
        { title: 'Disaster Monitoring', target: 'mega-products-stations', href: 'disaster-monitoring.html' },
        { title: 'Cloud Platform', target: 'mega-products-platforms', href: 'platform.html' },
      ],
      panels: [
        {
          target: 'mega-products-gnss',
          items: [
            { title: 'M20 GNSS Receiver', desc: 'Real-time displacement tracking', href: 'products-gnss/1-gnss.html' },
            { title: 'M50 GNSS Station', desc: 'All-in-one monitoring station', href: 'products-gnss/2-gnss.html' },
            { title: 'E50Pro GNSS Reference Receiver', desc: 'Sub-millimeter precision engine', href: 'products-gnss/3-gnss.html' },
            { title: 'E40 GNSS Receiver', desc: 'Unattended deformation monitoring', href: 'products-gnss/4-gnss.html' },
            { title: 'A800 3D Choke Ring Antenna', desc: 'Robust signal foundation', href: 'products-gnss/5-gnss.html' },
          ],
        },
        {
          target: 'mega-products-sensors',
          items: [
            { title: 'DR030 Water Level Sensor', desc: 'Mud and water level monitoring', href: 'product-sensor/dr.html' },
            { title: 'SY035 Vibrating Wire Piezometer', desc: 'Pore pressure telemetry', href: 'product-sensor/sy.html' },
            { title: 'BHY-3S Tilt and Vibration Detector', desc: 'Landslide and rockfall monitoring', href: 'product-sensor/bhy.html' },
            { title: 'MD-TR Tubular Soil Moisture Profiler', desc: 'Moisture, temperature, and angle sensing', href: 'product-sensor/sqj.html' },
          ],
        },
        {
          target: 'mega-products-stations',
          items: [
            { title: 'GNSS-MD40 Surface Displacement Station', desc: 'Surface displacement verification', href: 'stations/display.html' },
            { title: 'MD-IN20 Deep Displacement Station', desc: 'Deep displacement oversight', href: 'stations/sbwy.html' },
            { title: 'MD-MO20 Soil Moisture Station', desc: 'High-precision moisture tracking', href: 'stations/soil.html' },
            { title: 'MD-WL20 Groundwater Station', desc: 'Groundwater level and pressure monitoring', href: 'stations/under.html' },
            { title: 'MD-ML20 Mud and Water Level Station', desc: 'Mud and water level tracking', href: 'stations/level.html' },
            { title: 'MD-RN20 Intelligent Rainfall Station', desc: 'Precipitation monitoring', href: 'stations/rain.html' },
          ],
        },
        {
          target: 'mega-products-platforms',
          items: [
            { title: 'MDT', desc: 'IoT middleware and AI integration', href: 'platforms/mdt.html' },
            { title: 'MD-NET 3.0', desc: 'Safety monitoring and early warning analytics', href: 'platforms/net.html' },
            { title: 'MYT App', desc: 'Mobile device management', href: 'platforms/miyitong.html' },
            { title: 'Digital Twin Watershed Platform', desc: 'Bridge physical and spatial models', href: 'platforms/szls.html' },
            { title: 'Intelligent Irrigation District Platform', desc: 'Dynamic spatial telemetry', href: 'platforms/zhgq.html' },
          ],
        },
      ],
    },
    {
      key: 'solutions',
      triggerHref: 'solutions.html',
      triggerLabel: 'Solutions',
      menuLabel: 'Solutions mega menu',
      viewAllLabel: 'View All Solutions →',
      isActivePath: function (pathname) {
        return pathname.indexOf('solutions.html') !== -1 ||
          pathname.indexOf('solutions-') !== -1 ||
          pathname.indexOf('solution-') !== -1;
      },
      categories: [
        { title: 'Mining Safety', target: 'mega-solutions-mining', href: 'solutions-mining-main.html' },
        { title: 'Water Conservancy', target: 'mega-solutions-water', href: 'solutions-water-main.html' },
        { title: 'Geological Hazard', target: 'mega-solutions-geo', href: 'solutions-geology-main.html' },
        { title: 'Urban Infrastructure', target: 'mega-solutions-urban', href: 'solutions-urban-main.html' },
      ],
      panels: [
        {
          target: 'mega-solutions-mining',
          items: [
            { title: 'Tailings Storage Facility Safety Monitoring Solution', desc: 'Tailings Storage Facility Safety Monitoring Solution', href: 'solution-tailing.html' },
            { title: 'Open-pit Mine Slope Safety Monitoring Solution', desc: 'Open-pit Mine Slope Safety Monitoring Solution', href: 'solutions-mining-pit.html' },
            { title: 'Waste Dump High Slope Safety Monitoring Solution', desc: 'Waste Dump High Slope Safety Monitoring Solution', href: 'solutions-mining-waste.html' },
            { title: 'Phosphogypsum Stack Online Monitoring Solution', desc: 'Phosphogypsum Stack Online Monitoring Solution', href: 'solutions-mining-chemical.html' },
            { title: 'Goaf Settlement & Displacement Monitoring Solution', desc: 'Goaf Settlement and Displacement Monitoring Solution', href: 'solutions-mining-goaf.html' },
          ],
        },
        {
          target: 'mega-solutions-water',
          items: [
            { title: 'Reservoir and Pond Online Monitoring Solution', desc: 'Reservoir and Pond Online Monitoring Solution', href: 'solutions-water-pond.html' },
            { title: 'Reservoir Slope Online Monitoring Solution', desc: 'Reservoir Slope Online Monitoring Solution', href: 'solutions-water-slope.html' },
            { title: 'Reservoir Dam Safety Monitoring Solution', desc: 'Reservoir Dam Safety Monitoring Solution', href: 'solutions-water-dam.html' },
            { title: 'River and Lake Ecological Water Quality Monitoring Solution', desc: 'River and Lake Ecological Water Quality Monitoring Solution', href: 'solutions-water-lake.html' },
            { title: 'Smart Irrigation District Integrated Monitoring Solution', desc: 'Irrigation Safety Online Monitoring Solution', href: 'solutions-water-irrigation.html' },
            { title: 'Embankment Safety Online Monitoring Solution', desc: 'Embankment Safety Online Monitoring Solution', href: 'solutions-water-embankment.html' },
          ],
        },
        {
          target: 'mega-solutions-geo',
          items: [
            { title: 'Landslide Safety Monitoring Solution', desc: 'Landslide Safety Monitoring Solution', href: 'solutions-geo-landslide.html' },
            { title: 'Debris Flow & Flash Flood Monitoring Solution', desc: 'Debris Flow & Flash Flood Monitoring Solution', href: 'solutions-geo-flow.html' },
            { title: 'Rockfall & Collapse Online Monitoring Solution', desc: 'Rockfall & Collapse Online Monitoring Solution', href: 'solutions-geo-collapse.html' },
          ],
        },
        {
          target: 'mega-solutions-urban',
          items: [
            { title: 'Bridge Structural Safety Online Monitoring Solution', desc: 'Bridge Structural Safety Online Monitoring Solution', href: 'solutions-urban-bridge.html' },
            { title: 'Tunnel & Underground Space Monitoring Solution', desc: 'Tunnel & Underground Space Monitoring Solution', href: 'solutions-urban-tunnel.html' },
            { title: 'Integrated Building Structural Health Monitoring Solution', desc: 'Urban Building & Structure Safety Solution', href: 'solutions-urban-fundation.html' },
          ],
        },
      ],
    },
    {
      key: 'cases',
      triggerHref: 'cases.html',
      triggerLabel: 'Cases',
      menuLabel: 'Cases mega menu',
      viewAllLabel: 'View All Cases →',
      isActivePath: function (pathname) {
        return pathname.indexOf('cases.html') !== -1 ||
          pathname.indexOf('cases-mining.html') !== -1 ||
          pathname.indexOf('cases-water.html') !== -1 ||
          pathname.indexOf('cases-geology.html') !== -1 ||
          pathname.indexOf('cases-urban.html') !== -1 ||
          pathname.indexOf('/cases/') !== -1;
      },
      categories: [
        { title: 'Mining Cases', target: 'mega-cases-mining', href: 'cases-mining.html' },
        { title: 'Water Cases', target: 'mega-cases-water', href: 'cases-water.html' },
        { title: 'Geology Cases', target: 'mega-cases-geo', href: 'cases-geology.html' },
        { title: 'Urban Cases', target: 'mega-cases-urban', href: 'cases-urban.html' },
      ],
      panels: [
        {
          target: 'mega-cases-mining',
          items: [
            { title: 'DRC Copper Mine Open-pit Slope Monitoring', desc: 'Case 1', href: 'cases/miningcase-1.html' },
            { title: 'Mine Safety System', desc: 'Case 2', href: 'cases/miningcase-2.html' },
            { title: 'Digital Transformation & Environmental Monitoring of Guizhou PG Stack', desc: 'Case 3', href: 'cases/miningcase-3.html' },
            { title: 'Inner Mongolia Open-pit Mine Waste Dump Online Monitoring System', desc: 'Case 4', herf: 'cases/miningcase-4.html'},
          ],
        },
        {
          target: 'mega-cases-water',
          items: [
            { title: 'Fujian Reservoir Intelligent Dam Safety Monitoring System', desc: 'Case 1', href: 'cases/watercase-1.html' },
            { title: 'Sichuan Hydropower Station Reservoir Slope Intelligent Safety Monitoring', desc: 'Case 2', href: 'cases/watercase-2.html' },
            { title: 'Guangxi Smart Levee Safety Monitoring', desc: 'Case 3', href: 'cases/watercase-3.html' },
          ],
        },
        {
          target: 'mega-cases-geo',
          items: [
            { title: 'Guizhou Large-Scale Landslide Successful Early Warning', desc: 'Case 1', href: 'cases/geocase-1.html' },
            { title: 'Southwest China Multi-Province Geo-hazard Monitoring', desc: 'Case 2', href: 'cases/geocase-2.html' },
            { title: 'Technological Capacity Building for Geo-hazard Monitoring in Guizhou', desc: 'Case 3', href: 'cases/geocase-3.html' },
          ],
        },
        {
          target: 'mega-cases-urban',
          items: [
            { title: 'Deep Foundation Pit Monitoring in Core Shanghai', desc: 'Case 1', href: 'cases/urbancase-1.html' },
            { title: 'Wastewater Treatment Plant (WWTP) Storage Facility', desc: 'Case 2', href: 'cases/urbancase-2.html' },
          ],
        },
      ],
    },
  ];

  var mobileSections = [
    {
      key: 'products',
      triggerHref: 'products.html',
      toggleLabel: 'Products',
      links: [
        { title: 'GNSS Series', href: 'products.html' },
        { title: 'IoT Sensors', href: 'iot-sensors.html' },
        { title: 'Disaster Monitoring', href: 'disaster-monitoring.html' },
        { title: 'Cloud Platform', href: 'platform.html' },
      ],
    },
    {
      key: 'solutions',
      triggerHref: 'solutions.html',
      toggleLabel: 'Solutions',
      links: [
        { title: 'Mining Safety', href: 'solutions-mining-main.html' },
        { title: 'Water Conservancy', href: 'solutions-water-main.html' },
        { title: 'Geological Hazard', href: 'solutions-geology-main.html' },
        { title: 'Urban Infrastructure', href: 'solutions-urban-main.html' },
      ],
    },
    {
      key: 'cases',
      triggerHref: 'cases.html',
      toggleLabel: 'Cases',
      links: [
        { title: 'Mining Cases', href: 'cases-mining.html' },
        { title: 'Water Cases', href: 'cases-water.html' },
        { title: 'Geology Cases', href: 'cases-geology.html' },
        { title: 'Urban Cases', href: 'cases-urban.html' },
      ],
    },
  ];

  function renderDesktopMenu(config) {
    var categoriesHtml = config.categories.map(function (category, index) {
      return [
        '<a class="mega-menu-tab' + (index === 0 ? ' is-active' : '') + '" href="' + category.href + '" data-mega-target="' + category.target + '">',
        '  <span class="mega-menu-tab-title">' + category.title + '</span>',
        '</a>',
      ].join('\n');
    }).join('\n');

    var panelsHtml = config.panels.map(function (panel, index) {
      var itemsHtml = panel.items.map(function (item) {
        return [
          '<a class="mega-panel-link" href="' + item.href + '">',
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
      '<a class="nav-link nav-link--mega" href="' + config.triggerHref + '" aria-haspopup="true">',
      '  <span>' + config.triggerLabel + '</span>',
      '  <span class="nav-link-caret" aria-hidden="true">▾</span>',
      '</a>',
      '<div class="mega-menu" aria-label="' + config.menuLabel + '">',
      '  <div class="container mega-menu-inner">',
      '    <div class="mega-menu-left" aria-label="' + config.triggerLabel + ' categories">',
      categoriesHtml,
      '      <a class="mega-menu-all" href="' + config.triggerHref + '">' + config.viewAllLabel + '</a>',
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
      return '<a class="nav-drawer-sub-link" href="' + link.href + '">' + link.title + '</a>';
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
