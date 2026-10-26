-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2026 a las 02:12:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cinemagic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `butacas`
--

CREATE TABLE `butacas` (
  `id_butaca` int(11) NOT NULL,
  `id_sala` int(11) NOT NULL,
  `fila` char(1) NOT NULL,
  `numero` tinyint(3) UNSIGNED NOT NULL,
  `tipo` enum('Standard','D-BOX') NOT NULL DEFAULT 'Standard'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `butacas`
--

INSERT INTO `butacas` (`id_butaca`, `id_sala`, `fila`, `numero`, `tipo`) VALUES
(1, 2, 'A', 1, 'D-BOX'),
(2, 2, 'A', 2, 'D-BOX'),
(3, 2, 'A', 3, 'D-BOX'),
(4, 2, 'A', 4, 'D-BOX'),
(5, 2, 'B', 1, 'D-BOX'),
(6, 2, 'B', 2, 'D-BOX'),
(7, 2, 'B', 3, 'D-BOX'),
(8, 2, 'B', 4, 'D-BOX'),
(9, 2, 'C', 1, 'D-BOX'),
(10, 2, 'C', 2, 'D-BOX'),
(11, 2, 'C', 3, 'D-BOX'),
(12, 2, 'C', 4, 'D-BOX'),
(13, 2, 'D', 1, 'D-BOX'),
(14, 2, 'D', 2, 'D-BOX'),
(15, 2, 'D', 3, 'D-BOX'),
(16, 2, 'D', 4, 'D-BOX'),
(17, 2, 'E', 1, 'D-BOX'),
(18, 2, 'E', 2, 'D-BOX'),
(19, 2, 'E', 3, 'D-BOX'),
(20, 2, 'E', 4, 'D-BOX'),
(21, 2, 'F', 1, 'D-BOX'),
(22, 2, 'F', 2, 'D-BOX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id_genero` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `nombre`) VALUES
(1, 'Acción'),
(2, 'Ciencia Ficción'),
(5, 'Drama'),
(3, 'Familia'),
(4, 'Terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL,
  `hora` time NOT NULL,
  `formato` enum('2D','3D','D-BOX') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id_horario`, `id_pelicula`, `hora`, `formato`) VALUES
(1, 11, '16:30:00', '2D'),
(2, 11, '19:15:00', '3D'),
(3, 11, '22:00:00', 'D-BOX'),
(4, 9, '17:00:00', '2D'),
(5, 9, '20:30:00', 'D-BOX'),
(6, 10, '18:00:00', '2D'),
(7, 10, '21:00:00', '3D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id_pelicula` int(11) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `sinopsis` text DEFAULT NULL,
  `duracion_min` smallint(5) UNSIGNED NOT NULL,
  `calificacion` decimal(2,1) DEFAULT NULL,
  `id_genero` int(11) NOT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `es_estreno` tinyint(1) NOT NULL DEFAULT 0,
  `en_cartelera` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `sinopsis`, `duracion_min`, `calificacion`, `id_genero`, `imagen_url`, `es_estreno`, `en_cartelera`) VALUES
(1, 'Interstellar', 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.', 169, 9.0, 2, NULL, 0, 1),
(2, 'The Dark Knight', 'Batman se enfrenta al Joker, un criminal que sume a Gotham en el caos.', 152, 9.5, 1, NULL, 0, 1),
(3, 'Spider-Man: Across the Spider-Verse', 'Miles Morales viaja por el multiverso y conoce a un equipo de Spider-People.', 140, 8.9, 3, NULL, 0, 1),
(4, 'Oppenheimer', 'La historia del físico J. Robert Oppenheimer y la creación de la bomba atómica.', 180, 8.9, 5, NULL, 0, 1),
(5, 'Inside Out 2', 'Riley entra en la adolescencia y llegan nuevas emociones a su mente.', 96, 8.7, 3, NULL, 0, 1),
(6, 'Gladiator II', 'Un nuevo guerrero lucha por su destino en la arena de Roma.', 148, 8.2, 1, NULL, 0, 1),
(7, 'Avatar: The Way of Water', 'Jake Sully y su familia recorren los océanos de Pandora.', 192, 8.0, 2, NULL, 0, 1),
(8, 'A Quiet Place: Day One', 'El primer día de la invasión de criaturas que cazan por el sonido.', 99, 7.8, 4, NULL, 0, 1),
(9, 'Dune: Parte Dos', 'Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.', 166, 9.2, 2, NULL, 1, 0),
(10, 'Godzilla x Kong', 'Dos antiguos titanes, Godzilla y Kong, se enfrentan en una batalla colosal mientras los humanos descubren sus orígenes.', 115, 8.5, 1, NULL, 1, 0),
(11, 'Alien: Romulus', 'Jóvenes en un mundo lejano se enfrentan a la forma de vida más aterradora del universo.', 119, 8.8, 4, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promos_combos`
--

CREATE TABLE `promos_combos` (
  `id_promo` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `tipo` enum('promo','combo') NOT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `descuento_pct` tinyint(3) UNSIGNED DEFAULT NULL,
  `imagen_url` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `promos_combos`
--

INSERT INTO `promos_combos` (`id_promo`, `nombre`, `descripcion`, `tipo`, `precio`, `descuento_pct`, `imagen_url`, `activo`) VALUES
(1, 'Combo Clásico', 'Pochoclos grandes + 2 gaseosas', 'combo', 8500.00, NULL, NULL, 1),
(2, 'Combo Pareja', 'Pochoclos grandes + 2 gaseosas + 2 golosinas', 'combo', 11000.00, NULL, NULL, 1),
(3, 'Miércoles 2x1', '2x1 en entradas todos los miércoles', 'promo', NULL, 50, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id_sala` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `tipo` enum('Standard','D-BOX') NOT NULL DEFAULT 'Standard'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salas`
--

INSERT INTO `salas` (`id_sala`, `nombre`, `tipo`) VALUES
(1, 'Sala 1', 'Standard'),
(2, 'Sala D-BOX', 'D-BOX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` enum('cliente','admin') NOT NULL DEFAULT 'cliente',
  `fecha_alta` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `contrasena`, `rol`, `fecha_alta`) VALUES
(1, 'Admin', 'CineMagic', 'admin@cinemagic.com', 'CAMBIAR_POR_HASH', 'admin', '2026-10-19 20:51:05');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `butacas`
--
ALTER TABLE `butacas`
  ADD PRIMARY KEY (`id_butaca`),
  ADD UNIQUE KEY `id_sala` (`id_sala`,`fila`,`numero`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id_genero`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`),
  ADD KEY `id_pelicula` (`id_pelicula`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id_pelicula`),
  ADD KEY `id_genero` (`id_genero`);

--
-- Indices de la tabla `promos_combos`
--
ALTER TABLE `promos_combos`
  ADD PRIMARY KEY (`id_promo`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id_sala`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `butacas`
--
ALTER TABLE `butacas`
  MODIFY `id_butaca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id_genero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id_pelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `promos_combos`
--
ALTER TABLE `promos_combos`
  MODIFY `id_promo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `salas`
--
ALTER TABLE `salas`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `butacas`
--
ALTER TABLE `butacas`
  ADD CONSTRAINT `butacas_ibfk_1` FOREIGN KEY (`id_sala`) REFERENCES `salas` (`id_sala`) ON DELETE CASCADE;

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id_pelicula`) ON DELETE CASCADE;

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
