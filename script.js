// =========================================================
// 1. FUNCIONALIDADE DO MENU MOBILE (HAMBURGER)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Verifica se os elementos do menu existem antes de adicionar listeners
    if (menuButton && mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');

        // Toggle para abrir e fechar o menu
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // =========================================================
    // 2. OBSERVER PARA ANIMAÇÃO DE SCROLL (FADE-IN)
    // =========================================================

    // Configuração do Intersection Observer
    const fadeInOptions = {
        root: null, // O viewport é o root
        rootMargin: '0px',
        threshold: 0.2 // O elemento será visível quando 20% dele estiver no viewport
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está visível
                entry.target.classList.add('visible');
                // Parar de observar depois que a animação for aplicada
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    // Encontra todos os elementos com a classe 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Começa a observar cada elemento
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
