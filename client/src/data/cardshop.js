import { cardshopView } from "../ui/cardshop/index.js";

let cardshop = async function (data) {
  let template = await cardshopView.templategetter();
  let html = "";
  for (const product of data) {
    html += template.replace("{{name}}", product.name);

    html = html.replace("{{price}}", product.price);
    html = html.replace("{{id}}", product.id_product);

    html = html.replace("{{image}}", product.image);

    html = html.replace("{{subtitle}}", product.subtitle);
  }

  return html;
};

export { cardshop };
