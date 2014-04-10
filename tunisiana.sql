-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 10 Avril 2014 à 05:52
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `tunisiana`
--

-- --------------------------------------------------------

--
-- Structure de la table `cadeaux`
--

CREATE TABLE IF NOT EXISTS `cadeaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `cnt` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `cadeaux`
--

INSERT INTO `cadeaux` (`id`, `description`, `date`, `cnt`) VALUES
(1, '2 DT', '2014-04-09', 30),
(2, '3 DT', '2014-04-09', 10),
(3, '5 DT', '2014-04-09', 10),
(4, '2 DT', '2014-04-10', 28),
(5, '3 DT', '2014-04-10', 10),
(6, '5 DT', '2014-04-10', 10),
(7, '2 DT', '2014-04-11', 30),
(8, '3 DT', '2014-04-11', 10),
(9, '5 DT', '2014-04-11', 10),
(10, '2 DT', '2014-04-12', 30),
(11, '3 DT', '2014-04-12', 10),
(12, '5 DT', '2014-04-12', 10),
(13, '2 DT', '2014-04-13', 30),
(14, '3 DT', '2014-04-13', 10),
(15, '5 DT', '2014-04-13', 10);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
