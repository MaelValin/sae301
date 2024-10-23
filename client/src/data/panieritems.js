import { PanierItemsView } from "../ui/panieritems/index.js";

let panieritems = async function (datapanier,dataproduct) {
  let template = await PanierItemsView.templategetter();
  let html = "";
  
  for (const panieritem of dataproduct) {
    let itemHtml = template.replaceAll("{{image}}", panieritem.image);
    itemHtml = itemHtml.replaceAll("{{price}}", panieritem.price);
    itemHtml = itemHtml.replaceAll("{{id}}", panieritem.id_product);
    itemHtml = itemHtml.replaceAll("{{name}}", panieritem.name);
    
    const correspondingPanierItem = datapanier.find(items => items.id === panieritem.id_product);
    
    if (correspondingPanierItem) {
      itemHtml = itemHtml.replaceAll("{{stock}}", correspondingPanierItem.number);
      
    /*} else {
      itemHtml = itemHtml.replaceAll("{{stock}}", "0");*/
       // Dataproduct id
    }
    html += itemHtml;
  }

  return html;
};

export { panieritems };
