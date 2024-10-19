let MenuView = {};


MenuView.templategetter = async function(){
    const templateFile = await fetch("src/ui/menu/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {MenuView};