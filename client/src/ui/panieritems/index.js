let PanierItemsView = {};


PanierItemsView.templategetter = async function(){
    const templateFile = await fetch("src/ui/panieritems/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {PanierItemsView};