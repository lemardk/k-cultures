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

// Contact form — Formspree
async function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const btn  = form.querySelector('button[type="submit"]');

    btn.textContent = '전송 중...';
    btn.disabled    = true;

    try {
        const res = await fetch('https://formspree.io/f/xqeywkon', {
            method:  'POST',
            headers: { 'Accept': 'application/json' },
            body:    new FormData(form),
        });

        if (res.ok) {
            btn.textContent      = '전송 완료! 빠르게 답변 드리겠습니다.';
            btn.style.background = '#00b894';
            form.reset();
            setTimeout(() => {
                btn.textContent      = '보내기';
                btn.style.background = '';
                btn.disabled         = false;
            }, 4000);
        } else {
            throw new Error();
        }
    } catch {
        btn.textContent      = '오류 발생 — 다시 시도해주세요';
        btn.style.background = '#e74c3c';
        btn.disabled         = false;
        setTimeout(() => {
            btn.textContent      = '보내기';
            btn.style.background = '';
        }, 3000);
    }
}

// Newsletter subscribe — Formspree
async function handleSubscribe(e) {
    e.preventDefault();
    const form  = e.target;
    const input = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button[type="submit"]');

    btn.textContent = '전송 중...';
    btn.disabled    = true;

    try {
        const res = await fetch('https://formspree.io/f/xqeywkon', {
            method:  'POST',
            headers: { 'Accept': 'application/json' },
            body:    new FormData(form),
        });

        if (res.ok) {
            btn.textContent      = '구독 완료!';
            btn.style.background = '#00b894';
            input.value          = '';
            setTimeout(() => {
                btn.textContent      = '구독하기';
                btn.style.background = '';
                btn.disabled         = false;
            }, 3000);
        } else {
            throw new Error('서버 오류');
        }
    } catch {
        btn.textContent      = '오류 발생 — 다시 시도';
        btn.style.background = '#e74c3c';
        btn.disabled         = false;
        setTimeout(() => {
            btn.textContent      = '구독하기';
            btn.style.background = '';
        }, 3000);
    }
}
