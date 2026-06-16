// ═══════════════════════════════════════
//   INSTITUTO SORRISI — JS Compartilhado
// ═══════════════════════════════════════

// Nav scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Mobile menu
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const btn = document.querySelector('.hamburger');
  if (!m) return;
  const isOpen = m.classList.toggle('open');
  m.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Reveal on scroll
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.04, rootMargin: '0px 0px 20px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Elementos já visíveis no viewport ao carregar → mostrar imediatamente sem esperar scroll
  const rect = el.getBoundingClientRect();
  const inView = rect.top < window.innerHeight + 20 && rect.bottom > 0;
  if (inView) {
    el.style.transitionDelay = (i % 4) * 0.09 + 's';
    // Pequeno timeout para o browser aplicar a transição ao invés de pular
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));
  } else {
    el.style.transitionDelay = '0s';
    revealObs.observe(el);
  }
});

// Form submit (Web3Forms async)
async function mostrarSucesso(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const ok = document.getElementById('formOk');

  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }

  try {
    const data = new FormData(form);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    const json = await res.json();
    if (json.success) {
      form.style.display = 'none';
      if (ok) ok.style.display = 'block';
    } else {
      alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
      if (btn) { btn.disabled = false; btn.textContent = 'Enviar Mensagem'; }
    }
  } catch (err) {
    alert('Erro de conexão. Verifique sua internet e tente novamente.');
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar Mensagem'; }
  }
}

// Descadastro form submit
async function enviarDescadastro(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const ok = document.getElementById('descadastroOk');

  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }

  try {
    const data = new FormData(form);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    const json = await res.json();
    if (json.success) {
      form.style.display = 'none';
      if (ok) ok.style.display = 'block';
    } else {
      alert('Ocorreu um erro ao enviar. Por favor, tente novamente.');
      if (btn) { btn.disabled = false; btn.textContent = 'Solicitar Descadastro'; }
    }
  } catch (err) {
    alert('Erro de conexão. Verifique sua internet e tente novamente.');
    if (btn) { btn.disabled = false; btn.textContent = 'Solicitar Descadastro'; }
  }
}

// Legacy fallback
function enviarForm(e) {
  e.preventDefault();
  mostrarSucesso(e);
}

// Botão WhatsApp flutuante
(function() {
  const wa = document.createElement('a');
  wa.href = 'https://wa.me/5522998496156?text=Olá%2C%20gostaria%20de%20marcar%20uma%20consulta';
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  wa.className = 'wa-float';
  wa.setAttribute('aria-label', 'Falar no WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(wa);
})();
