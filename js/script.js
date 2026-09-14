// Language Dictionary
const translations = {
    "en": {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-products": "Products",
        "nav-contact": "Contact",
        "hero-badge": "English & Spanish Services",
        "hero-title": "Modernize Your Business.",
        "hero-subtitle": "At Dev Studio Bolivia, we transform the way businesses connect with their customers. We offer custom web development, intelligent chatbots, and digital solutions designed specifically for your business.",
        "hero-cta-1": "See Our Work",
        "hero-cta-2": "Contact Us",
        "about-title": "About Me",
        "about-subtitle": "The person behind DevStudio Bolivia.",
        "about-p1": "I'm a Bolivian technology professional with a university education and hands-on experience developing digital solutions for real-world needs. Living and working in the United States has given me the privilege of learning alongside experienced professionals and successful business leaders. It has shaped the way I think: <strong>solve problems with curiosity, work with integrity, communicate clearly, and always focus on creating genuine value.</strong>",
        "about-p2": "Because I am Bolivian, I understand our culture, how our people think, and the opportunities and challenges local businesses face. My goal is to bring the knowledge, experience, and professional standards I have gained in the United States back to Bolivia.",
        "about-p3": "Through DevStudio Bolivia, I want to do what I do best&mdash;use technology to help people. Whether you need to strengthen your online presence, improve the way your business operates, or transform an idea into a digital solution, I'm here to listen, guide you, and build something that supports your growth. <strong>Your success is not just another project; it is the reason I do this work.</strong>",
        "prod-title": "Products",
        "prod-subtitle": "Software products we've built to power real businesses.",
        "prod-pos-name": "PDV",
        "prod-pos-slogan": "PDV in your hands",
        "prod-pos-tag": "SaaS Platform",
        "prod-pos-desc": "A multi-tenant SaaS PDV (Punto de Venta) system built for restaurants. It works on any device with internet access: order management, cash register control, and support for cash and QR payments &mdash; no card processing required &mdash; built to scale across multiple restaurant locations from a single platform.",
        "prod-pos-img-label": "Product image coming soon",
        "feat-multitenant": "Multi-tenant architecture",
        "feat-inventory": "Inventory & supplier management",
        "feat-reservations": "Reservations",
        "feat-tracking": "Real-time order tracking",
        "port-title": "Our Projects",
        "port-subtitle": "A showcase of the stunning websites we've tailored to our clients' unique needs.",
        "proj-1-desc": "A local consulting business specializing in the Spanish community. They struggled with accepting forms from various sources. We built a site with a unified form, reducing their channels to one.",
        "proj-2-desc": "A portfolio website showcasing cloud engineering skills, featuring a live visitor counter utilizing an AWS serverless backend.",
        "proj-3-desc": "A sleek website for a salon in Bolivia that includes a direct WhatsApp connection, allowing customers to instantly message the store.",
        "proj-4-desc": "A modern, fully responsive web application built with premium aesthetics in mind. It showcases the best practices of modern interactive design.",
        "contact-title": "Get in Touch",
        "contact-subtitle": "Reach out to us directly via WhatsApp or Facebook.",
        "contact-wa-title": "WhatsApp",
        "contact-wa-desc": "Message us directly for a quick response.",
        "contact-wa-btn": "Chat on WhatsApp",
        "contact-fb-title": "Facebook",
        "contact-fb-desc": "Visit our Business Page and follow our updates.",
        "contact-fb-btn": "Visit Facebook Page",
        "footer-rights": "All rights reserved."
    },
    "es": {
        "nav-home": "Inicio",
        "nav-about": "Nosotros",
        "nav-products": "Productos",
        "nav-contact": "Contacto",
        "hero-badge": "Servicios en Español e Inglés",
        "hero-title": "Moderniza tu Negocio.",
        "hero-subtitle": "En Dev Studio Bolivia, transformamos la manera en que los negocios se conectan con sus clientes. Ofrecemos desarrollo web personalizado, chatbots inteligentes y soluciones digitales diseñadas especialmente para tu negocio.",
        "hero-cta-1": "Ver Nuestro Trabajo",
        "hero-cta-2": "Contáctanos",
        "about-title": "Sobre Mí",
        "about-subtitle": "La persona detrás de DevStudio Bolivia.",
        "about-p1": "Soy un profesional boliviano de tecnología con formación universitaria y experiencia práctica desarrollando soluciones digitales para necesidades reales. Vivir y trabajar en Estados Unidos me ha dado el privilegio de aprender junto a profesionales experimentados y líderes empresariales exitosos. Esto ha moldeado mi forma de pensar: <strong>resolver problemas con curiosidad, trabajar con integridad, comunicarme con claridad y enfocarme siempre en crear valor genuino.</strong>",
        "about-p2": "Porque soy boliviano, entiendo nuestra cultura, la forma de pensar de nuestra gente, y las oportunidades y desafíos que enfrentan los negocios locales. Mi objetivo es traer de vuelta a Bolivia el conocimiento, la experiencia y los estándares profesionales que he adquirido en Estados Unidos.",
        "about-p3": "A través de DevStudio Bolivia, quiero hacer lo que mejor sé hacer: usar la tecnología para ayudar a las personas. Ya sea que necesites fortalecer tu presencia en línea, mejorar la forma en que opera tu negocio, o transformar una idea en una solución digital, estoy aquí para escucharte, guiarte y construir algo que impulse tu crecimiento. <strong>Tu éxito no es solo otro proyecto; es la razón por la que hago este trabajo.</strong>",
        "prod-title": "Productos",
        "prod-subtitle": "Productos de software que hemos construido para potenciar negocios reales.",
        "prod-pos-name": "PDV",
        "prod-pos-slogan": "PDV en tus manos",
        "prod-pos-tag": "Plataforma SaaS",
        "prod-pos-desc": "Un sistema de punto de venta (PDV) SaaS multi-inquilino diseñado para restaurantes. Se puede usar en cualquier dispositivo con acceso a internet: manejo de órdenes, gestión de caja, y control de tu efectivo y pagos QR &mdash; sin necesidad de procesamiento de tarjetas &mdash; construido para escalar a múltiples sucursales desde una sola plataforma.",
        "prod-pos-img-label": "Imagen del producto próximamente",
        "feat-multitenant": "Arquitectura multi-inquilino",
        "feat-inventory": "Gestión de inventario y proveedores",
        "feat-reservations": "Reservas",
        "feat-tracking": "Seguimiento de pedidos en tiempo real",
        "port-title": "Nuestros Proyectos",
        "port-subtitle": "Una muestra de los increíbles sitios web que hemos diseñado a la medida de las necesidades únicas de nuestros clientes.",
        "proj-1-desc": "Una empresa de consultoría local enfocada en la comunidad hispana. Tenían problemas para aceptar formularios de diversas fuentes. Creamos un sitio con un formulario unificado, reduciendo sus canales a uno.",
        "proj-2-desc": "Un sitio de portafolio que demuestra habilidades de ingeniería en la nube, con un contador de visitas en vivo usando un backend serverless de AWS.",
        "proj-3-desc": "Un sitio web elegante para un salón en Bolivia que incluye una conexión directa a WhatsApp, permitiendo a los clientes comunicarse al instante con la tienda.",
        "proj-4-desc": "Una aplicación web moderna y totalmente responsiva, construida con estética premium. Destaca las mejores prácticas de diseño interactivo moderno.",
        "contact-title": "Ponte en Contacto",
        "contact-subtitle": "Comunícate con nosotros directamente por WhatsApp o Facebook.",
        "contact-wa-title": "WhatsApp",
        "contact-wa-desc": "Envíanos un mensaje para una respuesta rápida.",
        "contact-wa-btn": "Contactar por WhatsApp",
        "contact-fb-title": "Facebook",
        "contact-fb-desc": "Visita nuestra página de negocios y síguenos.",
        "contact-fb-btn": "Visitar Página de Facebook",
        "footer-rights": "Todos los derechos reservados."
    }
}

// Interactivity & Scroll Reveals
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

// Product Card Image Gallery (auto-rotating)
document.querySelectorAll('.card-gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('.gallery-img');
    const dots = gallery.querySelectorAll('.gallery-dot');
    let current = 0;
    let timer;

    function showSlide(index) {
        images[current].classList.remove('active');
        dots[current]?.classList.remove('active');
        current = index;
        images[current].classList.add('active');
        dots[current]?.classList.add('active');
    }

    function nextSlide() {
        showSlide((current + 1) % images.length);
    }

    function startTimer() {
        timer = setInterval(nextSlide, 3000);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            resetTimer();
        });
    });

    if (images.length > 1) {
        startTimer();
    }
});

// Footer Year
document.querySelectorAll('.footer-year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Language Toggle Logic
const langBtn = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    localStorage.setItem('lang', lang);
}

// Initial Call
applyLanguage(currentLang);

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLanguage(currentLang);
});

// Mobile Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
