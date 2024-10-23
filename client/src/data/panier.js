import {getRequest} from '../lib/api-request.js';


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


PanierData.add = function(item){
    this.items.push(item);
    this.total += item.price;
    this.nb++;
};

// genere une méthode delete qui supprime un élément d'identifiant itemid
PanierData.delete = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total -= item.price * item.number;
        this.nb -= item.number;
        this.items = this.items.filter(item => item.id != itemid);
    }
}

// genere une méthode remove qui diminue de 1 la quantité d'un élément d'identifiant itemid
PanierData.remove = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total -= item.price;
        this.nb--;
        item.number--;
        if(item.number == 0){
            this.delete(itemid);
        }
    }
};

PanierData.increase = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total += item.price;
        this.nb++;
        item.number++;
    }
};

PanierData.fetch = async function(id){
    let data = await getRequest('panier/'+id);
    return data==false ? PanierData.pop() : [data];
}

PanierData.fetchAll = async function(){
    let data = await getRequest('panier');
    return data;
}


export {PanierData};