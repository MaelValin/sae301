import { panierView } from "../ui/panier/index.js";

let panier = async function (data) {
  let template = await panierView.templategetter();
  let html = "";
  for (const option of data) {
    html += template.replaceAll("{{id}}", option.category);
  }

  return html;
};

export { panier };
