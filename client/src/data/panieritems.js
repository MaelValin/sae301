import { PanierItemsView } from "../ui/panieritems/index.js";

let panieritems = async function (datapanier,dataproduct) {
  let template = await PanierItemsView.templategetter();
  let html = "";
  for (const panieritem of dataproduct) {
    let itemHtml = template.replaceAll("{{image}}", panieritem.image);
    itemHtml = itemHtml.replaceAll("{{price}}", panieritem.price);
    itemHtml = itemHtml.replaceAll("{{name}}", panieritem.name);
    const correspondingPanierItem = datapanier.find(item => item.id === panieritem.id);
    if (correspondingPanierItem) {
      itemHtml = itemHtml.replaceAll("{{stock}}", correspondingPanierItem.number);
    } else {
      itemHtml = itemHtml.replaceAll("{{stock}}", "0");
    }
    html += itemHtml;
  }

  return html;
};

export { panieritems };
