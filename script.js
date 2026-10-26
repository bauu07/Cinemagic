// --- DATOS DEL BANNER PRINCIPAL ---
const carteleraBanner = [
    {
        img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
        title: "Backrooms",
        subtitle: "VIVÍ LA EXPERIENCIA EN NUESTRA PANTALLA GIGANTE XD",
        desc: "No deberías estar aquí. Súmale movimiento con nuestras butacas D-BOX."
    },
    {
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070",
        title: "Inception",
        subtitle: "EL ORIGEN EN CALIDAD IMAX",
        desc: "Tu mente es el escenario del crimen. Regresa el clásico de Christopher Nolan."
    },
    {
        img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070",
        title: "The Godfather",
        subtitle: "UNA OFERTA QUE NO PODRÁS RECHAZAR",
        desc: "Disfruta de la obra maestra del cine de mafias totalmente remasterizada."
    },
    {
        img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070",
        title: "Toy Story 5",
        subtitle: "HOLA VAMOS A JUGAR",
        desc: "Vení a disfrutar de esta nueva secuela de la mejor saga de Pixar."
    },
    {
        img: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=2070",
        title: "Combo CineMagic",
        subtitle: "DISFRUTA ESTE VIAJE CON SABOR",
        desc: "Con estas promociones la vas a pasar Magic. Pochoclos gigantes y bebidas al mejor precio."
    }
];

// --- DATOS DEL CATÁLOGO DE PELÍCULAS ---
const peliculasNuevas = [
    {
        id: "est-1",
        title: "Dune: Parte Dos",
        genre: "Ciencia Ficción",
        duration: "2h 46m",
        rating: "9.2",
        img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
        desc: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia."
    },
    {
        id: "est-2",
        title: "Godzilla x Kong",
        genre: "Acción",
        duration: "1h 55m",
        rating: "8.5",
        img: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?q=80&w=1000",
        desc: "Dos antiguos titanes, Godzilla y Kong, se enfrentan en una batalla colosal mientras los humanos descubren sus orígenes."
    },
    {
        id: "est-3",
        title: "Alien: Romulus",
        genre: "Terror",
        duration: "1h 59m",
        rating: "8.8",
        img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000",
        desc: "Jóvenes en un mundo lejano se enfrentan a la forma de vida más aterradora del universo."
    }
];

