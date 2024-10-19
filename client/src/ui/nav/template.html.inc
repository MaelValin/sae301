<section class="nav w-full px-1 py-4 grid md:grid-cols-[max-content_1fr_max-content] grid-cols-2 md:grid-rows-1 grid-rows-[min-content_min-content] items-center md:px-9 md:py-3 gap-2 md:gap-4 justify-between relative">
    <div class="flex flex-row gap-4 items-center">
        <a href="#"><img class="nav__icon w-9 h-5" src="src/assets/logo/logo.png"></a>
        <label class="label inline-flex select-none cursor-pointer z-10 peer" for="check">
            <input type="checkbox" id="check" class="peer hidden" />
            <div class="nav-btn flex items-center p-3 gap-3 border rounded">
                <img src="src/assets/svg/nav/burger.svg" alt="menu">
                <span>Menu</span>
            </div>
            
        </label>
        <div class="hidden md:contents p-3">
            <a href="#" class="nav-btn">Promotions</a>
            <a href="#" class="nav-btn">Catalogues</a>
        </div>
    </div>
     <!--<div class="nav__search flex flex-row flex-start border rounded-md w-full md:col-start-2 md:col-end-2 md:row-start-1 col-span-2 col-start-1">
        <input type="text" class="nav__search-input px-3 py-2 w-full" placeholder="Pain, lait, oeufs...">
        <button class="nav__search-btn bg-nav-blue rounded-se-md rounded-ee-md"><img class="px-3 py-2 " src="src/assets/svg/nav/search.svg" alt="recherche"></button>
    </div>   
    <div class="flex flex-row gap-4 items-center md:col-span-1 md:col-start-3 col-span-1 col-start-2 row-start-1">
        <div class="nav__icons flex flex-row gap-4 md:gap-8">
            <a href="#" class="icon-btn"><img src="src/assets/svg/nav/speech-bubble.svg" alt="aide"></a>
            <a href="#" class="icon-btn"><img src="src/assets/svg/nav/list.svg" alt="liste"></a>
            <a href="#" class="icon-btn"><img src="src/assets/svg/nav/profile.svg" alt="profil"></a>
        </div>
        <a href="#" class="nav-btn flex items-center p-3 gap-3 border rounded-3xl self-start">
            <img src="src/assets/svg/nav/cart.svg" alt="panier">
            <span class="hidden md:contents">Panier</span>
        </a>
    </div>-->

    

   
</section>
<div id="menu" class="menu flex flex-row w-fit h-full font-sans ease-in-out duration-300 peer-has-[:checked]:translate-x-0 ">
    <div class="categories flex flex-col items-center bg-menu-background-light">
        <div class="category flex flex-col items-center px-15 py-13" data-filter='all'>
            <img class="w-77 h-77 rounded-50" src="src/assets/categories/courses.webp" alt="Courses">
            <span class="block">Courses du quotidien</span>
        </div>
        <div id="contentmenu"></div>
        <div class="category flex flex-col items-center px-15 py-13">
            <img class="w-77 h-77 rounded-50" src="src/assets/categories/catalogues.webp" alt="Catalogues">
            <span>Catalogues</span>
        </div>
    </div>
    <div class="list w-full bg-white pl-5" id="option-content">
         
    </div>
</div>