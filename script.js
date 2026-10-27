const carteleraBanner = [
    {
        img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
        title: "Backrooms",
        subtitle: "VIVI LA EXPERIENCIA EN NUESTRA PANTALLA GIGANTE XD",
        desc: "No deberias estar aqui. Sumale movimiento con nuestras butacas D-BOX."
    },
    {
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070",
        title: "Inception",
        subtitle: "EL ORIGEN EN CALIDAD IMAX",
        desc: "Tu mente es el escenario del crimen. Regresa el clasico de Christopher Nolan."
    },
    {
        img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070",
        title: "The Godfather",
        subtitle: "UNA OFERTA QUE NO PODRAS RECHAZAR",
        desc: "Disfruta de la obra maestra del cine de mafias totalmente remasterizada."
    }
];

const peliculasNuevas = [
    {
        id: "est-1",
        title: "Dune: Parte Dos",
        genre: "Ciencia Ficcion",
        duration: "2h 46m",
        rating: "9.2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWtljM0rZmkLSaPumXSpbYBxgirQEIcPAbqQoViaghg&s=10",
        desc: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores."
    },
    {
        id: "est-2",
        title: "Godzilla x Kong",
        genre: "Accion",
        duration: "1h 55m",
        rating: "8.5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCk-gqdZ-g69Pj7nMHC6HIlfrLphc2qh_QLQVF1QCmg&s=10",
        desc: "Dos antiguos titanes se enfrentan en una batalla colosal mientras los humanos descubren sus origenes."
    },
    {
        id: "est-3",
        title: "Alien: Romulus",
        genre: "Terror",
        duration: "1h 59m",
        rating: "8.8",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJF93fJyF9t-X5s6VaR5SnoddqMiRDG2kgVfZHwE0iSg&s=10",
        desc: "Jovenes en un mundo lejano se enfrentan a la forma de vida mas aterradora del universo."
    },
    {
        id: "est-4",
        title: "Deadpool & Wolverine",
        genre: "Accion",
        duration: "2h 08m",
        rating: "9.1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5u3bBzRfFn9QjAj2KY018KoMnozgJvvpt6XLgNFQHtg&s=10",
        desc: "Wade Wilson se une a un Wolverine recuperado para salvar su universo de una amenaza destructiva."
    }
];

const catalogoPeliculas = [
    { id: 1, title: "Interstellar", genre: "Ciencia Ficcion", rating: "9.0", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10", desc: "Exploradores viajan a traves de un agujero de gusano para salvar la humanidad." },
    { id: 2, title: "The Dark Knight", genre: "Accion", rating: "9.5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxkueZBnBwie90ZfzNCuYZykLNByhqN3kiClsgxHqAA&s=10", desc: "Batman lucha contra el caos sembrado por el Joker en Gotham." },
    { id: 3, title: "Spider-Man: Across Spider-Verse", genre: "Familia", rating: "8.9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr--RgPLZ2CO9L5-qvjhHIln8ZFUeOUNqKP5CdWgTq4g&s=10", desc: "Miles Morales viaja a traves del Multiverso de Spider-Gente." },
    { id: 4, title: "Oppenheimer", genre: "Drama", rating: "8.9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kJIS4-L9mTLDZdaP-De1Kw14Pb031aLYWGsQXIu7-w&s=10", desc: "La historia del desarrollo de la primera bomba atomica." },
    { id: 5, title: "Inside Out 2", genre: "Familia", rating: "8.7", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7q3AtilqJLcwBIsdUG6dRUNUW8NYB4sOLmEAI5ZZHw&s=10", desc: "Riley explora nuevas emociones adolescentes como la Ansiedad." },
    { id: 6, title: "A Quiet Place: Day One", genre: "Terror", rating: "8.2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT41P86oDMqERlD02_KtdsBu9vp2EyKakk5IX0kSPkw&s=10", desc: "El dia en que el mundo enmudecio tras la llegada de criaturas alienigenas." },
    { id: 7, title: "Gladiator II", genre: "Accion", rating: "8.6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMULD00B7ABT1nmPsgvj8Msvnn6ecTS5L1_MPWO8LhyA&s=10", desc: "Lucius ingresa al Coliseo para recuperar el honor de Roma." },
    { id: 8, title: "Avatar: The Way of Water", genre: "Ciencia Ficcion", rating: "8.4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_21ac3w7tjl0d1mjn9jOArW9SzBbS3vp6l97gDVgkQ&s=10", desc: "Jake Sully defiende a su familia en los oceanos de Pandora." },
    { id: 9, title: "Joker: Folie a Deux", genre: "Drama", rating: "8.1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcOruxdUBY3jE7WorbwKtImfy_OFcY2KXWTrSF1EECg&s=10", desc: "Arthur Fleck conoce a Harley Quinn en el hospital psiquiatrico de Arkham." },
    { id: 10, title: "Kung Fu Panda 4", genre: "Familia", rating: "8.3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQov6mvjBuFq6QFWZFEQd9UPCaqLptTTf2q7CJtbenIww&s=10", desc: "Po busca a su sucesor mientras enfrenta a la Camaleona." }
];

function irAButacasDirecto(titulo, horario, precio) {
    const seleccion = {
        titulo: titulo,
        horario: horario || '19:00 2D',
        precio: precio || 3800
    };
    localStorage.setItem('peliculaSeleccionada', JSON.stringify(seleccion));
    window.location.href = 'butacas.html';
}

function comprarDesdeBanner() {
    const item = carteleraBanner[bannerIndex];
    irAButacasDirecto(item.title, '22:00 D-BOX', 4500);
}

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
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    carteleraBanner.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    updateBannerContent();
    carouselTimer = setInterval(nextSlide, 5000);
}

function updateBannerContent() {
    if (!bannerDiv) return;
    const item = carteleraBanner[bannerIndex];
    bannerDiv.style.backgroundImage = `url('${item.img}')`;
    titleEl.textContent = item.title;
    subtitleEl.textContent = item.subtitle;
    descEl.textContent = item.desc;

    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === bannerIndex);
    });
}

