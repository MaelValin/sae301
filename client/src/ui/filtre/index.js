import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/filtre/template.html.inc");
const template = await templateFile.text();


/*let PubfullView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        
        return html;
    }

}*/
/*let cardshopView = {
    render: function(data){
        let combinedData = { items: data };
        let html = genericRenderer(template, combinedData);
        return html;
    }
}*/

let toggleFiltres = function(id){
    let layout = document.getElementById(id);
    if (layout.classList.contains('hidden')){
        layout.classList.remove('hidden');
    } else {
        layout.classList.add('hidden');
    }
}

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
}

let FiltreView = {
    render: function(data){
        return genericRenderer(template, { items: data });
    }
}

window.toggleFiltres = toggleFiltres;
window.toggleList = toggleList;

export {FiltreView, toggleFiltres, toggleList};