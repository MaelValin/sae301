import { genericRenderer } from "../../lib/utils.js"; 


let cardshopView = {}

cardshopView.templategetter = async function(){
    const templateFile = await fetch("src/ui/cardshop/template.html.inc");
    const template = await templateFile.text();
    return template;
}
/*
let cardshopView = {
    render: function(data){
        return genericRenderer(template, { items: data });
    }
}*/



export {cardshopView};