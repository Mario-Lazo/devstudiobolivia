// Language Dictionary
const translations = {
    "en": {
        "nav-home": "Home",
        "nav-portfolio": "Portfolio",
        "nav-pricing": "Pricing",
        "hero-badge": "English & Spanish Services",
        "hero-title": "Stunning Websites Built by Developers",
        "hero-subtitle": "Two developers making websites and webapps. One studied in the USA at university GMU. The other in Bolivia and studied in [filler]. We bring our shared skills to create professional websites and more.",
        "hero-cta-1": "See Our Work",
        "hero-cta-2": "View Solutions",
        "port-title": "Our Projects",
        "port-subtitle": "A showcase of the stunning websites we've tailored to our clients' unique needs.",
        "proj-1-desc": "A local consulting business specializing in the Spanish community. They struggled with accepting forms from various sources. We built a site with a unified form, reducing their channels to one.",
        "proj-2-desc": "A portfolio website showcasing cloud engineering skills, featuring a live visitor counter utilizing an AWS serverless backend.",
        "proj-3-desc": "A sleek website for a salon in Bolivia that includes a direct WhatsApp connection, allowing customers to instantly message the store.",
        "proj-4-desc": "A modern, fully responsive web application built with premium aesthetics in mind. It showcases the best practices of modern interactive design.",
        "price-title": "Solution Tiers",
        "price-subtitle": "Choose the perfect layout and feature set for your business growth.",
        "price-t1": "Starter Presence",
        "price-t2": "Business Standard",
        "price-t3": "Premium App",
        "price-t4": "Enterprise Flow",
        "feat-1": "Single Landing Page",
        "feat-2": "Basic Contact Form",
        "feat-3": "Mobile Responsive",
        "feat-4": "Standard Delivery",
        "feat-5": "Up to 5 Pages",
        "feat-6": "Advanced Forms & CRM Integration",
        "feat-7": "SEO Optimization",
        "feat-8": "Bilingual Support (EN/ES)",
        "feat-9": "Custom Web Application",
        "feat-10": "Database & Backend Services",
        "feat-11": "User Authentication",
        "feat-12": "Priority Support",
        "feat-13": "Full System Architecture",
        "feat-14": "High-availability Scaling",
        "feat-15": "Custom Dev/Ops (AWS)",
        "feat-16": "Dedicated Account Manager",
        "btn-inquire": "Inquire",
        "popular-badge": "Most Popular"
    },
    "es": {
        "nav-home": "Inicio",
        "nav-portfolio": "Portafolio",
        "nav-pricing": "Precios",
        "hero-badge": "Servicios en Español e Inglés",
        "hero-title": "Sitios Web Increíbles Hechos por Desarrolladores",
        "hero-subtitle": "Dos desarrolladores creando sitios y aplicaciones web. Uno estudió en EE. UU. en la universidad GMU. El otro en Bolivia y estudió en [filler]. Aportamos nuestras habilidades compartidas para crear sitios web profesionales y más.",
        "hero-cta-1": "Ver Nuestro Trabajo",
        "hero-cta-2": "Ver Soluciones",
        "port-title": "Nuestros Proyectos",
        "port-subtitle": "Una muestra de los increíbles sitios web que hemos diseñado a la medida de las necesidades únicas de nuestros clientes.",
        "proj-1-desc": "Una empresa de consultoría local enfocada en la comunidad hispana. Tenían problemas para aceptar formularios de diversas fuentes. Creamos un sitio con un formulario unificado, reduciendo sus canales a uno.",
        "proj-2-desc": "Un sitio de portafolio que demuestra habilidades de ingeniería en la nube, con un contador de visitas en vivo usando un backend serverless de AWS.",
        "proj-3-desc": "Un sitio web elegante para un salón en Bolivia que incluye una conexión directa a WhatsApp, permitiendo a los clientes comunicarse al instante con la tienda.",
        "proj-4-desc": "Una aplicación web moderna y totalmente responsiva, construida con estética premium. Destaca las mejores prácticas de diseño interactivo moderno.",
        "price-title": "Niveles de Solución",
        "price-subtitle": "Elige el diseño y las funciones perfectas para el crecimiento de tu negocio.",
        "price-t1": "Presencia Inicial",
        "price-t2": "Estándar Empresarial",
        "price-t3": "App Premium",
        "price-t4": "Flujo Empresarial",
        "feat-1": "Una Sola Página (Landing)",
        "feat-2": "Formulario de Contacto Básico",
        "feat-3": "Diseño Responsivo",
        "feat-4": "Entrega Estándar",
        "feat-5": "Hasta 5 Páginas",
        "feat-6": "Formularios Avanzados e Integración CRM",
        "feat-7": "Optimización SEO",
        "feat-8": "Soporte Bilingüe (EN/ES)",
        "feat-9": "Aplicación Web Personalizada",
        "feat-10": "Base de Datos y Backend",
        "feat-11": "Autenticación de Usuarios",
        "feat-12": "Soporte Prioritario",
        "feat-13": "Arquitectura de Sistema Completa",
        "feat-14": "Escalabilidad de Alta Disponibilidad",
        "feat-15": "Dev/Ops Personalizado (AWS)",
        "feat-16": "Gerente de Cuenta Dedicado",
        "btn-inquire": "Consultar",
        "popular-badge": "Más Popular"
    }
}

// Interactivity & Scroll Reveals
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

// Language Toggle Logic
const langBtn = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
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
