<?php
include 'conexion.php';

$mensaje_exito = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_tarjeta = $_POST['card_name'] ?? '';
    $numero_tarjeta = $_POST['card_number'] ?? '';
    
    $mensaje_exito = "¡Pago procesado con exito para " . htmlspecialchars($nombre_tarjeta) . "!";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMagic - Formulario de Pago</title>
    <link rel="icon" type="image/png" href="imagenes/Cnlogo.png">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="pago.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="auth-body">

    <header class="main-header">
        <div class="logo-area" style="display: flex; align-items: center; gap: 10px;">
            <img src="imagenes/Cnlogo.png" class="logo-circular" alt="Logo CineMagic">
            <h1><a href="index.html" style="color: inherit; text-decoration: none;">🎬 Cine<span>Magic</span></a></h1>
        </div>
        <a href="combos.html" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Volver a Combos</a>
    </header>

    <main class="auth-container">
        <div class="auth-card" style="max-width: 500px; padding: 30px;">
            <div class="form-header">
                <h2><i class="fa-solid fa-credit-card icon-accent"></i> Finalizar Compra</h2>
                <p>Ingresa los datos de tu tarjeta para confirmar tus entradas</p>
            </div>

            <?php if (!empty($mensaje_exito)): ?>
                <div style="background: rgba(46, 204, 113, 0.2); border: 1px solid #2ecc71; padding: 10px; border-radius: 6px; margin-bottom: 15px; text-align: center; color: #2ecc71;">
                    <?php echo $mensaje_exito; ?>
                </div>
            <?php endif; ?>

            <div id="checkout-info" class="checkout-info-box">
                <!-- Se llena con JS -->
            </div>

            <form id="payment-form" method="POST" action="pago.php">
                <div class="input-group">
                    <label><i class="fa-solid fa-user"></i> Nombre en la Tarjeta</label>
                    <input type="text" id="card-name" name="card_name" placeholder="JUAN PEREZ" required>
                </div>

                <div class="input-group">
                    <label><i class="fa-solid fa-credit-card"></i> Numero de Tarjeta</label>
                    <input type="text" id="card-number" name="card_number" placeholder="•••• •••• •••• ••••" maxlength="19" required>
                </div>

                <div style="display: flex; gap: 15px;">
                    <div class="input-group" style="flex: 1;">
                        <label>Vencimiento</label>
                        <input type="text" id="card-exp" placeholder="MM/AA" maxlength="5" required>
                    </div>
                    <div class="input-group" style="flex: 1;">
                        <label>CVV / CVC</label>
                        <input type="password" id="card-cvv" placeholder="123" maxlength="4" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary btn-block">
                    <i class="fa-solid fa-check-circle"></i> Confirmar y Pagar
                </button>
            </form>
        </div>
    </main>

    <script src="pago.js"></script>
</body>
</html>