import { OptionView } from "../ui/option/index.js";

let option = async function (data) {
  let template = await OptionView.templategetter();
  let html = "";
  for (const option of data) {
    html += template.replace("{{name}}", option.name);

    html = html.replace("{{image}}", option.image);

    html = html.replace("{{alt}}", option.name);
    html = html.replace("{{id}}", option.id);
  }

  return html;
};

export { option };
