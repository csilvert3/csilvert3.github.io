document.addEventListener('DOMContentLoaded', () => {
    const mapping = {
      headerBg:   { sel: 'header', prop: 'backgroundColor' },
      headerText: { sel: 'header', prop: 'color' },
      navBg:      { sel: '.top-nav', prop: 'backgroundColor' },
      mainBg:     { sel: '.main-content', prop: 'backgroundColor' },
      sidebarBg:  { sel: '.sidebar-left, .sidebar-right', prop: 'backgroundColor' },
      footerBg:   { sel: 'footer', prop: 'backgroundColor' },
      textColor:  { sel: 'body', prop: 'color' }
    };

    function rgbToHex(rgb) {
        const [r,g,b] = rgb.match(/\d+/g).map(Number);
        return '#' + [r,g,b].map((x) => x.toString(16).padStart(2,'0')).join('');
      }

    document.getElementById('randomize-btn').addEventListener('click', () => {
    Object.keys(mapping).forEach((id) => {
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

      document.querySelectorAll(mapping[id].sel).forEach((el) => {
        el.style[mapping[id].prop] = randomColor;
      });

      const picker = document.getElementById(id);
      if (picker) picker.value = randomColor;
    });
  });
  
    const defaults = {};
    Object.keys(mapping).forEach((id) => {
      const { sel, prop } = mapping[id];
      const el = document.querySelector(sel);
      if (el) defaults[id] = getComputedStyle(el)[prop];
    });
  
    Object.keys(mapping).forEach((id) => {
      const input = document.getElementById(id);
      if (!input) return;
      input.value = rgbToHex(defaults[id]);
      input.addEventListener('input', () => {
        const { sel, prop } = mapping[id];
        document.querySelectorAll(sel).forEach((el) => {
          el.style[prop] = input.value;
        });
      });
    });
  
    document.getElementById('resetColors').addEventListener('click', () => {
      Object.keys(mapping).forEach((id) => {
        const input = document.getElementById(id);
        const { sel, prop } = mapping[id];
        const def = defaults[id];
        document.querySelectorAll(sel).forEach((el) => {
          el.style[prop] = def;
        });
        input.value = rgbToHex(def);
      });
    });
  });
  