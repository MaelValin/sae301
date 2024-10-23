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
    this.total += item.prix;
    this.nb++;
};

// genere une méthode delete qui supprime un élément d'identifiant itemid
PanierData.delete = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total -= item.prix * item.quantite;
        this.nb -= item.quantite;
        this.items = this.items.filter(item => item.id != itemid);
    }
}

// genere une méthode remove qui diminue de 1 la quantité d'un élément d'identifiant itemid
PanierData.remove = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total -= item.prix;
        this.nb--;
        item.quantite--;
        if(item.quantite == 0){
            this.delete(itemid);
        }
    }
};

PanierData.increase = function(itemid){
    let item = this.items.find(item => item.id == itemid);
    if(item){
        this.total += item.prix;
        this.nb++;
        item.quantite++;
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