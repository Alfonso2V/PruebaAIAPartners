-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 00:30:42
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo_transportes`
--

CREATE TABLE `catalogo_transportes` (
  `idTransporte` int(255) NOT NULL,
  `transporte` varchar(25) NOT NULL,
  `fecha_registro` date NOT NULL,
  `activo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `catalogo_transportes`
--

INSERT INTO `catalogo_transportes` (`idTransporte`, `transporte`, `fecha_registro`, `activo`) VALUES
(1, 'aereo', '2023-07-07', 1),
(2, 'marino', '2023-07-07', 1),
(3, 'terrestre', '2023-07-07', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detenvios`
--

CREATE TABLE `detenvios` (
  `idEnvio` int(255) NOT NULL,
  `nombre_paquete` varchar(255) NOT NULL,
  `fecha_envio` date NOT NULL,
  `status` varchar(20) NOT NULL,
  `idTipoTransporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `detenvios`
--

INSERT INTO `detenvios` (`idEnvio`, `nombre_paquete`, `fecha_envio`, `status`, `idTipoTransporte`) VALUES
(2, 'Pinzas', '2023-07-07', 'Perdido', 2),
(4, 'Pelucas', '2023-07-07', 'Entregado', 2),
(7, 'Mantas', '2023-07-07', 'Enviado', 2),
(9, 'Plantas', '2023-07-07', 'En camino', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogo_transportes`
--
ALTER TABLE `catalogo_transportes`
  ADD PRIMARY KEY (`idTransporte`);

--
-- Indices de la tabla `detenvios`
--
ALTER TABLE `detenvios`
  ADD PRIMARY KEY (`idEnvio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogo_transportes`
--
ALTER TABLE `catalogo_transportes`
  MODIFY `idTransporte` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detenvios`
--
ALTER TABLE `detenvios`
  MODIFY `idEnvio` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
