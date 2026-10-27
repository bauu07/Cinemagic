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
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Pago realizado con exito! Tu ticket ha sido generado.');
            localStorage.removeItem('ordenActual');
            localStorage.removeItem('peliculaSeleccionada');
            window.location.href = '/Cinemagic/index.html';
        });
    }
});