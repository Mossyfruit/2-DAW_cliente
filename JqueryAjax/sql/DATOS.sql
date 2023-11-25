-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 14, 2023 at 12:37 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DATOS`
--

-- --------------------------------------------------------

--
-- Table structure for table `datos`
--

CREATE TABLE `datos` (
  `nombre` text COLLATE utf8_spanish2_ci NOT NULL,
  `edad` text COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `datos`
--

INSERT INTO `datos` (`nombre`, `edad`) VALUES
('Jose', '48'),
('Jota', '37'),
('fafadsfsa', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `valores`
--

CREATE TABLE `valores` (
  `valorX` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `valorY1` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `valorY2` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `valores`
--

INSERT INTO `valores` (`valorX`, `valorY1`, `valorY2`) VALUES
('93', '24', '35'),
('27', '32', '60'),
('46', '40', '37'),
('94', '30', '50'),
('96', '47', '52'),
('100', '100', '100');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
