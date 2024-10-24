import { ProfiluserView } from "../ui/profiluser/index.js";

let profiluser = async function (data) {
  let template = await ProfiluserView.templategetter();
  
    let html = template.replaceAll("{{nom}}", data); 
    

  return html;
};

export { profiluser };
