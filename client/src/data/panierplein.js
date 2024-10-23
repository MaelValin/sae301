import { PanierView } from "../ui/panier/index.js";

let panier = async function (data) {
  let template = await PanierView.templategetter();
  let html = "";
  
  html += template.replace('{{total}}', data.total);
 
  

  return html;
};

export { panier };