function goToSlide(index) {
    bannerIndex = index;
    updateBannerContent();
}

function nextSlide() {
    bannerIndex = (bannerIndex + 1) % carteleraBanner.length;
    updateBannerContent();
}

function prevSlide() {
    bannerIndex = (bannerIndex - 1 + carteleraBanner.length) % carteleraBanner.length;
    updateBannerContent();
}

if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
        menuOverlay.classList.add('active');
    });
}

if (menuClose) {
    menuClose.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        menuOverlay.classList.remove('active');
    });
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        menuOverlay.classList.remove('active');
    });
}

document.querySelectorAll('#side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        menuOverlay.classList.remove('active');
    });
});

function renderEstrenos() {
    const container = document.getElementById('estrenos-container');
    if (!container) return;
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
                </div>
                <p>${peli.desc}</p>
                <button class="btn btn-primary" onclick="abrirPelicula('estreno', '${peli.id}')">
                    <i class="fa-solid fa-ticket"></i> Ver Horarios y Comprar
                </button>
            </div>
        </article>
    `).join('');
}

function renderCatalogo(filterGenre = 'all') {
    const container = document.getElementById('movies-container');
    if (!container) return;
    const filtered = filterGenre === 'all' 
        ? catalogoPeliculas 
        : catalogoPeliculas.filter(p => p.genre === filterGenre);

    container.innerHTML = filtered.map(peli => `
        <article class="movie-card" onclick="abrirPelicula('catalogo', '${peli.id}')">
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

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCatalogo(e.target.dataset.genre);
    });
});

const modal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

function abrirPelicula(origen, id) {
    const lista = origen === 'estreno' ? peliculasNuevas : catalogoPeliculas;
    const peli = lista.find(p => String(p.id) === String(id));
    if (peli) openMovieModal(peli.title, peli.img, peli.desc, peli.genre);
}

function openMovieModal(title, img, desc, genre) {
    if (!modalBody) return;
    modalBody.innerHTML = `
        <img class="modal-poster" src="${img}" alt="${title}">
        <div class="modal-details">
            <h2>${title}</h2>
            <span class="movie-genre" style="font-size: 14px;">${genre}</span>
            <p style="color: #ccc; margin: 15px 0;">${desc}</p>
            <h4 style="margin-bottom: 10px;">Selecciona tu Horario:</h4>
            <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
                <button class="time-btn" data-horario="16:30 2D" data-precio="3500">16:30 2D - $3500</button>
                <button class="time-btn" data-horario="19:15 3D" data-precio="4000">19:15 3D - $4000</button>
                <button class="time-btn" data-horario="22:00 D-BOX" data-precio="4500">22:00 D-BOX - $4500</button>
            </div>
        </div>
    `;
    modalBody.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            irAButacasDirecto(title, btn.dataset.horario, Number(btn.dataset.precio));
        });
    });
    modal.classList.add('open');
}

if (modalClose) modalClose.addEventListener('click', () => modal.classList.remove('open'));
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderEstrenos();
    renderCatalogo();
});