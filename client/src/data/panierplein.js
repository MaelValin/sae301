import { PanierView } from "../ui/panier/index.js";

let panier = async function (data) {
  let template = await PanierView.templategetter();
  let html = "";
  for (const panieritem of data) {
  html += template.replaceAll("{{total}}", data.reduce((sum, item) => sum + item.price, 0));
 
  }

  return html;
};

export { panier };
