import { genericRenderer } from "../../lib/utils.js";

const templateFile = await fetch("src/ui/content-card/template.html.inc");
const template = await templateFile.text();

let contentView = {
    render: function(data){
        return genericRenderer(template, { items: data });
    }
}

export { contentView };