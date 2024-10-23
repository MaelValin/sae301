<section
  class="nav w-full px-1 py-4 grid md:grid-cols-[max-content_1fr_max-content] grid-cols-2 md:grid-rows-1 grid-rows-[min-content_min-content] items-center md:px-9 md:py-3 gap-2 md:gap-4 justify-between  fixed bg-white z-10"
>
  <div class="flex flex-row gap-8 items-center">
    <a href="#"
      ><img class="nav__icon w-9 h-5" src="src/assets/logo/logo.png" alt="logo" id="homepage"
    /></a>
    <label
      class="label inline-flex select-none cursor-pointer z-10 peer"
      for="check"
    >
      <input type="checkbox" id="check" class="hidden"  />
      <div class="nav-btn flex items-center p-3 gap-3 border rounded">
        <img src="src/assets/svg/nav/burger.svg" alt="menu" />
        <span>Menu</span>
      </div>
    </label>
    <div
      id="menu"
      class="menu flex flex-row w-fit font-sans ease-in-out duration-300 absolute top-full z-10 h-fit left-0 peer-has-[:checked]:translate-x-0 -translate-x-full  rounded-10 shadow-card"
    >
      <div
        class="categories flex flex-col items-center bg-menu-background-light w-min pl-16"
      >
        <div
          class="category flex flex-col items-center px-15 py-13 bg-white rounded-l-50"
          data-filter="all"
        >
          <img
            class="w-77 h-77 rounded-50"
            src="src/assets/categories/courses.webp"
            alt="Courses"
            data-filter="all"
          />
          <span class="block select-none text-center" data-filter="all"
            >Courses du quotidien</span
          >
        </div>
        <div id="contentmenu"></div>
        <div class="category flex flex-col items-center px-15 py-13">
          <img
            class="w-77 h-77 rounded-50"
            src="src/assets/categories/catalogues.webp"
            alt="Catalogues"
          />
          <span class="select-none">Catalogues</span>
        </div>
      </div>
      <div class="list w-full bg-white pl-5" id="option-content"></div>
    </div>
    <div class="hidden md:contents p-3">
      <a href="#" class="nav-btn">Promotions</a>
      <a href="#" class="nav-btn">Catalogues</a>
    </div>
  </div>
  <div
    class="nav__search flex flex-row flex-start border rounded-md w-full md:col-start-2 md:col-end-2 md:row-start-1 col-span-2 col-start-1"
  >
    <input
      type="text"
      class="nav__search-input px-3 py-2 w-full"
      placeholder="Pain, lait, oeufs..."
    />
    <button class="nav__search-btn bg-nav-blue rounded-se-md rounded-ee-md">
      <img
        class="px-3 py-2"
        src="src/assets/svg/nav/search.svg"
        alt="recherche"
      />
    </button>
  </div>
  <div
    class="flex flex-row justify-end gap-4 items-center md:col-span-1 md:col-start-3 col-span-1 col-start-2 row-start-1"
  >
    <div class="nav__icons flex flex-row gap-4 md:gap-8">
      <a href="#" class="icon-btn"
        ><img src="src/assets/svg/nav/speech-bubble.svg" alt="aide"
      /></a>
      <a href="#" class="icon-btn"
        ><img src="src/assets/svg/nav/list.svg" alt="liste"
      /></a>
      <a href="#" class="icon-btn"
        ><img src="src/assets/svg/nav/profile.svg" alt="profil"
      /></a>
    </div>

    <label
      class="label inline-flex select-none cursor-pointer z-10 peer"
      for="check1"
    >
      
    <section
      class="nav-btn flex items-center p-3 gap-3 border rounded-3xl self-start"
    >
    <input type="checkbox" id="check1" class="hidden"/>
      <img src="src/assets/svg/nav/cart.svg" alt="panier" />
      <span class="hidden md:contents">Panier</span>
  </section>
</label>


    <section
      class="panier absolute top-full right-0 z-10 w-[355px] md:w-[455px] h-screen flex flex-col justify-center items-center p-15 gap-20 bg-white rounded-10 shadow-card ease-in-out duration-300 peer-has-[:checked]:translate-x-0 translate-x-full"
    >
      <img
        class="cross absolute top-0 right-0 m-4 cursor-pointer"
        src="src/assets/svg/menu/x.svg"
        alt="croix"
        onclick="document.getElementById('check1').checked = false;"
      />
      <div id="panier" class="w-full h-full flex flex-col justify-center items-center p-15 gap-2">
        <div class="head flex flex-col justify-center py-30">
          <img
            class="img"
            src="src/assets/svg/panier/panier.svg"
            alt="panier"
          />
          <p class="title text-28 font-700">Votre panier est vide...</p>
        </div>

        <div
          class="panier-pub flex flex-row w-full justify-between items-center bg-panier-very-light-red rounded-5"
        >
          <img
            class="icon w-[51px] h-[51px] ml-5"
            src="src/assets/panier/promotion.png"
          />
          <div class="content gap-20 w-fit h-full flex flex-col py-20">
            <div class="text w-fit">
              <p class="label text-20 font-600">Profitez de toutes</p>
              <p class="label text-16 font-600 text-panier-red-text">
                nos promos
              </p>
            </div>
            <a href="#" class="btn-red">J’en profite</a>
          </div>
          <img
            class="illustration w-[66px] h-[103px] self-end rounded-br-5"
            src="src/assets/panier/illus1.webp"
            alt="illustration"
          />
        </div>

        <div
          class="panier-pub flex flex-row w-full justify-between items-center bg-panier-very-light-yellow rounded-5"
        >
          <img
            class="icon w-[51px] h-[51px] ml-5"
            src="src/assets/panier/anti-inflation.webp"
          />
          <div class="content gap-20 w-fit h-full flex flex-col py-20">
            <div class="text w-fit">
              <p class="label text-20 font-600">Nos essentiels à</p>
              <p class="label text-16 font-600 text-panier-red-text">
                petits prix
              </p>
            </div>
            <a href="#" class="btn-red">Je fonce</a>
          </div>
          <img
            class="illustration w-[66px] h-[103px] self-end rounded-br-5"
            src="src/assets/panier/illus2.webp"
            alt="illustration"
          />
        </div>
      </div>
    </section>
  </div>
</section>


