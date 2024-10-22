import { PanierItemsView } from "../ui/panieritems/index.js";

let panieritems = async function (data) {
  let template = await PanierItemsView.templategetter();
  let html = "";
  for (const panieritem of data) {
  html += template.replaceAll("{{image}}", panieritem.image);
  html = html.replaceAll("{{price}}", panieritem.price);
  html = html.replaceAll("{{name}}", panieritem.name);
  html = html.replaceAll("{{stock}}", panieritem.number);
  }

  return html;
};

export { panieritems };
