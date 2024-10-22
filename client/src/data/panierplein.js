import { PanierView } from "../ui/panier/index.js";

let panier = async function (data) {
  let template = await PanierView.templategetter();
  let html = "";
  
  html += template.replace(/{{total}}/g, data.reduce((sum, item) => sum + (item.price * item.number), 0));
 
  

  return html;
};

export { panier };
