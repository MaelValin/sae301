let ProfiluserView = {};


ProfiluserView.templategetter = async function(){
    const templateFile = await fetch("src/ui/profiluser/template.html.inc");
    const template = await templateFile.text();
    return template;
}

export {ProfiluserView};