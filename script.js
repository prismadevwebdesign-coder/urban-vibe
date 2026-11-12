// ==========================================================================
// INTERATIVIDADE DA LANDING PAGE "URBAN VIBE"
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. EFEITO DE SCROLL NA NAVBAR
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. MENU MOBILE (TOGGLE)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Altera o ícone dinamicamente entre barras e fechar
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // 3. ANIMAÇÃO DE CARREGAMENTO INICIAL DO HERO
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        if(heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            heroContent.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
        }
    }, 200);

    // 4. MICROINTERAÇÃO: MICRO CONTADOR DO CARRINHO (Simulação)
    const buyButtons = document.querySelectorAll('.btn-buy');
    const cartCount = document.querySelector('.cart-count');
    let itemsInCart = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            // Efeito visual temporário de pulso no contador do carrinho
            cartCount.style.transform = 'scale(1.3)';
            cartCount.style.backgroundColor = '#ffffff';
            cartCount.style.color = '#0a0a0a';
            
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
                cartCount.style.backgroundColor = 'var(--accent-blue)';
                cartCount.style.color = 'var(--text-light)';
            }, 300);

            // Toast de feedback simples
            alert('Item adicionado ao seu Drop!');
        });
    });

    // 5. ANIMAÇÃO AO SCROLL (Intersection Observer API - Alta Performance)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Remove o observer daquele elemento após animar de primeira
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Dispara quando 15% do elemento entra na tela
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // 6. VALIDAÇÃO DO FORMULÁRIO DE NEWSLETTER
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert(`Sucesso! O e-mail ${emailInput.value} foi cadastrado para os próximos drops de URBAN VIBE.`);
                emailInput.value = '';
            }
        });
    }
});