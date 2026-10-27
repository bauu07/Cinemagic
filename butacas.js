let peliData = JSON.parse(localStorage.getItem('peliculaSeleccionada')) || { titulo: 'Backrooms', horario: '22:00 D-BOX', precio: 4500 };
let selectedSeats = [];

// Sala: 6 filas (A-F) de 4 butacas
const FILAS = ['A', 'B', 'C', 'D', 'E', 'F'];
const BUTACAS_POR_FILA = 4;
// Butacas que figuran ocupadas de entrada (de ejemplo)
const OCUPADAS_BASE = ['A2', 'C3', 'D1', 'F4'];

function claveOcupadas() {
    return 'ocupadas:' + peliData.titulo + '|' + peliData.horario;
}

function obtenerOcupadas() {
    let guardadas = [];
    try {
        guardadas = JSON.parse(localStorage.getItem(claveOcupadas())) || [];
    } catch (e) {
        guardadas = [];
    }
    return OCUPADAS_BASE.concat(guardadas);
}

function dibujarButacas() {
    const grid = document.getElementById('seats-grid');
    const ocupadas = obtenerOcupadas();
    let html = '';
    FILAS.forEach(fila => {
        for (let n = 1; n <= BUTACAS_POR_FILA; n++) {
            const id = fila + n;
            const clase = ocupadas.includes(id) ? 'seat occupied' : 'seat available';
            html += `<div class="${clase}" data-id="${id}" data-fila="${fila}" data-numero="${n}">${id}</div>`;
        }
    });
    grid.innerHTML = html;
}

document.getElementById('movie-title').textContent = peliData.titulo;
document.getElementById('movie-time').textContent = peliData.horario;
document.getElementById('ticket-price').textContent = peliData.precio;

document.addEventListener('DOMContentLoaded', () => {
    dibujarButacas();
    const seats = document.querySelectorAll('.seat:not(.occupied)');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const seatId = seat.getAttribute('data-id');
            const seatName = seat.textContent.trim();

            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                selectedSeats = selectedSeats.filter(s => s.id !== seatId);
            } else {
                seat.classList.add('selected');
                selectedSeats.push({ id: seatId, nombre: seatName });
            }
            actualizarResumen();
        });
    });
});

function actualizarResumen() {
    const count = selectedSeats.length;
    document.getElementById('selected-seats-count').textContent = count;
    document.getElementById('selected-seats-total').textContent = `$${count * peliData.precio}`;
    document.getElementById('btn-confirm').disabled = count === 0;
}

function confirmarButacas() {
    const orden = {
        pelicula: peliData.titulo,
        horario: peliData.horario,
        butacas: selectedSeats.map(s => s.nombre),
        idsButacas: selectedSeats.map(s => s.id),
        totalEntradas: selectedSeats.length * peliData.precio
    };
    localStorage.setItem('ordenActual', JSON.stringify(orden));
    window.location.href = 'combos.html';
}