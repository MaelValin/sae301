import { FiltreView } from "../ui/filtre/index.js";

let filtre = async function (data) {
  
  let template = await FiltreView.templategetter();
  
  let html = "";
 
    html = template.replace("{{number}}", data);
    
    
  

  return html;
  
};



export { filtre };