const catalogoPeliculas = [
    { id: 1, title: "Interstellar", genre: "Ciencia Ficción", rating: "9.0", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", desc: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por garantizar la supervivencia de la humanidad." },
    { id: 2, title: "The Dark Knight", genre: "Acción", rating: "9.5", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800", desc: "Batman debe aceptar una de las mayores pruebas psicológicas y físicas de su capacidad para luchar contra la injusticia." },
    { id: 3, title: "Spider-Man: Across Spider-Verse", genre: "Familia", rating: "8.9", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800", desc: "Miles Morales es catapultado a través del Multiverso, donde se encuentra con un equipo de Spider-Gente." },
    { id: 4, title: "Oppenheimer", genre: "Drama", rating: "8.9", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800", desc: "La historia del físico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica." },
    { id: 5, title: "Inside Out 2", genre: "Familia", rating: "8.7", img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800", desc: "Sigue a Riley en su adolescencia mientras explora nuevas emociones como la Ansiedad." },
    { id: 6, title: "A Quiet Place: Day One", genre: "Terror", rating: "8.2", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", desc: "Experimenta el día en que el mundo se enmudeció tras la llegada de criaturas ciegas letales." },
    { id: 7, title: "Gladiator II", genre: "Acción", rating: "8.6", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", desc: "Años después de presenciar la muerte de Maximus, Lucius debe entrar al Coliseo." },
    { id: 8, title: "Avatar: The Way of Water", genre: "Ciencia Ficción", rating: "8.4", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", desc: "Jake Sully vive con su familia en el planeta Pandora cuando una amenaza regresa." }
];

// --- LÓGICA DEL CARRUSEL / BANNER ---
let bannerIndex = 0;
let carouselTimer = null;

const bannerDiv = document.getElementById('cinema-banner');
const titleEl = document.getElementById('cinema-title');
const subtitleEl = document.getElementById('cinema-subtitle');
const descEl = document.getElementById('cinema-desc');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');

function initCarousel() {
    dotsContainer.innerHTML = '';
    carteleraBanner.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    updateBannerContent();
    startAutoSlide();
}

function updateBannerContent() {
    const item = carteleraBanner[bannerIndex];
    bannerDiv.style.backgroundImage = `url('${item.img}')`;
    titleEl.textContent = item.title;
    subtitleEl.textContent = item.subtitle;
    descEl.textContent = item.desc;

    // Actualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === bannerIndex);
    });
}

function goToSlide(index) {
    bannerIndex = index;
    updateBannerContent();
    resetAutoSlide();
}

function nextSlide() {
    bannerIndex = (bannerIndex + 1) % carteleraBanner.length;
    updateBannerContent();
}

function prevSlide() {
    bannerIndex = (bannerIndex - 1 + carteleraBanner.length) % carteleraBanner.length;
    updateBannerContent();
}

function startAutoSlide() {
    carouselTimer = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(carouselTimer);
    startAutoSlide();
}

prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

// --- LÓGICA DEL MENÚ LATERAL ---
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMenu() {
    sideMenu.classList.add('open');
    menuOverlay.classList.add('active');
}

function closeMenu() {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// --- RENDERIZADO DE PELÍCULAS ---
function renderEstrenos() {
    const container = document.getElementById('estrenos-container');
    container.innerHTML = peliculasNuevas.map(peli => `
        <article class="featured-card">
            <div class="featured-img-wrap">
                <img src="${peli.img}" alt="${peli.title}">
                <span class="tag-estreno">ESTRENO</span>
            </div>
            <div class="featured-info">
                <h3>${peli.title}</h3>
                <div class="featured-meta">
                    <span><i class="fa-regular fa-clock"></i> ${peli.duration}</span>
                    <span><i class="fa-solid fa-star"></i> ${peli.rating}</span>
                    <span>${peli.genre}</span>
                </div>
                <p>${peli.desc}</p>
                <button class="btn btn-primary" onclick="openMovieModal('${peli.title}', '${peli.img}', '${peli.desc}', '${peli.genre}')">
                    <i class="fa-solid fa-ticket"></i> Ver Ficha
                </button>
            </div>
        </article>
    `).join('');
}

function renderCatalogo(filterGenre = 'all') {
    const container = document.getElementById('movies-container');
    const filtered = filterGenre === 'all' 
        ? catalogoPeliculas 
        : catalogoPeliculas.filter(p => p.genre === filterGenre);

    container.innerHTML = filtered.map(peli => `
        <article class="movie-card" onclick="openMovieModal('${peli.title}', '${peli.img}', '${peli.desc}', '${peli.genre}')">
            <div class="poster-wrap">
                <img src="${peli.img}" alt="${peli.title}">
                <span class="rating-badge"><i class="fa-solid fa-star"></i> ${peli.rating}</span>
            </div>
            <div class="movie-card-info">
                <h4>${peli.title}</h4>
                <span class="movie-genre">${peli.genre}</span>
                <button class="btn btn-primary" style="width: 100%; justify-content: center; padding: 8px;">
                    Comprar
                </button>
            </div>
        </article>
    `).join('');
}

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCatalogo(e.target.dataset.genre);
    });
});

// --- MODAL ---
const modal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

function openMovieModal(title, img, desc, genre) {
    modalBody.innerHTML = `
        <img class="modal-poster" src="${img}" alt="${title}">
        <div class="modal-details">
            <h2>${title}</h2>
            <span class="movie-genre" style="font-size: 14px;">${genre}</span>
            <p style="color: #ccc; margin: 15px 0;">${desc}</p>
            <h4 style="margin-bottom: 10px;">Horarios Disponibles:</h4>
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button class="filter-btn active">16:30 2D</button>
                <button class="filter-btn">19:15 3D</button>
                <button class="filter-btn">22:00 D-BOX</button>
            </div>
            <button class="btn btn-primary" style="width: 100%; justify-content: center;">
                <i class="fa-solid fa-ticket"></i> Seleccionar Entradas
            </button>
        </div>
    `;
    modal.classList.add('open');
}

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderEstrenos();
    renderCatalogo();
});

// --- HACER EL FAVICON DE LA PESTAÑA REDONDO AUTOMÁTICAMENTE ---
function makeFaviconCircular(src) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, (img.width - size) / 2, (img.height - size) / 2, size, size, 0, 0, size, size);

        const favicon = document.getElementById('dynamic-favicon');
        if (favicon) {
            favicon.href = canvas.toDataURL('image/png');
        }
    };
    img.src = src;
}

// Ejecutar al cargar la página con tu imagen original
document.addEventListener('DOMContentLoaded', () => {
    makeFaviconCircular('imagenes/Cnlogo.png');
});

// Recorta automáticamente la imagen de la pestaña en un círculo transparente
function forzarFaviconRedondo() {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, 0, 0, size, size);

        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.type = 'image/png';
        link.href = canvas.toDataURL('image/png');
    };
    img.src = 'imagenes/Cnlogo.png';
}

// Se ejecuta apenas carga la página
document.addEventListener('DOMContentLoaded', forzarFaviconRedondo);