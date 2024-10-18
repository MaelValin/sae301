import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/nav/template.html.inc");
const template = await templateFile.text();


/*let NavView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        
        return html;
    }

}*/

/*let NavView = {
    render: function(data){
        let combinedData = { items: data };
        let html = genericRenderer(template, combinedData);
        return html;
    }
}*/

let NavView = {
    render: function(data){
        return genericRenderer(template, { items: data });
    }
}

export {NavView};