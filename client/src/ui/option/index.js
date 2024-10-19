let OptionView = {};


OptionView.templategetter = async function(){
    const templateFile = await fetch("src/ui/option/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {OptionView};