import { ProductData } from "./data/product.js";
import { CategoryData } from "./data/category.js";
import { OptionData } from "./data/option.js";
import { cardshop} from "./data/cardshop.js";
import { menu} from "./data/menucategorie.js";
import { option} from "./data/menuoption.js";
import { ProductView } from "./ui/product/index.js";
import { PubfullView } from "./ui/pubfull/index.js";
import { NavView } from "./ui/nav/index.js";
import { MenuView } from "./ui/menu/index.js";
import { DetailProductView } from "./ui/detailproduct/index.js";

let M = {};

M.menuoption0 = [
    {id:"0", name: "Catalogues", image: "catalogue.webp", alt: "Catalogues", category: "0"},
    {id:"0", name: "Promotions", image: "promotion.webp", alt: "Promotions", category: "0"},
    {id:"0", name: "Mois Online jusqu’à 70% d’écos", image: "mois-online.webp", alt: "Mois Online jusqu’à 70% d’écos", category: "0"},
    {id:"0", name: "-60% sur le 2ème - Old El Paso", image: "marque-picto.webp", alt: "-60% sur le 2ème - Old El Paso", category: "0"},
    {id:"0", name: "Le Petit Marseillais", image: "promotion.webp", alt: "Le Petit Marseillais", category: "0"}
];




let V={};

V.init = function(){
    let category = document.querySelector('#menu');
    category.addEventListener('click', C.handler_clickOnMenucategory);
}





let C = {}

C.init = async function(){   
    let data = await ProductData.fetchAll();
    let datacategory = await CategoryData.fetchAll();
    let dataoption = await OptionData.fetchAll();
    let nav = NavView.render(data);
    
    let menuitem =await menu(datacategory);
    document.querySelector("#main").innerHTML = nav;
    document.querySelector("#contentmenu").innerHTML = menuitem;
    /*document.querySelector("body").innerHTML = nav;*/
    V.init();
console.log(ProductData.fetchAll());
   
}


C.handler_clickOnMenucategory = async function(ev) {
   /** try {
        if (ev.target.dataset.filter !== undefined) {
            let value = ev.target.dataset.filter;

            let allData = await ProductData.fetchAll();
            let data;

            if (value === 'all') {
                data = allData;
            } else {
                let category = parseInt(value);
                data = allData.filter(p => p.category === category);
            }
            
            let htmlcard = await cardshop(data);
            document.querySelector("#card").innerHTML = htmlcard;
        }
    } catch (error) {
        console.error("Erreur dans handler_clickOnMenucategory :", error);
    }*/

        try {
            if (ev.target.dataset.filter !== undefined) {
                let value = ev.target.dataset.filter;
    
                let allData = await OptionData.fetchAll();
                let data;
    
                if (value === 'all') {
                    data = M.menuoption0;
                } else {
                    let category = parseInt(value);
                    data = allData.filter(p => p.category === category);
                }
                
                let htmlcard = await option(data);
                document.querySelector("#option-content").innerHTML = htmlcard;
            }
        } catch (error) {
            console.error("Erreur dans handler_clickOnMenucategory :", error);
        }
}



C.init();




