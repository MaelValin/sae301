import { MenuView } from "../ui/menu/index.js";

let menu = async function (data) {
  let template = await MenuView.templategetter();
  let html = "";
  for (const category of data) {
    html += template.replace("{{name}}", category.name);

    html = html.replace("{{image}}", category.image);

    html = html.replace("{{alt}}", category.name);
    html = html.replaceAll("{{id}}", category.id);
  }

  return html;
};

export { menu };
