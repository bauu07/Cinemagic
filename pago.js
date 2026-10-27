document.addEventListener('DOMContentLoaded', () => {
    const orden = JSON.parse(localStorage.getItem('ordenActual')) || { pelicula: 'Ninguna', totalFinal: 0 };
    const checkoutInfo = document.getElementById('checkout-info');

    if (checkoutInfo) {
        checkoutInfo.innerHTML = `
            <p><strong>Pelicula:</strong> ${orden.pelicula}</p>
            <p><strong>Butacas:</strong> ${orden.butacas ? orden.butacas.join(', ') : 'Ninguna'}</p>
            <h3>Monto Total: $${orden.totalFinal || 0}</h3>
        `;
    }

    const paymentForm = document.getElementById('payment-form');
    if (!paymentForm) return;

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Marcar las butacas como ocupadas para esa funcion
        if (orden.butacas && orden.butacas.length > 0) {
            const clave = 'ocupadas:' + orden.pelicula + '|' + orden.horario;
            let ocupadas = [];
            try { ocupadas = JSON.parse(localStorage.getItem(clave)) || []; } catch (err) { ocupadas = []; }
            localStorage.setItem(clave, JSON.stringify(ocupadas.concat(orden.butacas)));
        }

        const codigo = 'CM-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        const combos = orden.combos && orden.combos.length > 0
            ? orden.combos.map(c => `<li>${c.nombre} - $${c.precio}</li>`).join('')
            : '<li>Sin extras</li>';

        // Ticket (los datos de la tarjeta no se guardan en ningun lado)
        document.querySelector('.auth-card').innerHTML = `
            <div class="form-header">
                <h2><i class="fa-solid fa-circle-check icon-accent"></i> Pago realizado con exito</h2>
                <p>Este es tu ticket. Mostralo en la entrada del cine.</p>
            </div>
            <div class="checkout-info-box">
                <p><strong>Codigo:</strong> ${codigo}</p>
                <p><strong>Pelicula:</strong> ${orden.pelicula}</p>
                <p><strong>Horario:</strong> ${orden.horario || '-'}</p>
                <p><strong>Butacas:</strong> ${orden.butacas ? orden.butacas.join(', ') : 'Ninguna'}</p>
                <p><strong>CandyStore:</strong></p>
                <ul style="padding-left: 20px; margin: 5px 0 10px 0; color: #ccc;">${combos}</ul>
                <h3>Total pagado: $${orden.totalFinal || 0}</h3>
            </div>
            <a href="index.html" class="btn btn-primary btn-block">Volver al Inicio</a>
        `;

        localStorage.removeItem('ordenActual');
        localStorage.removeItem('peliculaSeleccionada');
    });
});