<section
  class="carousel h-fit flex flex-col justify-center md:flex-row items-center w-full gap-15"
>
  <div
    class="carousel-card-selection w-full h-fit md:w-rem20 md:h-rem40 flex flex-col justify-center md:justify-space items-center px-10 py-[3.125rem] md:px-15 md:py-30 gap-25 bg-accueil-green rounded-5 relative"
  >
    <img
      class="selection-banner w-[123px] h-auto md:w-auto order-1 md:order-none"
      src="src/assets/carrousel/banner.webp"
      alt="banner"
    />
    <div class="selection-text text-left md:text-center text-white ">
      <p
        class="selection-title text-24 order-0 md:order-none md:text-32 font-800"
      >
        La sélection du moment
      </p>
      <p class="selection-label hidden md:block text-13 font-800">
        Découvrez nos meilleur promotions, nos dernieres nouveauté ou nos plus
        grands succès que nous avons sélectionnés.
      </p>
    </div>
    <a
      href="#"
      class="btn-white hidden md:block border border-nav-blue rounded-3"
      >J'en profite</a
    >
  </div>
  <div class="carrousel flex flex-col md:flex-row px-10 md:px-0 gap-10 w-fit">
    <div
      class="carrousel flex flex-col md:flex-row px-10 md:px-0 gap-10 w-fit"
      id="carrousel"
    >
      <!--à supprimer-->
    </div>

    <!--Fin à supprimer-->
    <button
      class="carrousel-suivant flex flex-col justify-center items-center px-15 py-10 gap-6 bg-white border shadow-md rounded-8"
    >
      <p class="suivant-title text-20 font-800">Voir tous les produits</p>
      <img
        class="arrow w-[72px] h-auto"
        src="src/assets/svg/carrousel/arrow.svg"
        alt="suivant"
      />
    </button>
    <div class="btn-mobile md:hidden w-fill flex justify-center">
      <a href="#" class="btn-blue w-fit">J'en profite</a>
    </div>
  </div>
</section>
