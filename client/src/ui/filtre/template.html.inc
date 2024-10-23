<section class="filtre py-10 md:py-0">

    <button class="btn-toggle flex flex-row w-fit mx-auto md:mx-0 p-10 gap-10 border border-neutral-black rounded-10 md:hidden" onclick="toggleFiltres('layout')">
        <p class="font-700">Filtrer & trier</p>
        <img src="src/assets/svg/filtre/arrow-filtre.svg" alt="arrow">
    </button>
    <div class="layout hidden md:flex flex flex-col md:flex-row" id="layout">
        <div class="filtres w-screen md:w-[326px] order-1 md:order-0">
            <div class="filtre-layout hidden md:flex">
                <p class="results">{{number}} résultats</p>
            </div>
           <!-- <div class="filtre-layout">
                <button class="filtre-title-btn" onclick="toggleList('list1', this)">Promotions<img class="arrow"
                        src="src/assets/svg/filtre/arrow.svg" alt="arrow"></button>
                <div id="list1" class="filtre-list hidden flex">

                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Toutes les promotions</p>
                    </div>
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Remises immédiates</p>
                    </div>
                </div>
            </div>
            <div class="filtre-layout">
                <button class="filtre-title-btn" onclick="toggleList('list2', this)">Marque<img class="arrow"
                        src="src/assets/svg/filtre/arrow.svg" alt="arrow"></button>
                <div id="list2" class="filtre-list hidden flex">
                    <div class="search flex flex-row p-10 bg-accueil-grey text-panier-grey rounded-5">
                        <img class="search-icon pr-10 border-r border-panier-grey" src="src/assets/svg/filtre/search.svg"
                            alt="search">
                        <input type="text" placeholder="Rechercher une marque" class="search-input pl-10 bg-transparent">
                    </div>
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Carrefour</p>
                    </div>
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Vounot</p>
                    </div>
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Gardelys</p>
                    </div>
                </div>
            </div>
            <div class="filtre-layout">
                <button class="filtre-title-btn" onclick="toggleList('list3', this)">Vendu par<img class="arrow"
                        src="src/assets/svg/filtre/arrow.svg" alt="arrow"></button>
                <div id="list3" class="filtre-list hidden flex">
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Carrefour</p>
                    </div>
                    <div class="filtre-checkbox">
                        <input type="checkbox" id="promotions-checkbox">
                        <p class="checkbox-label">Vendeurs partenaires</p>
                    </div>
                </div>
            </div>
            <div class="filtre-layout">
                <button class="filtre-title-btn" onclick="toggleList('list4', this)">Prix<img class="arrow"
                        src="src/assets/svg/filtre/arrow.svg" alt="arrow"></button>
                <div id="list4" class="filtre-list hidden flex">
                    <div class="prix flex flex-row gap-14">
                        <div class="prix-group">
                            <label class="checkbox-label" for="prix-min">Min</label>
                            <input type="number" class="prix-input" placeholder="0€" id="prix-min">
                        </div>
                        <div class="prix-group">
                            <label class="checkbox-label" for="prix-max">Max</label>
                            <input type="number" class="prix-input" placeholder="500€" id="prix-max">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filtre-top grid grid-rows-[auto,auto] grid-cols-1 md:flex md:flex-row w-full h-fit justify-between items-center py-10 md:p-10 order-0 md:order-1">
            <div class="filtre-btns row-span-1 grid grid-rows-2 grid-cols-2 md:flex md:flex-row w-fit gap-8 md:gap-0 py-10 md:py-0 mx-auto md:mx-0">
                <a href="#" class="filtre-btn row-span-1 col-span-1">Promotions</a>
                <a href="#" class="filtre-btn row-span-1 col-span-1 md:hidden">Précommandés</a>
                <a href="#" class="filtre-btn row-span-1 col-span-1 md:hidden">Nouveautés</a>
            </div>
            <div class="list-filtre row-span-1 flex flex-row w-fill md:w-fit gap-10">
                <button class="filtre-btn-list">
                    <p class="font-700">Trier:</p>
                    <p class="font-400">Pertinence</p>
                    <img src="src/assets/svg/filtre/arrow-filtre.svg" alt="arrow">
                </button>

                <button class="liste-btn-list hidden md:flex">
                    <img src="src/assets/svg/filtre/list.svg" alt="liste">
                    <p class="font-700">Liste</p>
                </button>
            </div>
        </div>-->
    </div>
</section>