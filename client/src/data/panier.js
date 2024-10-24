import {getRequest,postRequest,deleteRequest,patchRequest} from '../lib/api-request.js';


let PanierData = {
    items : [],
    total : 0,
    nb: 0
};


PanierData.get = function(){
    return {
        items : [...this.items],
        total : this.total,
        nb : this.nb
    }
}



PanierData.addOrIncrease = function(item){
    let existingItem = this.items.find(i => i.id == item.id);
    if (existingItem) {
        existingItem.number++;
        this.total += existingItem.price;
        
    } else {
        item.number = 1; // Initialize the number property
        this.items.push(item);
        this.total += item.price;
        
    }
    this.nb++;
};

// genere une méthode delete qui supprime tout les élément
PanierData.delete = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total -= item.price * item.number;
        this.nb -= item.number;
        this.items = this.items.filter(item => item.id != itemid);
    }
};

//genere une méthode clear qui supprime tout les éléments
PanierData.clear = function(){
    this.items = [];
    this.total = 0;
    this.nb = 0;
};

// genere une méthode remove qui diminue de 1 la quantité d'un élément d'identifiant itemid
PanierData.remove = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    console.log(item);
    if(item){
        this.total -= item.price;
        this.nb--;
        item.number--;
        if(item.number == 0){
            this.delete(itemid);
        }
    }
    console.log(item);
};


PanierData.fetch = async function(id){
    let data = await getRequest('panier/'+id);
    return data==false ? PanierData.pop() : [data];
}

PanierData.fetchAll = async function(){
    let data = await getRequest('panier');
    return data;
}

//genere la méthode save qui envoie le panier au serveur
PanierData.save = async function(data) {
    // Assuming the server expects an array of items for the 'panier' endpoint
    let results = [];
    for (const item of data) {
        let res = await postRequest('panier', JSON.stringify(item)); // Send each item as JSON
        results.push(res); // Collect responses for each item if needed
    }
    return results; // Return all responses if needed
}


export {PanierData};
