let DetailProductView = {}

DetailProductView.templategetter = async function(){
    const templateFile = await fetch("src/ui/detailproduct/template.html.inc");
    const template = await templateFile.text();
    return template;
}



export {DetailProductView};