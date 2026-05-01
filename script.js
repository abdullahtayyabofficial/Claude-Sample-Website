(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please fill out every field.';
        status.style.color = '#ff8a8a';
        return;
      }
      status.style.color = '';
      status.textContent = 'Thanks — message received. I\'ll be in touch shortly.';
      form.reset();
    });
  }

  // Animated node/graph network on hero canvas
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let nodes = [];
  let scrollY = window.scrollY || 0;
  let mouseX = 0;
  let mouseY = 0;
  let hasMouse = false;

  const COLOR_DEEP = { r: 1, g: 7, b: 56 };
  const COLOR_ACCENT = { r: 21, g: 161, b: 223 };

  function lerpColor(a, b, t) {
    return {
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t),
    };
  }

  function rgba(c, alpha) {
    return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha + ')';
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function initNodes() {
    // Minimal density: ~ 1 node per 18,000 px², capped
    const target = Math.min(60, Math.max(22, Math.floor((width * height) / 18000)));
    nodes = [];
    for (let i = 0; i < target; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.4 + Math.random() * 1.6,
        depth: 0.3 + Math.random() * 0.7, // for parallax
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  const LINK_DIST = 170;

  function step() {
    ctx.clearRect(0, 0, width, height);

    const parallax = scrollY * 0.15;

    // update + draw connections
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;
      a.pulse += 0.015;

      // wrap
      if (a.x < -20) a.x = width + 20;
      if (a.x > width + 20) a.x = -20;
      if (a.y < -20) a.y = height + 20;
      if (a.y > height + 20) a.y = -20;
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const ay = a.y - parallax * a.depth;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const by = b.y - parallax * b.depth;
        const dx = a.x - b.x;
        const dy = ay - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const t = 1 - dist / LINK_DIST;
          const color = lerpColor(COLOR_DEEP, COLOR_ACCENT, t);
          ctx.strokeStyle = rgba(color, t * 0.5);
          ctx.beginPath();
          ctx.moveTo(a.x, ay);
          ctx.lineTo(b.x, by);
          ctx.stroke();
        }
      }

      // mouse linkage
      if (hasMouse) {
        const dx = a.x - mouseX;
        const dy = ay - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST * 1.4) {
          const t = 1 - dist / (LINK_DIST * 1.4);
          ctx.strokeStyle = rgba(COLOR_ACCENT, t * 0.35);
          ctx.beginPath();
          ctx.moveTo(a.x, ay);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }
    }

    // draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const ay = a.y - parallax * a.depth;
      const pulse = 0.7 + Math.sin(a.pulse) * 0.3;
      const radius = a.r * pulse;

      // glow
      const grd = ctx.createRadialGradient(a.x, ay, 0, a.x, ay, radius * 6);
      grd.addColorStop(0, rgba(COLOR_ACCENT, 0.55));
      grd.addColorStop(1, rgba(COLOR_ACCENT, 0));
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(a.x, ay, radius * 6, 0, Math.PI * 2);
      ctx.fill();

      // core
      ctx.fillStyle = rgba(COLOR_ACCENT, 0.95);
      ctx.beginPath();
      ctx.arc(a.x, ay, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('scroll', function () {
    scrollY = window.scrollY || 0;
  }, { passive: true });

  canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    hasMouse = true;
  });
  canvas.addEventListener('mouseleave', function () {
    hasMouse = false;
  });

  // The canvas has pointer-events: none, so mouse events won't fire on it.
  // Listen at the hero level instead.
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      hasMouse = true;
    });
    hero.addEventListener('mouseleave', function () {
      hasMouse = false;
    });
  }

  resize();
  requestAnimationFrame(step);
})();
