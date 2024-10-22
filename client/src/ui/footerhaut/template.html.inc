<section class="footer-haut w-screen">
    <div class="layout flex flex-col md:flex-row justify-center md:gap-100 p-40">

        <div class="footer-group">
            <button class="footer-title-btn" onclick="toggleList('list1', this)">En ce moment<img class="arrow transform transition-transform duration-300"src="src/assets/svg/footer/arrow.svg"></button>
            <p class="footer-title-top">En ce moment</p>
            <div id="list1" class="hidden md:flex flex flex-col">
                <a href="#" class="footer-link">Promotions</a>
                <a href="#" class="footer-link">Primes Fidélité</a>
                <a href="#" class="footer-link">Call of Duty Black Ops 6</a>
                <a href="#" class="footer-link">Foire aux Vins d'Automne</a>
                <a href="#" class="footer-link">Halloween 2024</a>
                <a href="#" class="footer-link">Trottinette électrique</a>
                <a href="#" class="footer-link">Siège auto</a>
                <a href="#" class="footer-link">Salon de Jardin</a>
                <a href="#" class="footer-link">Barbecue & Plancha</a>
                <a href="#" class="footer-link">PlayStation 5</a>
                <a href="#" class="footer-link">Number Cake</a>
            </div>
        </div>

        <div class="footer-group">
            <button class="footer-title-btn" onclick="toggleList('list2', this)">Nos services<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
            <p class="footer-title-top">Nos services</p>
            <div id="list2" class="hidden md:flex flex flex-col">
                <a href="#" class="footer-link">Carrefour Drive</a>
                <a href="#" class="footer-link">Livraison à Domicile</a>
                <a href="#" class="footer-link">Drive Piéton</a>
                <a href="#" class="footer-link">Livraison Express</a>
                <a href="#" class="footer-link">Traiteur en ligne</a>
                <a href="#" class="footer-link">Carte de Fidélité</a>
                <a href="#" class="footer-link">Banque et Assurance</a>
                <a href="#" class="footer-link">Energies</a>
                <a href="#" class="footer-link">Location</a>
                <a href="#" class="footer-link">Spectacles</a>
                <a href="#" class="footer-link">Voyages</a>
                <a href="#" class="footer-link">Tous les services</a>
            </div>
        </div>

        <div class="footer-group">
            <button class="footer-title-btn" onclick="toggleList('list3', this)">Hypermarchés<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
            <p class="footer-title-top">Hypermarchés</p>
            <div id="list3" class="hidden md:flex flex flex-col">
                <a href="#" class="footer-link">Carrefour Market</a>
                <a href="#" class="footer-link">Carrefour City</a>
                <a href="#" class="footer-link">Carrefour Express</a>
                <a href="#" class="footer-link">Carrefour Contact</a>
                <a href="#" class="footer-link">Carrefour Montagne</a>
                <a href="#" class="footer-link">Bon app'</a>
                <a href="#" class="footer-link">Carrefour recrute</a>
                <a href="#" class="footer-link">Toutes les enseignes</a>
                <a href="#" class="footer-link">Tous les magasins</a>
            </div>
        </div>

        <div class="footer-group">
            <button class="footer-title-btn" onclick="toggleList('list4', this)">Nos offres<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
            <p class="footer-title-top">Nos offres</p>
            <div id="list4" class="hidden md:flex flex flex-col">
                <a href="#" class="footer-link">Ma Communauté</a>
                <a href="#" class="footer-link">Jeux Concours</a>
                <a href="#" class="footer-link">Campagnes TV</a>
                <a href="#" class="footer-link">Filière Qualité Carrefour</a>
                <a href="#" class="footer-link">Reflets de France</a>
                <a href="#" class="footer-link">Carrefour Baby</a>
                <a href="#" class="footer-link">Carrefour Bio</a>
                <a href="#" class="footer-link">Toutes nos marques</a>
                <button class="footer-title-btn pt-10" onclick="toggleList('list5', this)">Vos données<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
                <p class="footer-title-top pt-10">Vos données</p>
                <div id="list5" class="hidden md:block md:max-w[160px] flex flex-col">
                    <a href="#" class="footer-link">Politique sur les cookies</a>
                    <a href="#" class="footer-link">Paramétrer vos cookies</a>
                    <a href="#" class="footer-link">Politique de protection des données personnelles</a>
                </div>
            </div>
        </div>

        <div class="footer-group">
            <button class="footer-title-btn" onclick="toggleList('list6', this)">Carrefour.fr<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
            <p class="footer-title-top">Carrefour.fr</p>
            <div id="list6" class="hidden md:flex flex flex-col">
                <a href="#" class="footer-link">Conditions générales de vente</a>
                <a href="#" class="footer-link">Conditions générales d'utilisation Marketplace</a>
                <a href="#" class="footer-link">Mentions légales</a>
                <a href="#" class="footer-link">Conditions générales carte Carrefour</a>
                <a href="#" class="footer-link">Référencement et Classement</a>
                <a href="#" class="footer-link">Accessibilité : partiellement conforme</a>
                <a href="#" class="footer-link">Signalement marketplace</a>
                <button class="footer-title-btn pt-10" onclick="toggleList('list7', this)">Vous informer<img class="arrow transition-transform"src="src/assets/svg/footer/arrow.svg"></button>
                <p class="footer-title-top pt-10">Vous informer</p>
                <div id="list7" class="hidden md:flex flex flex-col">
                    <a href="#" class="footer-link">Alerte de sécurité</a>
                    <a href="#" class="footer-link">Pièces détachées</a>
                    <a href="#" class="footer-link">Rappel produits</a>
                    <a href="#" class="footer-link">Qualités et Caractéristiques Environnementales</a>
                    <a href="#" class="footer-link">Aide & Contact</a>
                    <a href="#" class="footer-link">Accès malentendants</a>
                </div>
            </div>
        </div>
    </div>
</section>