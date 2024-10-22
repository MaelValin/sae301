let OptionallView = {};


OptionallView.templategetter = async function(){
    const templateFile = await fetch("src/ui/optionall/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {OptionallView};