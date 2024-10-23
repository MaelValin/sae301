import { genericRenderer } from "../../lib/utils.js"; 

let FiltreView = {};

FiltreView.templategetter = async function(){
    const templateFile = await fetch("src/ui/filtre/template.html.inc");
    const template = await templateFile.text();
    return template;
};

FiltreView.render = async function(data){
    const template = await this.templategetter();
    return genericRenderer(template, { items: data });
};

let toggleFiltres = function(id){
    let layout = document.getElementById(id);
    if (layout.classList.contains('hidden')){
        layout.classList.remove('hidden');
    } else {
        layout.classList.add('hidden');
    }
};

let toggleList = function(id, button) {
    let list = document.getElementById(id);
    let arrow = button.querySelector('.arrow');
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.classList.add('flex');
        arrow.src = "src/assets/svg/filtre/arrow-toggle.svg";
    } else {
        list.classList.add('hidden');
        list.classList.remove('flex');
        arrow.src = "src/assets/svg/filtre/arrow.svg";
    }
};

window.toggleFiltres = toggleFiltres;
window.toggleList = toggleList;

export {FiltreView, toggleFiltres, toggleList};
