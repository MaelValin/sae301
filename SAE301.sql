-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- HÃ´te : localhost
-- GÃ©nÃ©rÃ© le : ven. 25 oct. 2024 Ã  01:29
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
  `price` int(11) NOT NULL,
  `idProfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(14, 'Sapin de Noel LED', 1, 'sapin-noel.jpg', 'Ce magnifique sapin de Noel artificiel est orne de lumieres LED integrees, offrant une ambiance festive et chaleureuse a votre interieur. Facile a monter et durable, il s integre parfaitement a toute decoration de fete.', 'Sapin de Noel lumineux', 120),
(15, 'Citrouille decorative Halloween', 1, 'citrouille-deco.jpg', 'Cette citrouille en resine est parfaite pour decorer votre maison pour Halloween. Avec son design realiste et ses details effrayants, elle ajoutera une touche effrayante a vos festivites.', 'Citrouille effrayante', 25),
(16, 'Ballons d Anniversaire Multicolores', 1, 'ballons-anniv.webp', 'Lot de ballons multicolores pour celebrer vos moments festifs. Ideal pour les anniversaires et autres evenements speciaux, ces ballons ajouteront de la gaiete a toute celebration.', 'Ballons de fete', 15),
(17, 'Kit Bricolage Junior', 2, 'kit-brico-junio.jpeg', 'Ce kit de bricolage pour enfants contient tout le necessaire pour realiser des projets creatifs. Parfait pour initier les plus jeunes a l artisanat et au travail manuel.', 'Kit de bricolage pour enfants', 30),
(18, 'Tondeuse a Gazon', 2, 'tondeuse-gazon.jpg', 'Cette tondeuse a gazon electrique est legere et facile a manoeuvrer, ideale pour entretenir votre jardin. Elle est equipee d une lame en acier pour une coupe nette et precise.', 'Tondeuse electrique', 150),
(19, 'Ordinateur Portable', 2, 'ordinateur.jpeg', 'Ordinateur portable puissant avec un ecran Full HD de 15 pouces, parfait pour le travail et les loisirs. Processeur rapide et grande capacite de stockage.', 'Ordinateur portable 15 pouces', 800),
(20, 'Serum Anti-Age', 3, 'serum-anti-age.webp', 'Ce serum anti-age hydrate en profondeur et reduit l apparence des rides et ridules. Sa formule legere penetre rapidement pour laisser la peau douce et eclatante.', 'Serum hydratant anti-rides', 60),
(21, 'Aspirateur Robot', 3, 'aspirateur-robot.jpg', 'Aspirateur robot intelligent, parfait pour maintenir votre maison propre sans effort. Il nettoie automatiquement tous les types de sols, y compris les tapis et les parquets.', 'Aspirateur automatique', 300),
(22, 'Arbre a Chat', 3, 'arbre-chat.webp', 'Cet arbre a chat offre un espace de jeu et de repos pour votre compagnon felin. Equipe de plusieurs niveaux et de poteaux a griffer, il est parfait pour divertir et satisfaire les instincts naturels de votre chat.', 'Arbre a chat multifonction', 90),
(23, 'Guirlande de Noel Lumineuse', 1, 'girlande-noel.webp', 'Cette guirlande lumineuse de Noel ajoutera une touche feerique a vos decorations de fete. Les ampoules LED offrent une lumiere chaude et brillante, ideale pour l interieur et l exterieur.', 'Guirlande de Noel LED', 35),
(24, 'Deguisement de Sorciere', 1, 'deguisement-sorciere.jpg', 'Ce deguisement de sorciere pour Halloween est compose d une robe noire avec un chapeau assorti. Parfait pour les soirees costumees et les fetes d Halloween.', 'Costume de sorciere', 45),
(25, 'Banderole Anniversaire Joyeux', 1, 'girlande-anniv.jpg', 'Cette banderole d anniversaire \"Joyeux Anniversaire\" en lettres dorees est ideale pour decorer vos fetes et apporter une touche elegante a votre evenement.', 'Banderole festive', 10),
(26, 'Perceuse Sans Fil', 2, 'perceuse-visseuse.jpg', 'Perceuse sans fil legere et puissante, ideale pour tous vos travaux de bricolage. Elle est livree avec deux batteries rechargeables pour une autonomie prolongee.', 'Perceuse rechargeable', 120),
(27, 'Tuyau d arrosage extensible', 2, 'tuyau-arrosage.jpg', 'Tuyau d arrosage extensible pouvant atteindre jusqu a 15 metres. Il est leger et facile a ranger, parfait pour l arrosage de votre jardin ou de votre pelouse.', 'Tuyau d arrosage leger', 40),
(28, 'Smartphone 5G', 2, 'smartphone.png', 'Smartphone 5G ultra-rapide avec un ecran OLED de 6,5 pouces et un appareil photo de 64 MP. Parfait pour capturer des moments inoubliables et profiter d une navigation fluide.', 'Smartphone avec ecran OLED', 700),
(29, 'Creme hydratante visage', 3, 'creme-hydra.avif', 'Creme hydratante visage a base d ingredients naturels. Elle nourrit la peau en profondeur et lui redonne eclat et souplesse.', 'Creme visage naturelle', 25),
(30, 'Balai vapeur multifonction', 3, 'balai-vapeur.jpg', 'Ce balai vapeur nettoie et desinfecte tous types de sols sans utiliser de produits chimiques. Son systeme a vapeur elimine les taches et les bacteries efficacement.', 'Nettoyeur vapeur pour sols', 150),
(31, 'Niche pour chien en bois', 3, 'niche.webp', 'Niche pour chien en bois massif, resistante aux intemperies. Elle offre un abri confortable et securise pour votre animal de compagnie.', 'Niche exterieure en bois', 200),
(32, 'Boules de Noel en verre', 1, 'boule-noel.jpeg', 'Lot de boules de Noel en verre, elegantement decorees pour embellir votre sapin de Noel. Disponibles en plusieurs couleurs, elles ajouteront une touche de sophistication a votre decoration.', 'Boules de Noel elegantes', 30),
(33, 'Fantome gonflable lumineux', 1, 'fantome-gonflabe.jpeg', 'Ce fantome gonflable lumineux est parfait pour decorer votre jardin pendant Halloween. Il s eclaire automatiquement la nuit et cree une atmosphere effrayante.', 'Decoration d Halloween gonflable', 50),
(34, 'Gateau d anniversaire factice', 1, 'gateau-fact.jpeg', 'Ce gateau factice realiste est ideal pour les decorations de fete ou comme accessoire de photo pour un anniversaire. Il est fait de materiaux durables pour une utilisation repetee.', 'Gateau d anniversaire decoratif', 20),
(35, 'Tournevis electrique', 2, 'tournevis elect.jpg', 'Tournevis electrique compact, ideal pour monter et demonter des meubles ou autres projets de bricolage. Il est livre avec plusieurs embouts interchangeables.', 'Tournevis sans fil', 40),
(36, 'Secateur de jardin ergonomique', 2, 'secateur.jpeg', 'Secateur de jardin ergonomique avec poignees confortables pour une coupe precise des plantes et arbustes. Lame en acier inoxydable pour une durabilite maximale.', 'Secateur de jardin', 25),
(37, 'Tablette numerique', 2, 'tablette.jpeg', 'Tablette numerique legere avec ecran tactile de 10 pouces, ideale pour naviguer sur Internet, regarder des films, ou utiliser des applications educatives.', 'Tablette tactile 10 pouces', 250),
(38, 'Masque hydratant pour le visage', 3, 'masquehydratant.jpeg', 'Masque hydratant pour le visage enrichi en vitamines. Il nourrit et revitalise la peau en profondeur pour un teint eclatant et une peau douce.', 'Masque hydratant', 10),
(39, 'Lave-linge intelligent', 3, 'lave-lingue.jpeg', 'Lave-linge intelligent avec plusieurs programmes de lavage et une fonction connectee qui vous permet de controler et surveiller vos lessives via une application mobile.', 'Lave-linge connecte', 500);

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
(19, 1, 2, 'Halloween', 'Product D'),
(20, 14, 1, 'noel', 'Sapin de Noel LED'),
(21, 15, 2, 'Halloween', 'Citrouille decorative Halloween'),
(22, 16, 3, 'Anniversaire', 'Ballons d Anniversaire Multicolores'),
(23, 17, 4, 'Bricolage', 'Kit Bricolage Junior'),
(24, 18, 5, 'Jardinage', 'Tondeuse a Gazon'),
(25, 19, 6, 'NumÃ©rique', 'Ordinateur Portable'),
(26, 20, 7, 'BeautÃ©', 'Serum Anti-Age'),
(27, 21, 8, 'Menager', 'Aspirateur Robot'),
(28, 22, 9, 'Animal', 'Arbre a Chat'),
(29, 23, 1, 'noel', 'Guirlande de Noel Lumineuse'),
(30, 24, 2, 'Halloween', 'Deguisement de Sorciere'),
(31, 25, 3, 'Anniversaire', 'Banderole Anniversaire Joyeux'),
(32, 26, 4, 'Bricolage', 'Perceuse Sans Fil'),
(33, 27, 5, 'Jardinage', 'Tuyau d arrosage extensible'),
(34, 28, 6, 'NumÃ©rique', 'Smartphone 5G'),
(35, 29, 7, 'BeautÃ©', 'Creme hydratante visage'),
(36, 30, 8, 'Menager', 'Balai vapeur multifonction'),
(37, 31, 9, 'Animal', 'Niche pour chien en bois'),
(38, 32, 1, 'noel', 'Boules de Noel en verre'),
(39, 33, 2, 'Halloween', 'Fantome gonflable lumineux'),
(40, 34, 3, 'Anniversaire', 'Gateau d anniversaire factice'),
(41, 35, 4, 'Bricolage', 'Tournevis electrique'),
(42, 36, 5, 'Jardinage', 'Secateur de jardin ergonomique'),
(43, 37, 6, 'NumÃ©rique', 'Tablette numerique'),
(44, 38, 7, 'BeautÃ©', 'Masque hydratant pour le visage'),
(45, 39, 8, 'Menager', 'Lave-linge intelligent');

-- --------------------------------------------------------

--
-- Structure de la table `Profil`
--

CREATE TABLE `Profil` (
  `idProfil` int(11) NOT NULL,
  `civilite` enum('Madame','Monsieur') NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password_hash` char(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- DÃ©chargement des donnÃ©es de la table `Profil`
--

INSERT INTO `Profil` (`idProfil`, `civilite`, `nom`, `prenom`, `mail`, `password_hash`) VALUES
(1, 'Madame', 'erg', 'reg', 'dgbÃ gmail.com', 'dfsfgbnsgn'),
(2, 'Madame', 'Valin', 'Mael', 'maelmy19@gmail.com', '$2y$10$WA7fg69/kzFxV89pceWI.e1Ac7zk/syUKmE6TyKedl2Ui1hbh5.jS'),
(3, 'Monsieur', 'Bouysse', 'Amandine', 'maelmy19@gmail.com', '$2y$10$n.DeB582VyCGdb8ACzmENej79/plBO5qoWcf5EGvKmJnyou7LwC2O'),
(4, 'Madame', 'Valin', 'Mael', 'maelmy19@gmail.com', '$2y$10$z./CXnGhfX1bjKEbn3Yvt.Av/UPVuT2awe4ms/qlwWHbPAKywyAka'),
(5, 'Monsieur', 'Valin', 'Mael', 'ma@gmail.com', '$2y$10$ImA7aJkHwjclIx0VM5eL8uWnXEsj8drVMHRGKOR/4mxTVCMYGIdPC');

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
  ADD KEY `id_product` (`id_product`),
  ADD KEY `fk_panier_profil` (`idProfil`);

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
-- Index pour la table `Profil`
--
ALTER TABLE `Profil`
  ADD PRIMARY KEY (`idProfil`);

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
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `Product`
--
ALTER TABLE `Product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT pour la table `Product_Option`
--
ALTER TABLE `Product_Option`
  MODIFY `id_product_option` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `Profil`
--
ALTER TABLE `Profil`
  MODIFY `idProfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `Panier_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `Product` (`id_product`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_panier_profil` FOREIGN KEY (`idProfil`) REFERENCES `Profil` (`idProfil`) ON DELETE CASCADE ON UPDATE CASCADE;

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
