let PanierView = {};


PanierView.templategetter = async function(){
    const templateFile = await fetch("src/ui/panier/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {PanierView};