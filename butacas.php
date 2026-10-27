<?php
include 'conexion.php';

$id_sala = isset($_GET['sala']) ? intval($_GET['sala']) : 2;

$stmt = $pdo->prepare("SELECT * FROM butacas WHERE id_sala = ?");
$stmt->execute([$id_sala]);
$lista_butacas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMagic - Seleccionar Butacas</title>
    <link rel="icon" type="image/png" href="imagenes/Cnlogo.png">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="butacas.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <header class="main-header">
        <div class="logo-area" style="display: flex; align-items: center; gap: 10px;">
            <img src="imagenes/Cnlogo.png" class="logo-circular" alt="Logo CineMagic">
            <h1><a href="index.html" style="color: inherit; text-decoration: none;">🎬 Cine<span>Magic</span></a></h1>
        </div>
        <a href="index.html" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Cambiar Pelicula</a>
    </header>

    <main class="contenedor">
        <div class="seating-container">
            <h2>Elige tus Asientos - <span id="movie-title" class="icon-accent">Cargando...</span></h2>
            <p>Horario: <strong id="movie-time">--:--</strong> | Valor por Entrada: $<span id="ticket-price">0</span></p>

            <div class="screen-container">
                <div class="screen">PANTALLA</div>
            </div>

            <div class="seat-legend">
                <span><i class="seat-sample available"></i> Disponible</span>
                <span><i class="seat-sample selected"></i> Tu Seleccion</span>
                <span><i class="seat-sample occupied"></i> Ocupado</span>
            </div>

            <div id="seats-grid" class="seats-grid">
                <?php foreach ($lista_butacas as $b): ?>
                    <div class="seat available" 
                         data-id="<?php echo $b['id_butaca']; ?>" 
                         data-fila="<?php echo $b['fila']; ?>" 
                         data-numero="<?php echo $b['numero']; ?>">
                        <?php echo $b['fila'] . $b['numero']; ?>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="seating-summary">
                <div>
                    <p>Entradas: <strong id="selected-seats-count">0</strong></p>
                    <p>Total Entradas: <strong id="selected-seats-total" class="icon-accent">$0</strong></p>
                </div>
                <button id="btn-confirm" class="btn btn-primary" disabled onclick="confirmarButacas()">
                    Siguiente: CandyStore / Combos <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </main>

    <script src="butacas.js"></script>
</body>
</html>