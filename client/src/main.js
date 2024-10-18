import { ProductData } from "./data/product.js";
import { cardshop} from "./data/cardshop.js";
import { ProductView } from "./ui/product/index.js";
import { PubfullView } from "./ui/pubfull/index.js";
import { NavView } from "./ui/nav/index.js";
import { MenuView } from "./ui/menu/index.js";
import { DetailProductView } from "./ui/detailproduct/index.js";






let C = {}

C.init = async function(){   
    let data = await ProductData.fetchAll();
    let html = NavView.render(data);
    let htmlcard =await cardshop(data);
    document.querySelector("#main").innerHTML = html;
    document.querySelector("#card").innerHTML = htmlcard;

}


C.init();




