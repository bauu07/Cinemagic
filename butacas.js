let peliData = JSON.parse(localStorage.getItem('peliculaSeleccionada')) || { titulo: 'Backrooms', horario: '22:00 D-BOX', precio: 4500 };
let selectedSeats = [];

document.getElementById('movie-title').textContent = peliData.titulo;
document.getElementById('movie-time').textContent = peliData.horario;
document.getElementById('ticket-price').textContent = peliData.precio;

function renderGrid() {
    const grid = document.getElementById('seats-grid');
    grid.innerHTML = '';
    const occupied = [3, 7, 12, 18, 19];

    for (let i = 1; i <= 32; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i;

        if (occupied.includes(i)) {
            seat.classList.add('occupied');
        } else {
            seat.addEventListener('click', () => {
                if (seat.classList.contains('selected')) {
                    seat.classList.remove('selected');
                    selectedSeats = selectedSeats.filter(s => s !== i);
                } else {
                    seat.classList.add('selected');
                    selectedSeats.push(i);
                }
                actualizarResumen();
            });
        }
        grid.appendChild(seat);
    }
}

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
        butacas: selectedSeats,
        totalEntradas: selectedSeats.length * peliData.precio
    };
    localStorage.setItem('ordenActual', JSON.stringify(orden));
    window.location.href = 'combos.html';
}

document.addEventListener('DOMContentLoaded', renderGrid);