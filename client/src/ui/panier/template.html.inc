<section class="panier relative w-[355px] md:w-[455px] h-screen flex flex-col p-15 gap-20 mx-auto md:mx-0 ">
        <p class="title w-full text-nav-blue hover:text-nav-blue-hover text-28 font-700 pb-20 border-b border-neutral-black">Mon panier</p>
    
        <div class="info w-full pb-20 gap-4 border-b border-neutral-black">
            <p class="label text-panier-black">Vendu et préparé par</p>
            <div class="lieu flex flex-row items-center gap-4">
                <img class="logo h-[20px]" src="src/assets/logo/logo.png" alt="logo"> 
                <p class="name text-16 font-700 text-panier-black">Carrefour City Limoges Mauvendière</p>
            </div>
            <div class="retrait w-full">
                <p class="label text-14 text-panier-grey">Retrait en magasin</p>
                <div class="date flex flex-row">
                    <img class="icon" src="src/assets/svg/panier/clock.svg" alt="horloge">
                    <p class="label text-14 text-panier-grey">mer. 16 oct. de 18h00 à 18h30</p>
                </div>
            </div>
        </div>
        <div id="panier_item" class="flex justify-center flex-col items-center"></div>
    
       <!--item panier-->
    
        <div class="buttons flex flex-col md:flex-row justify-center items-center md:justify-between w-full">
            <a href="#" class="btn-white flex flex-row items-center gap-6"><img class="icon" src="src/assets/svg/panier/bin.svg" alt="poubelle">Vider mon panier</a>
            <a href="#" class="btn-white flex flex-row gap-6 items-center"><img class="icon" src="src/assets/svg/panier/heart.svg" alt="coeur">Mettre de côté</a>
        </div>
    
        <div class="sous-total flex flex-row justify-between w-full px-20 text-16 font-700 pb-40 md:pb-60">
            <p class="label">Sous-total</p>
            <p clas="prix">{{total}}€</p>
        </div>
    
        <a href="#" class="btn-blue w-full">Voir mon panier</a>
    </section>