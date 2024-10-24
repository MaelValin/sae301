<section class="creerprofil w-screen md:w-[564px] flex flex-col justify-center p-32 md:mx-auto pt-44" id="creerprofil">

    <div class="top w-full flex flex-rox justify-between items-center py-10">
        <a class="btn-white flex flex-row gap-10" href="#"><img class="icon" src="src/assets/svg/creerprofil/arrow-back.svg" alt="arrow-back">Retour au site</a>
        <img class="logo w-[120px] h-[20px]" src="src/assets/logo/logo-line.svg" alt="logo">
    </div>

    <form class="form grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 gap-30" id="form">
        <div class="civilite flex flex-col gap-4 text-15 text-panier-grey font-600 md:col-span-2 md:row-start-1 md:row-end-2">
            <p class="radio-label">Civilité *</p>
            <div class="radio flex flex-row gap-10 mb-4">
                <label class="flex items-center">
                    <input type="radio" name="civilite" value="Madame" class="mr-2">
                    Madame
                </label>
                <label class="flex items-center">
                    <input type="radio" name="civilite" value="Monsieur" class="mr-2">
                    Monsieur
                </label>
            </div>
        </div>
    
        <input class="input row-span-1 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3" type="text" id="prenom" name="prenom" placeholder="Prénom *" required>
        <input class="input row-span-1 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3" type="text" id="nom" name="nom" placeholder="Nom *" required>
        <input class="input row-span-1 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4" type="email" id="mail" name="mail" placeholder="E-mail *" required>
        <input class="input row-span-1 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5" type="password" id="password_hash" name="password_hash" placeholder="Mot de passe *" required>
        <button type="submit" class="btn-blue w-fit row-span-1 md:col-start-1 md:col-end-3 md:row-start-5 md:row-end-6 justify-self-center" id="valider-inscription">Créer mon compte</button>

    </form>

    <div class="pas-compte flex flex-col justify-center items-center py-30">
        <p class="text text-16 text-panier-grey font-600">Déjà un compte Carrefour.fr ?</p>
        <a href="#" class="btn-white">Connectez-vous</a>
    </div>

</section>