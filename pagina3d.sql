-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 19, 2024 at 11:24 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pagina3d`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`, `img_id`) VALUES
(11, 'Nuevos accesorios para optimizar tus impresiones 3D', 'Hemos ampliado nuestro catálogo con herramientas y accesorios que harán tus impresiones más fáciles y precisas. Desde adhesivos para mejorar la adherencia en la base, hasta kits de limpieza para mantener tus boquillas en perfecto estado. Además, contamos con soportes para filamentos y plataformas magnéticas. ¡Todo lo que necesitas para un flujo de trabajo profesional al alcance de tu mano!', 'w2aqzewooc41yd5yb1pe'),
(10, 'Promoción especial: filamentos premium a precios increíbles', '¡Por tiempo limitado! Consigue filamentos premium de las marcas más reconocidas con descuentos de hasta el 20%. Disponibles en PLA, ABS y PETG, en una amplia gama de colores y acabados. No pierdas la oportunidad de abastecerte con los mejores materiales para tus proyectos. ¡Haz tu pedido ahora antes de que se agoten!', ''),
(9, 'Presentamos la nueva impresora 3D de última generación: rapidez y precisión', '¿Buscas llevar tus proyectos al siguiente nivel? Hemos incorporado a nuestro catálogo la nueva impresora 3D X-Pro MAX, una máquina que combina velocidad, precisión y facilidad de uso. Ideal para profesionales y aficionados, cuenta con una amplia base de impresión y tecnología avanzada para filamentos múltiples. ¡Descubre todo lo que puedes crear con esta potente herramienta!', 'yrhoy91fwoedh0d0kqgg'),
(8, '¡Nuevos filamentos biodegradables disponibles en nuestra tienda!', 'Nos complace anunciar que ahora contamos con una nueva línea de filamentos biodegradables para tus proyectos de impresión 3D. Fabricados con materiales sostenibles, estos filamentos no solo garantizan una excelente calidad, sino que también ayudan a cuidar el medio ambiente. Disponibles en colores vibrantes y con distintas propiedades, como flexibilidad y resistencia al calor. ¡Haz tu impresión más ecológica hoy mismo!', 'cr1yqblkuzzprny82c89');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(128) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(1, 'Sebastian', '25d55ad283aa400af464c76d713c07ad');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
