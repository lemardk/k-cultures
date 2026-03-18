// =============================================
// K-CULTURES — Main JS
// =============================================

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile burger menu
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});

// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.classList.remove('open');
    });
});

// Newsletter subscribe
function handleSubscribe(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const btn   = e.target.querySelector('button');
    const email = input.value.trim();

    if (!email) return;

    btn.textContent = '완료!';
    btn.style.background = '#00b894';
    btn.disabled = true;
    input.value  = '';

    setTimeout(() => {
        btn.textContent = '구독하기';
        btn.style.background = '';
        btn.disabled = false;
    }, 3000);
}
