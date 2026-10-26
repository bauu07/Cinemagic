const productosCandy = [
    { id: 'c1', nombre: 'Combo Mega Balde', desc: '1 Balde Gigante + 2 Gaseosas Grandes', precio: 5200, img: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800' },
    { id: 'c2', nombre: 'Combo Duo Clasico', desc: '1 Pochoclo Mediano + 2 Gaseosas Medianas', precio: 4100, img: 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?q=80&w=800' },
    { id: 'c3', nombre: 'Pochoclo Gigante Dulce', desc: 'Balde individual de pochoclos dulces recien hechos', precio: 2800, img: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800' },
    { id: 'c4', nombre: 'Gaseosa Grande 1L', desc: 'Coca-Cola, Sprite o Fanta a eleccion', precio: 1800, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800' },
    { id: 'c5', nombre: 'Pack Chocolate M&Ms', desc: 'Bolsa familiar de chocolates confitados', precio: 1500, img: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=800' },
    { id: 'c6', nombre: 'Nachos con Queso', desc: 'Porcion de nachos crocantes con salsa cheddar tibia', precio: 3200, img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800' }
];

let orden = JSON.parse(localStorage.getItem('ordenActual')) || { pelicula: 'Sin Seleccion', totalEntradas: 0, butacas: [] };
let combosElegidos = [];

function renderCandyStore() {
    const grid = document.getElementById('candystore-container');
    if (!grid) return;
    grid.innerHTML = productosCandy.map(prod => `
        <div class="combo-card">
            <img src="${prod.img}" alt="${prod.nombre}">
            <div class="combo-info">
                <h3>${prod.nombre}</h3>
                <p>${prod.desc}</p>
                <span class="price">$${prod.precio}</span>
                <button class="btn btn-primary" onclick="agregarProducto('${prod.nombre}', ${prod.precio})">+ Agregar</button>
            </div>
        </div>
    `).join('');
}

function renderResumen() {
    const box = document.getElementById('summary-details');
    if (!box) return;
    let totalCombos = combosElegidos.reduce((sum, c) => sum + c.precio, 0);
    let totalFinal = orden.totalEntradas + totalCombos;

    let listaCombosHtml = combosElegidos.length === 0 ? '<p>Sin extras seleccionados</p>' : '<ul style="padding-left: 20px; margin: 5px 0;">';
    combosElegidos.forEach((c, index) => {
        listaCombosHtml += `<li>${c.nombre} - $${c.precio} <button onclick="quitarProducto(${index})" style="background: #e74c3c; color: #fff; border: none; padding: 2px 6px; border-radius: 4px; cursor: pointer; margin-left: 5px; font-size: 11px;">X Quitar</button></li>`;
    });
    if (combosElegidos.length > 0) listaCombosHtml += '</ul>';

    box.innerHTML = `
        <p><strong>Pelicula:</strong> ${orden.pelicula}</p>
        <p><strong>Butacas:</strong> ${orden.butacas.join(', ') || 'Ninguna'}</p>
        <p><strong>Subtotal Entradas:</strong> $${orden.totalEntradas}</p>
        <hr style="border-color: rgba(255,255,255,0.1)">
        <p><strong>CandyStore:</strong></p>
        ${listaCombosHtml}
        <h4 style="margin-top: 15px;">Total a Pagar: <span class="icon-accent">$${totalFinal}</span></h4>
    `;
}

function agregarProducto(nombre, precio) {
    combosElegidos.push({ nombre, precio });
    renderResumen();
}

function quitarProducto(index) {
    combosElegidos.splice(index, 1);
    renderResumen();
}

function irAlPago() {
    let totalCombos = combosElegidos.reduce((sum, c) => sum + c.precio, 0);
    orden.combos = combosElegidos;
    orden.totalFinal = orden.totalEntradas + totalCombos;
    localStorage.setItem('ordenActual', JSON.stringify(orden));
    window.location.href = 'pago.html';
}

document.addEventListener('DOMContentLoaded', () => {
    renderCandyStore();
    renderResumen();
});