import { genericRenderer } from "../../lib/utils.js"; 

// Fetch the template file and get its text content
const templateFile = await fetch("src/ui/footerhaut/template.html.inc");
const template = await templateFile.text();

// Function to toggle the visibility of lists
let toggleList = function(id, button) {
    let list = document.getElementById(id);
    let arrow = button.querySelector('.arrow');
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        arrow.src = "src/assets/svg/footer/arrow-toggle.svg";
        console.log(arrow.src);
    } else {
        list.classList.add('hidden');
        arrow.src = "src/assets/svg/footer/arrow.svg";
    }
}

// Attach toggleList to the window object to make it globally accessible
window.toggleList = toggleList;

// FooterHautView object with a render function
let FooterHautView = {
    render: function(data){
        return genericRenderer(template, { items: data });
    }
}

// Export the FooterHautView and toggleList function
export { FooterHautView, toggleList };