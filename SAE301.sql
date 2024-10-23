-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- HÃ´te : localhost
-- GÃ©nÃ©rÃ© le : mer. 23 oct. 2024 Ã  13:45
-- Version du serveur : 10.11.6-MariaDB-0+deb12u1
-- Version de PHP : 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de donnÃ©es : `valin6`
--

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Category`
--

INSERT INTO `Category` (`id`, `name`, `image`) VALUES
(1, 'DÃ©coration', 'decorations.webp'),
(2, 'Outil', 'outils.webp'),
(3, 'Entretien', 'entretien.webp');

-- --------------------------------------------------------

--
-- Structure de la table `Option`
--

CREATE TABLE `Option` (
  `id_option` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `image` varchar(500) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Option`
--

INSERT INTO `Option` (`id_option`, `name`, `image`, `category`) VALUES
(1, 'noel', 'noel.webp', 1),
(2, 'Halloween', 'halloween.webp', 1),
(3, 'Anniversaire', 'birthday.webp', 1),
(4, 'Bricolage', 'bricolage.jpg', 2),
(5, 'Jardinage', 'jardinage.webp', 2),
(6, 'NumÃ©rique', 'numerique.webp', 2),
(7, 'BeautÃ©', 'beaute.jpg', 3),
(8, 'Menager', 'menager.webp', 3),
(9, 'Animal', 'animal.webp', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Panier`
--

CREATE TABLE `Panier` (
  `id_panier` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Panier`
--

INSERT INTO `Panier` (`id_panier`, `id_product`, `number`, `price`) VALUES
(2, 4, 1, 27),
(3, 6, 3, 99);

-- --------------------------------------------------------

--
-- Structure de la table `Product`
--

CREATE TABLE `Product` (
  `id_product` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `category` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `description` varchar(500) NOT NULL,
  `subtitle` varchar(150) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Product`
--

INSERT INTO `Product` (`id_product`, `name`, `category`, `image`, `description`, `subtitle`, `price`) VALUES
(1, 'Product D', 1, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 10),
(2, 'Product E', 1, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 25),
(3, 'Product F', 1, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 50),
(4, 'Product G', 2, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 27),
(5, 'Product H', 2, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 88),
(6, 'Product I', 2, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 99),
(7, 'Product J', 3, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 55),
(8, 'Product K', 3, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 55),
(9, 'Product L', 3, 'chaise.webp', 'Installez-vous confortablement sur le fauteuil gaming CORSAIR TC100 RELAXED - Tissu. Son revetement extÃ©rieur rembourrÃ© garantit un confort et une fraÃ®cheur sans compromis pour toutes vos parties. Le support lombaire ajustable et le coussin repose-nuque dÃ©tachable en mousse a mÃ©moire de forme inclus.', 'chaise gaming', 4);

-- --------------------------------------------------------

--
-- Structure de la table `Product_Option`
--

CREATE TABLE `Product_Option` (
  `id_product_option` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_option` int(11) NOT NULL,
  `name_option` varchar(256) NOT NULL,
  `name_product` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Product_Option`
--

INSERT INTO `Product_Option` (`id_product_option`, `id_product`, `id_option`, `name_option`, `name_product`) VALUES
(3, 1, 1, 'noel', 'Product D'),
(4, 2, 2, 'Halloween', 'Product E'),
(5, 3, 3, 'Anniversaire', 'Product F'),
(6, 4, 4, 'Bricolage', 'Product G'),
(7, 5, 5, 'Jardinage', 'Product H'),
(8, 6, 6, 'NumÃ©rique', 'Product I'),
(9, 7, 7, 'BeautÃ©', 'Product J'),
(10, 8, 8, 'Menager', 'Product K'),
(11, 9, 9, 'Animal', 'Product L'),
(19, 1, 2, 'Halloween', 'Product D');

--
-- Index pour les tables dÃ©chargÃ©es
--

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Option`
--
ALTER TABLE `Option`
  ADD PRIMARY KEY (`id_option`),
  ADD KEY `id_category` (`category`);

--
-- Index pour la table `Panier`
--
ALTER TABLE `Panier`
  ADD PRIMARY KEY (`id_panier`),
  ADD KEY `id_product` (`id_product`);

--
-- Index pour la table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `category` (`category`);

--
-- Index pour la table `Product_Option`
--
ALTER TABLE `Product_Option`
  ADD PRIMARY KEY (`id_product_option`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_option` (`id_option`);

--
-- AUTO_INCREMENT pour les tables dÃ©chargÃ©es
--

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Option`
--
ALTER TABLE `Option`
  MODIFY `id_option` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `Panier`
--
ALTER TABLE `Panier`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Product`
--
ALTER TABLE `Product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `Product_Option`
--
ALTER TABLE `Product_Option`
  MODIFY `id_product_option` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Contraintes pour les tables dÃ©chargÃ©es
--

--
-- Contraintes pour la table `Option`
--
ALTER TABLE `Option`
  ADD CONSTRAINT `fk_option_category` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Panier`
--
ALTER TABLE `Panier`
  ADD CONSTRAINT `Panier_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `Product` (`id_product`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Product_Option`
--
ALTER TABLE `Product_Option`
  ADD CONSTRAINT `Product_Option_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `Product` (`id_product`) ON DELETE CASCADE,
  ADD CONSTRAINT `Product_Option_ibfk_2` FOREIGN KEY (`id_option`) REFERENCES `Option` (`id_option`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
