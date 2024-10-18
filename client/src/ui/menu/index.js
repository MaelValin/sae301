import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/menu/template.html.inc");
const template = await templateFile.text();


/*let PubfullView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        
        return html;
    }

}*/
let MenuView = {
    render: function(data){
        let combinedData = { items: data };
        let html = genericRenderer(template, combinedData);
        return html;
    }
}

export {MenuView};