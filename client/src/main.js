import { ProductData } from "./data/product.js";
import { CategoryData } from "./data/category.js";
import { OptionData } from "./data/option.js";
import { PanierData } from "./data/panier.js";
import { cardshop } from "./data/cardshop.js";
import { menu } from "./data/menucategorie.js";
import { option } from "./data/menuoption.js";
import { detailproduct } from "./data/detailprodruct.js";
import { optionall } from "./data/menuoptionall.js";
import { ProductOptionData } from "./data/product_option.js";
import { ProductView } from "./ui/product/index.js";
import { PubfullView } from "./ui/pubfull/index.js";
import { NavView } from "./ui/nav/index.js";
import { MenuView } from "./ui/menu/index.js";
import { DetailProductView } from "./ui/detailproduct/index.js";
import { cardshopView } from "./ui/cardshop/index.js";
import { ActionsView } from "./ui/actions/index.js";
import { ActualitesView } from "./ui/actualites/index.js";
import { MarquesView } from "./ui/marques/index.js";
import { AchatsMagasinView } from "./ui/achatsmagasin/index.js";
import { BienvenueView } from "./ui/bienvenue/index.js";
import { ProfilView } from "./ui/profil/index.js";
import { PanierVideView } from "./ui/paniervide/index.js";
import { PanierItemsView } from "./ui/panieritems/index.js";
import { panieritems } from "./data/panieritems.js";
import { PanierView } from "./ui/panier/index.js";
import { panier } from "./data/panierplein.js";
import { CreerProfilView } from "./ui/creerprofil/index.js";
import { ConnexionView } from "./ui/connexion/index.js";
import { FooterHautView } from "./ui/footerhaut/index.js";
import { FooterBasView } from "./ui/footerbas/index.js";
import { contentView } from "./ui/content-card/index.js";

import { ProfilData } from "./data/profil.js";

import { filtre } from "./data/filtre.js";
import { CategorieAvantagesView } from "./ui/categorieavantages/index.js";
import {CarrousselView} from "./ui/carroussel/index.js";
import { postRequest } from "./lib/api-request.js";


let M = {};

M.menuoption0 = [
  {
    id_option: "0",
    name: "Catalogues",
    image: "catalogue.webp",
    alt: "Catalogues",
    category: "all",
  },
  {
    id_option: "0",
    name: "Promotions",
    image: "promotion.webp",
    alt: "Promotions",
    category: "all",
  },
  {
    id_option: "0",
    name: "Mois Online jusqu’à 70% d’écos",
    image: "mois-online.webp",
    alt: "Mois Online jusqu’à 70% d’écos",
    category: "all",
  },
  {
    id_option: "0",
    name: "-60% sur le 2ème - Old El Paso",
    image: "marque-picto.webp",
    alt: "-60% sur le 2ème - Old El Paso",
    category: "all",
  },
  {
    id_option: "0",
    name: "Le Petit Marseillais",
    image: "promotion.webp",
    alt: "Le Petit Marseillais",
    category: "all",
  },
];

let V = {};

V.init = function () {
  
  let category = document.querySelector("#menu");
  category.addEventListener("click", C.handler_clickOnMenucategory);
  let option = document.querySelector("#option-content");
  option.addEventListener("click", C.handler_clickOnMenuoption);

  document.querySelector("#card").addEventListener("click", function (ev) {
    if (ev.target && ev.target.id === "detail") {
      C.handler_clickOnDetail(ev);
    }
    if (ev.target && ev.target.id === "add-to-panier") {
      C.handler_clickAddPanier(ev);
    }
  });

  let homepage = document.querySelector("#homepage");
  homepage.addEventListener("click", C.handler_clickOnhomepage)




 

  document.querySelector("#panier").addEventListener("click", function (ev) {
    if (ev.target && (ev.target.value === "plus" || ev.target.value === "minus")) {
      C.handler_clickOnstocknumber(ev);
    } else if (ev.target.tagName === "IMG") {
      let action = ev.target.getAttribute("value");
      if (action === "plus" || action === "minus") {
        C.handler_clickOnstocknumber(ev);
      }
      
    }
      
    if (ev.target && ev.target.value === "delete") {
      C.handler_clickOnstockdelete();
    } else if (ev.target.closest("button") && ev.target.closest("button").value === "delete") {
      C.handler_clickOnstockdelete();
    }


    let form = document.querySelector("#form");
    console.log('Form element:', form); // Debugging statement to log the form element
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            console.log('Form submitted'); // Debugging statement

            // Convert FormData to a plain object
            let formData = new FormData(event.target);
            let formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });

            console.log('Form data object:', formDataObj); // Debugging statement to log the form data object

            // Send data as JSON
            await postRequest('profil', JSON.stringify(formDataObj)); // Make sure it's JSON stringified
        });
    } else {
        console.error('Form element not found');
    }

    
});

  
};


