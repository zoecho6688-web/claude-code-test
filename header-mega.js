(function () {
  function buildMegaMenu() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var mega = nav.querySelector('.nav-item--mega');
    if (!mega) {
      var productsLink = nav.querySelector('a.nav-link[href="products.html"]');
      if (!productsLink) return;

      var wrapper = document.createElement('div');
      wrapper.className = 'nav-item nav-item--mega';
      wrapper.innerHTML = `
        <a class="nav-link nav-link--mega" href="products.html" aria-haspopup="true">
          <span>Products</span>
          <span class="nav-link-caret" aria-hidden="true">▾</span>
        </a>
        <div class="mega-menu" aria-label="Product mega menu">
          <div class="container mega-menu-inner">
            <div class="mega-menu-left" aria-label="Product categories">
              <a class="mega-menu-tab is-active" href="products.html" data-mega-target="mega-gnss">
                <span class="mega-menu-tab-title">GNSS Series</span>
              </a>
              <a class="mega-menu-tab" href="iot-sensors.html" data-mega-target="mega-sensors">
                <span class="mega-menu-tab-title">IoT Sensors</span>
              </a>
              <a class="mega-menu-tab" href="disaster-monitoring.html" data-mega-target="mega-stations">
                <span class="mega-menu-tab-title">Disaster Monitoring</span>
              </a>
              <a class="mega-menu-tab" href="platform.html" data-mega-target="mega-platforms">
                <span class="mega-menu-tab-title">Cloud Platform</span>
              </a>
              <a class="mega-menu-all" href="products.html">View All Products →</a>
            </div>
            <div class="mega-menu-content">
              <section class="mega-panel is-active" data-mega-panel="mega-gnss">
                <div class="mega-panel-links">
                  <a class="mega-panel-link" href="products-gnss/1-gnss.html">
                    <span class="mega-panel-link-title">M20 GNSS Receiver</span>
                    <span class="mega-panel-link-desc">Real-time displacement tracking</span>
                  </a>
                  <a class="mega-panel-link" href="products-gnss/2-gnss.html">
                    <span class="mega-panel-link-title">M50 GNSS Station</span>
                    <span class="mega-panel-link-desc">All-in-one monitoring station</span>
                  </a>
                  <a class="mega-panel-link" href="products-gnss/3-gnss.html">
                    <span class="mega-panel-link-title">E50Pro GNSS Reference Receiver</span>
                    <span class="mega-panel-link-desc">Sub-millimeter precision engine</span>
                  </a>
                  <a class="mega-panel-link" href="products-gnss/4-gnss.html">
                    <span class="mega-panel-link-title">E40 GNSS Receiver</span>
                    <span class="mega-panel-link-desc">Unattended deformation monitoring</span>
                  </a>
                  <a class="mega-panel-link" href="products-gnss/5-gnss.html">
                    <span class="mega-panel-link-title">A800 3D Choke Ring Antenna</span>
                    <span class="mega-panel-link-desc">Robust signal foundation</span>
                  </a>
                </div>
              </section>

              <section class="mega-panel" data-mega-panel="mega-sensors">
                <div class="mega-panel-links">
                  <a class="mega-panel-link" href="product-sensor/dr.html">
                    <span class="mega-panel-link-title">DR030 Water Level Sensor</span>
                    <span class="mega-panel-link-desc">Mud and water level monitoring</span>
                  </a>
                  <a class="mega-panel-link" href="product-sensor/sy.html">
                    <span class="mega-panel-link-title">SY035 Vibrating Wire Piezometer</span>
                    <span class="mega-panel-link-desc">Pore pressure telemetry</span>
                  </a>
                  <a class="mega-panel-link" href="product-sensor/bhy.html">
                    <span class="mega-panel-link-title">BHY-3S Tilt and Vibration Detector</span>
                    <span class="mega-panel-link-desc">Landslide and rockfall monitoring</span>
                  </a>
                  <a class="mega-panel-link" href="product-sensor/sqj.html">
                    <span class="mega-panel-link-title">MD-TR Tubular Soil Moisture Profiler</span>
                    <span class="mega-panel-link-desc">Moisture, temperature, and angle sensing</span>
                  </a>
                </div>
              </section>

              <section class="mega-panel" data-mega-panel="mega-stations">
                <div class="mega-panel-links">
                  <a class="mega-panel-link" href="stations/display.html">
                    <span class="mega-panel-link-title">GNSS-MD40 Surface Displacement Station</span>
                    <span class="mega-panel-link-desc">Surface displacement verification</span>
                  </a>
                  <a class="mega-panel-link" href="stations/sbwy.html">
                    <span class="mega-panel-link-title">MD-IN20 Deep Displacement Station</span>
                    <span class="mega-panel-link-desc">Deep displacement oversight</span>
                  </a>
                  <a class="mega-panel-link" href="stations/soil.html">
                    <span class="mega-panel-link-title">MD-MO20 Soil Moisture Station</span>
                    <span class="mega-panel-link-desc">High-precision moisture tracking</span>
                  </a>
                  <a class="mega-panel-link" href="stations/under.html">
                    <span class="mega-panel-link-title">MD-WL20 Groundwater Station</span>
                    <span class="mega-panel-link-desc">Groundwater level and pressure monitoring</span>
                  </a>
                  <a class="mega-panel-link" href="stations/level.html">
                    <span class="mega-panel-link-title">MD-ML20 Mud and Water Level Station</span>
                    <span class="mega-panel-link-desc">Mud and water level tracking</span>
                  </a>
                  <a class="mega-panel-link" href="stations/rain.html">
                    <span class="mega-panel-link-title">MD-RN20 Intelligent Rainfall Station</span>
                    <span class="mega-panel-link-desc">Precipitation monitoring</span>
                  </a>
                </div>
              </section>

              <section class="mega-panel" data-mega-panel="mega-platforms">
                <div class="mega-panel-links">
                  <a class="mega-panel-link" href="platforms/mdt.html">
                    <span class="mega-panel-link-title">MDT</span>
                    <span class="mega-panel-link-desc">IoT middleware and AI integration</span>
                  </a>
                  <a class="mega-panel-link" href="platforms/net.html">
                    <span class="mega-panel-link-title">MD-NET 3.0</span>
                    <span class="mega-panel-link-desc">Safety monitoring and early warning analytics</span>
                  </a>
                  <a class="mega-panel-link" href="platforms/miyitong.html">
                    <span class="mega-panel-link-title">MYT App</span>
                    <span class="mega-panel-link-desc">Mobile device management</span>
                  </a>
                  <a class="mega-panel-link" href="platforms/szls.html">
                    <span class="mega-panel-link-title">Digital Twin Watershed Platform</span>
                    <span class="mega-panel-link-desc">Bridge physical and spatial models</span>
                  </a>
                  <a class="mega-panel-link" href="platforms/zhgq.html">
                    <span class="mega-panel-link-title">Intelligent Irrigation District Platform</span>
                    <span class="mega-panel-link-desc">Dynamic spatial telemetry</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>`;

      nav.insertBefore(wrapper, productsLink);
      productsLink.remove();
      mega = wrapper;
    }

    var productsNavLink = mega.querySelector('.nav-link--mega');
    var pathname = window.location.pathname;
    var isProductSection =
      /(?:^|\/)(products|iot-sensors|disaster-monitoring|platform)\.html$/.test(pathname) ||
      pathname.indexOf('/products-gnss/') !== -1 ||
      pathname.indexOf('/product-sensor/') !== -1 ||
      pathname.indexOf('/stations/') !== -1 ||
      pathname.indexOf('/platforms/') !== -1;
    if (productsNavLink) {
      productsNavLink.classList.toggle('active', isProductSection);
    }

    var tabs = Array.prototype.slice.call(mega.querySelectorAll('[data-mega-target]'));
    var panels = Array.prototype.slice.call(mega.querySelectorAll('[data-mega-panel]'));
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
      tab.addEventListener('mouseenter', function () {
        activateMega(target);
      });
      tab.addEventListener('focus', function () {
        activateMega(target);
      });
      tab.addEventListener('click', function () {
        activateMega(target);
      });
    });

    activateMega(tabs[0].getAttribute('data-mega-target'));
  }

  function buildMobileProductsMenu() {
    var drawer = document.getElementById('mobile-nav');
    if (!drawer) return;

    var drawerInner = drawer.querySelector('.nav-drawer-inner');
    if (!drawerInner) return;

    var productsLink = drawerInner.querySelector('a.nav-drawer-link[href="products.html"]');
    if (!productsLink || drawerInner.querySelector('.nav-drawer-products')) return;

    var section = document.createElement('div');
    section.className = 'nav-drawer-products';
    section.innerHTML = `
      <button class="nav-drawer-products-toggle" type="button" aria-expanded="false" aria-controls="mobile-products-panel">
        <span>Products</span>
        <span class="nav-drawer-products-caret" aria-hidden="true">+</span>
      </button>
      <div class="nav-drawer-products-panel" id="mobile-products-panel" hidden>
        <a class="nav-drawer-sub-link" href="products.html">GNSS Series</a>
        <a class="nav-drawer-sub-link" href="iot-sensors.html">IoT Sensors</a>
        <a class="nav-drawer-sub-link" href="disaster-monitoring.html">Disaster Monitoring</a>
        <a class="nav-drawer-sub-link" href="platform.html">Cloud Platform</a>
      </div>
    `;

    drawerInner.insertBefore(section, productsLink);
    productsLink.remove();

    var toggle = section.querySelector('.nav-drawer-products-toggle');
    var panel = section.querySelector('.nav-drawer-products-panel');
    var caret = section.querySelector('.nav-drawer-products-caret');
    if (!toggle || !panel || !caret) return;

    function setOpen(nextOpen) {
      toggle.setAttribute('aria-expanded', String(nextOpen));
      panel.hidden = !nextOpen;
      section.classList.toggle('is-open', nextOpen);
      caret.textContent = nextOpen ? '−' : '+';
    }

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    Array.prototype.slice.call(panel.querySelectorAll('a')).forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMegaMenu);
    document.addEventListener('DOMContentLoaded', buildMobileProductsMenu);
  } else {
    buildMegaMenu();
    buildMobileProductsMenu();
  }
})();
