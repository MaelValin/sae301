<section class="carousel h-fit flex flex-col justify-center md:flex-row items-center md:justify-center gap-15 relative">
    <div
        class="carousel-card-selection w-full h-fit md:w-rem20 md:h-rem40 flex flex-row md:flex-col justify-space md:items-center px-10 pt-10 pb-100 md:px-15 md:py-30 gap-25 bg-accueil-green rounded-5 relative">
        <img class="selection-banner w-[123px] h-auto md:w-auto order-1 md:order-none"
            src="src/assets/carrousel/banner.webp" alt="banner">
        <div class="selection-text text-left md:text-center text-white">
            <p class="selection-title text-24 order-0 md:order-none md:text-32 font-800">La sélection du moment</p>
            <p class="selection-label hidden md:block text-13 font-800">Découvrez nos meilleur promotions, nos dernieres
                nouveauté ou nos plus grands succès que nous avons sélectionnés.</p>
        </div>
        <a href="#" class="btn-white hidden md:block border border-nav-blue rounded-3">J'en profite</a>
    </div>

    <div class="carrousel w-full flex flex-col md:flex-row px-10 md:px-0 gap-10 absolute md:relative top-1/2" id="carrousel">
        <!--à supprimer-->
        <div class="w-full h-fit md:w-rem20 md:h-rem40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden grid grid-cols-[min-content,1fr,max-content] grid-rows-[min-content,min-content] md:grid-cols-2 md:grid-rows-[min-content,min-content,min-content] py-15 px-15 md:py-4 md:px-4 gap-6 relative"
            id="cardshop">
            <div id="detail" data-filter="{{id}}" value="detail"
                class="w-16 h-24 md:w-full md:h-64 flex justify-center row-start-1 col-span-1 md:col-span-2">
                <img class="w-16 h-24 md:w-auto md:h-auto" src="./src/assets/cardshop/{{image}}" alt="Product Image" />
            </div>
            <img src="./src/assets/cardshop/like.svg" class="w-6 absolute top-4 right-4 cursor-pointer" alt="Like"
                id="like-icon" />

            <h5 class="text-4xl font-bold text-black row-start-2 col-start-2 md:row-start-2 md:col-start-1">
                ${{price}}
            </h5>
            <button
                class="inline-flex items-center px-3 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 row-start-2 col-start-3 md:row-start-2 md:col-start-2 w-fit justify-self-end"
                id="add-to-panier" data-filter="{{id}}" value="addpanier">
                <img src="./src/assets/cardshop/shopadd.svg" class="w-8" alt="" />
            </button>
            <div class="md:row-start-3 md:col-span-1 md:col-span-2 flex flex-col gap-2">
                <h1 class="text-xl font-bold text-black">{{name}}</h1>
                <p class="text-sm text-gray-500">{{subtitle}}</p>
            </div>
        </div>
        <div class="w-full h-fit md:w-rem20 md:h-rem40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden grid grid-cols-[min-content,1fr,max-content] grid-rows-[min-content,min-content] md:grid-cols-2 md:grid-rows-[min-content,min-content,min-content] py-15 px-15 md:py-4 md:px-4 gap-6 relative"
            id="cardshop">
            <div id="detail" data-filter="{{id}}" value="detail"
                class="w-16 h-24 md:w-full md:h-64 flex justify-center row-start-1 col-span-1 md:col-span-2">
                <img class="w-16 h-24 md:w-auto md:h-auto" src="./src/assets/cardshop/{{image}}" alt="Product Image" />
            </div>
            <img src="./src/assets/cardshop/like.svg" class="w-6 absolute top-4 right-4 cursor-pointer" alt="Like"
                id="like-icon" />

            <h5 class="text-4xl font-bold text-black row-start-2 col-start-2 md:row-start-2 md:col-start-1">
                ${{price}}
            </h5>
            <button
                class="inline-flex items-center px-3 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 row-start-2 col-start-3 md:row-start-2 md:col-start-2 w-fit justify-self-end"
                id="add-to-panier" data-filter="{{id}}" value="addpanier">
                <img src="./src/assets/cardshop/shopadd.svg" class="w-8" alt="" />
            </button>
            <div class="md:row-start-3 md:col-span-1 md:col-span-2 flex flex-col gap-2">
                <h1 class="text-xl font-bold text-black">{{name}}</h1>
                <p class="text-sm text-gray-500">{{subtitle}}</p>
            </div>


        </div>
        <!--Fin à supprimer-->
        <button class="carrousel-suivant flex flex-col justify-center items-center px-15 py-10 gap-6 bg-white border shadow-md rounded-8">
            <p class="suivant-title text-20 font-800">Voir tous les produits</p>
            <img class="arrow w-[72px] h-auto" src="src/assets/svg/carrousel/arrow.svg" alt="suivant">
        </button>
        <div class="btn-mobile md:hidden w-fill flex justify-center">
            <a href="#" class="btn-blue w-fit">J'en profite</a>
        </div>
    </div>

</section>