document.addEventListener("DOMContentLoaded", V.init);




let paniervisuel = async function () {
  let paniertab = PanierData.get();
  let data = await ProductData.fetchAll();
  if (paniertab.nb !== 0) {
    let panierView = await panier(paniertab);
    document.querySelector("#panier").innerHTML = panierView;

    let panierItemsData = paniertab.items;
    let datacardpanier = data.filter(product =>
      panierItemsData.some(items => items.id === product.id_product)
    );
    let panierItemsView = await panieritems(panierItemsData, datacardpanier);
    document.querySelector("#panier_item").innerHTML = panierItemsView;
  } else {
    let panierVideView = await PanierVideView.render();
    document.querySelector("#panier").innerHTML = panierVideView;
  }
};


////formulaire profil


let C = {};



C.init = async function () {
  
  let data = await ProductData.fetchAll();
  let datacategory = await CategoryData.fetchAll();
  let dataoption = await OptionData.fetchAll();
  let nav = NavView.render(data);


//parti profil




  
    
      
 
  ///fin parti profil

  if (window.location.pathname.includes("index.html")) {
    let bienvenue = BienvenueView.render(data);
    document.querySelector("#card").innerHTML = bienvenue;
    let actualites = ActualitesView.render(data);
    document.querySelector("#card").innerHTML += actualites;
    let pubfull = PubfullView.render(data);
    document.querySelector("#card").innerHTML += pubfull;
    let marques = MarquesView.render(data);
    document.querySelector("#card").innerHTML += marques;
    let carroussel = CarrousselView.render(data);
    document.querySelector("#card").innerHTML += carroussel;
    document.querySelector("#card").innerHTML += pubfull;

    let card = await cardshop(data.slice(0, 3));
    document.querySelector("#carrousel").innerHTML += card;

    let categorieavantages = CategorieAvantagesView.render(data);
    document.querySelector("#card").innerHTML += categorieavantages;
    let actions = ActionsView.render(data);
    document.querySelector("#footer").innerHTML = actions;
    let footerhaut = FooterHautView.render(data);
    document.querySelector("#footer").innerHTML += footerhaut;
    let footerbas = FooterBasView.render(data);
    document.querySelector("#footer").innerHTML += footerbas;

    let menuitem = await menu(datacategory);
    document.querySelector("#nav").innerHTML = nav;
    document.querySelector("#contentmenu").innerHTML = menuitem;
    let optionmenu = await option(M.menuoption0);
    document.querySelector("#option-content").innerHTML = optionmenu;
    V.init();
    paniervisuel();
  }
  
  V.init();



};








C.handler_clickOnMenucategory = async function (ev) {
  try {
    if (ev.target.dataset.filter !== undefined) {
      let value = ev.target.dataset.filter;

      // Désélectionner l'élément actuellement sélectionné
      let previousSelected = document.querySelector(".category.bg-white");
      if (previousSelected) {
        previousSelected.classList.remove("bg-white");
      }

      // Sélectionner le nouvel élément
      let selectedElement = ev.target.closest(".category");
      if (selectedElement) {
        selectedElement.classList.add("bg-white");
      }
    }
  } catch (error) {
    console.error("Erreur dans handler_clickOnMenucategory :", error);
  }

  try {
    if (ev.target.dataset.filter !== undefined) {
      let value = ev.target.dataset.filter;

      let allData = await OptionData.fetchAll();
      let data;

      if (value === "all") {
        data = M.menuoption0;
        let htmlOptionAll = await option(data);
        document.querySelector("#option-content").innerHTML = htmlOptionAll;
      } else {
        let category = parseInt(value);
        let data = allData.filter((p) => p.category === category);

        let htmlOptionAll = await optionall([data[0]]); // Only the first element for optionall
        document.querySelector("#option-content").innerHTML = htmlOptionAll;

        let htmlCard = await option(data);
        document.querySelector("#option-content").innerHTML += htmlCard;
      }
    }
  } catch (error) {
    console.error("Erreur dans handler_clickOnMenucategory :", error);
  }
};

