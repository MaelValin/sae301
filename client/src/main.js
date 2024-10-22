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

import { PanierAdd } from "./data/panieradd.js";
import { PanierUpdate } from "./data/panierupdate.js";
import { PanierDelette } from "./data/panierdelete.js";

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

  let detail = document.querySelector("#card");
  detail.addEventListener("click", C.handler_clickOnDetail);

  document.addEventListener("click", function (event) {
    if (event.target && event.target.matches("[onclick^='addpanier']")) {
      let id_product = event.target.getAttribute("onclick").match(/'(\d+)'/)[1];
      C.addpanier(id_product);
    }
  });
};

let C = {};

C.init = async function () {
  let data = await ProductData.fetchAll();
  let datacategory = await CategoryData.fetchAll();
  let dataoption = await OptionData.fetchAll();
  let nav = NavView.render(data);


  /*let bienvenue = BienvenueView.render(data);
    document.querySelector("#card").innerHTML = bienvenue;
    let actualites = ActualitesView.render(data);
    document.querySelector("#card").innerHTML += actualites;
    let pubfull = PubfullView.render(data);
    document.querySelector("#card").innerHTML += pubfull;
    let marques = MarquesView.render(data);
    document.querySelector("#card").innerHTML += marques;
    document.querySelector("#card").innerHTML += pubfull;

    let actions = ActionsView.render(data);
    document.querySelector("#footer").innerHTML = actions;
    let footerhaut = FooterHautView.render(data);
    document.querySelector("#footer").innerHTML += footerhaut;
    let footerbas = FooterBasView.render(data);
    document.querySelector("#footer").innerHTML += footerbas;*/

  let menuitem = await menu(datacategory);
  document.querySelector("#nav").innerHTML = nav;
  document.querySelector("#contentmenu").innerHTML = menuitem;

  V.init();

  let optionmenu = await option(M.menuoption0);
  document.querySelector("#option-content").innerHTML = optionmenu;


  let panierData = await PanierData.fetchAll();
  if (panierData.length > 0) {
    let panierView = await panier(panierData);
    document.querySelector("#panier").innerHTML = panierView;
  } else {
    let panierVideView = await PanierVideView.render();
    document.querySelector("#panier").innerHTML = panierVideView;
  }

  let panierItemsData = await PanierData.fetchAll();


  let datacardpanier = data.filter(product => 
    panierItemsData.some(item => item.id_product === product.id_product)
  );

  let panierItemsView = await panieritems(panierItemsData, datacardpanier);
  document.querySelector("#panier_item").innerHTML = panierItemsView;





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

    let htmlcard = await cardshop(data);
    document.querySelector("#card").innerHTML = htmlcard;
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



C.addpanier = async function (id_product) {
  try {
    let quantity = 1;

    let panierData = await PanierData.fetchAll();
    let data = panierData.find((p) => p.id_product === parseInt(id_product));

    if (data) {
      let newQuantity = data.quantity + quantity;
      await PanierUpdate.update(data.id_panier, newQuantity);
    } else {
      await PanierAdd.add(id_product, quantity);
    }

    let panierDataUpdated = await PanierData.fetchAll();
    let panierView = await panier(panierDataUpdated);
    document.querySelector("#panier").innerHTML = panierView;

    let panierItemsData = await PanierData.fetchAll();

    let datacardpanier = await ProductData.fetchAll();
    datacardpanier = datacardpanier.filter(product =>
      panierItemsData.some(item => item.id_product === product.id_product)
    );

    let panierItemsView = await panieritems(panierItemsData, datacardpanier);
    document.querySelector("#panier_item").innerHTML = panierItemsView;

  } catch (error) {
    console.error("Erreur dans addpanier :", error);
  }
};



C.init();
