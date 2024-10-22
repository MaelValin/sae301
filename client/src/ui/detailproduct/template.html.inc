<section class="detailshop">
  <div
    class=" detail-product w-screen grid grid-cols-[max-content] grid-rows-[auto,auto,auto,auto] md:grid-cols-[max-content,auto,max-content]  md:grid-rows-[auto,1fr] px-15 py-10 md:px-60 md:pt-40 md:pb-20 font-sans gap-15 md:gap-10 items-center">
    <div
      class="image relative w-3/4 md:w-fit h-auto p-40 md:p-60 border rounded-5 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 row-start-2 row-end-3 justify-self-center">
      <img class="img" src="src/assets/cardshop/{{image}}" alt="produit" >
      <div class="buttons absolute flex flex-col gap-10 right-9 top-11">
        <a href="#" class="button"><img class="p-7 border border-nav-blue rounded-5"
            src="src/assets/svg/produit/share.svg" alt="share"></a>
        <a href="#" class="button"><img class="p-7 border border-nav-blue rounded-5"
            src="src/assets/svg/produit/heart.svg" alt="favourite"></a>
      </div>
    </div>

    <div
      class="title md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 justify-self-start md:pb-29 row-start-1 row-end-2 w-rem20 md:w-full">
      <h1 class="text text-20 font-700">{{name}}</h1>
    </div>

    <div class="description flex flex-col w-full gap-29 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
      <div class="">
        <div class="flex flex-row w-fill justify-between">
          <p class="title text-20 font-600">Description</p>
          <a href="#" class="button text-16 font-700 text-nav-blue">Voir plus</a>
        </div>
        <p class="Description text-16 font-400">
          {{subtitle}}
        </p>
      </div>
      <a href="#" class="button flex flex-row w-fill px-20 py-16 border rounded-5 text-nav-blue gap-10">Voir tous les
        produits du rayon <img class="arrow" src="src/assets/svg/produit/arrow-blue.svg" alt="arrow"></a>

      <div class="payment flex flex-col w-fill px-19 py-15 gap-10 bg-produit-paiemet">
        <p class="text text-16 font-700">Paiement 100% sécurisé</p>
        <div class="text-icon flex flex-row gap-10">
          <p class="text text-16 font-700">Satisfait ou remboursé</p>
          <img class="icon" src="src/assets/svg/produit/info.svg" alt="info">
        </div>
      </div>
    </div>
    <div
      class="note flex flex-col justify-center h-fit max-w-315 border rounded-5 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 p-12 gap-24">
      <div class="logo flex flex-row gap-10">
        <img class="icon" src="src/assets/svg/produit/car.svg" alt="car">
        <p class="name text-16 font-600">Carrefour</p>
      </div>
      <p class="price text-15 font-600">{{price}}€</p>
      <div class="notebox flex flex-row w-full px-4 py-8 bg-produit-note">
        <img class="icon" src="src/assets/svg/produit/info-full.svg">
        <p class="text text-14 font-600">Le prix de ce produit dépend de votre mode de retrait (Drive ou Livraison) et
          de votre magasin.</p>
      </div>
      <button href="#" class="button w-full py-11 rounded-5 text-center text-18 font-700 bg-nav-blue text-white" id="add-to-panier" data-filter="{{id}}" value="addpanier">Ajouter au
        panier</button>
    </div>
  </div>
  <div class="description flex flex-col w-screen px-17 py-20 md:px-300 md:py-20 font-sans text-neutral-black">
    <p class="title text-20 font-600">Description</p>
    <p class="text text-16 font-400" >{{description}} </p>
  </div>
</section>