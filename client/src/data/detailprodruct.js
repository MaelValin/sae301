import { DetailProductView } from "../ui/detailproduct/index.js";

let detailproduct = async function (data) {
  
  let template = await DetailProductView.templategetter();
  
  let html = "";
 
    html += template.replace("{{name}}", data.name);
    
    html = html.replace("{{price}}", data.price);
    html = html.replaceAll("{{id}}", data.id_product);

    html = html.replace("{{image}}", data.image);

    html = html.replace("{{subtitle}}", data.subtitle);
    html = html.replace("{{description}}", data.description);
  

  return html;
  
};



export { detailproduct };
