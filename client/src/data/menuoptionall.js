import { OptionallView } from "../ui/optionall/index.js";

let optionall = async function (data) {
  let template = await OptionallView.templategetter();
  let html = "";
  for (const option of data) {
    html += template.replaceAll("{{id}}", option.category);
  }

  return html;
};

export { optionall };