C.handler_clickOnMenuoption = async function (ev) {
  try {
    let filter = ev.target.dataset.filter;
    let value = ev.target.attributes.value.value;

    let allData = await ProductData.fetchAll();
    let data;

    if (value === "0") {
      data = allData;
    } else if (value === "all") {
      let category = parseInt(filter);
      data = allData.filter((p) => p.category === category);
    } else {
      // If no value, show elements with options matching data-filter in ProductOptionData

      let productOptions = await ProductOptionData.fetchAll();

      let filteredProductIds = productOptions
        .filter((po) => po.id_option === parseInt(value))
        .map((po) => po.id_product);

      data = allData.filter((p) => filteredProductIds.includes(p.id_product));
    }
    let content=await contentView.render();
  let filtrecontent = await filtre(data.length);
    let htmlcard = await cardshop(data);
    document.querySelector("#card").innerHTML = filtrecontent;
    document.querySelector("#card").innerHTML += content;
    document.querySelector("#card_content").innerHTML += htmlcard;
  } catch (error) {
    console.error("Erreur dans handler_clickOnMenuoption :", error);
  }
};

C.handler_clickOnDetail = async function (ev) {
  try {
    let productId = ev.target.dataset.filter;

    let allData = await ProductData.fetchAll();
    let data = allData.find((p) => p.id_product === parseInt(productId));

    if (data) {
      let html = await detailproduct(data);
      document.querySelector("#card").innerHTML = html;
    } else {
      console.error("Produit non trouvé pour l'ID :", productId);
    }
  } catch (error) {
    console.error("Erreur dans handler_clickOnDetail :", error);
  }
};

C.handler_clickAddPanier = async function (ev) {
  try {{
    let productId = ev.target.dataset.filter;
    let paniertab = PanierData.get();
    if (productId) {
      
      let product = await ProductData.fetch(productId);
      
        PanierData.addOrIncrease({ id: parseInt(productId), price: product[0].price, number: 1 });
      paniervisuel();
      
      
    }

      let datacardpanier = await ProductData.fetchAll();
      let filteredProducts = datacardpanier.filter(product =>
        PanierData.get().items.some(items => items.id === product.id_product)
      );
      
      let panierItemsView = await panieritems(paniertab.items
      , filteredProducts);
      
      document.querySelector("#panier_item").innerHTML = panierItemsView;
      
    }
  } catch (error) {
    console.error("Erreur dans handler_clickAddPanier :", error);
  }
};


//je veux recuperer les value: si celui si est minus, je veux enlever 1 au number de l'objet et si celui si est plus je veux ajouter 1 au number de l'objet a l'aide de la fonction addOrIncrease pour plus et remove pour minus
C.handler_clickOnstocknumber = async function (ev) {
  try {
    let action = ev.target.getAttribute("value"); // Récupère la valeur du bouton cliqué (plus ou minus)
    let productId = ev.target.closest("button").dataset.productId; // Utilise closest pour remonter au bouton si nécessaire

    if (action) {
      if (action === "plus") {
        PanierData.addOrIncrease({ id: parseInt(productId), number: 1 });
        
      } else if (action === "minus") {
        PanierData.remove(productId);
       
      }
      paniervisuel();
    }
  } catch (error) {
    console.error("Erreur dans handler_clickOnstocknumber :", error);
  }
};


C.handler_clickOnstockdelete = async function () {
  try {
    PanierData.clear();
      paniervisuel();
    }
   catch (error) {
    console.error("Erreur dans handler_clickOnstockdelete :", error);
  }
}


C.handler_clickOnstockvalider = async function () {
  try {
    
    let paniertab = PanierData.get();
    let datacardpanier = await ProductData.fetchAll();
    // Prepare data to send to the server
    let dataToSend = paniertab.items.map(item => {
        let product = datacardpanier.find(p => p.id_product === item.id);
        return {
            id_product: item.id,
            number: item.number,
            price: product.price
        };
    });
    
    
    // Ensure PanierData.save is defined and returns a promise
    let response = await PanierData.save(dataToSend); // Await the promise
    if (response) {
      // Clear the panier
      PanierData.clear();
      paniervisuel();
    }


      }catch (error) {
    console.error("Erreur dans handler_clickOnstockvalider :", error);
  }
}


C.handler_clickOnhomepage = async function () {
  C.init();
}


/*
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#formulaire"); 
  console.log(form);

  if (form) {
    // Écoute l'événement "submit" sur le formulaire
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

      console.log("Soumission du formulaire interceptée.");

      let formData = new FormData(form); // Récupère les données du formulaire
      let formDataObj = {};
      
      // Convertir FormData en objet simple
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      console.log("Données du formulaire :", formDataObj); // Journaliser les données du formulaire pour le débogage

      try {
        // Envoie les données du formulaire à ProfilData.save()
        await ProfilData.save(formDataObj); 
        alert("Inscription réussie !");

        // Redirige vers "connexion.html" après une soumission réussie
        window.location.href = "connexion.html";
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
      }
    });
  } else {
    console.error('Formulaire non trouvé');
  }
});*/












C.init();

