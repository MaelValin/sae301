import {getRequest} from '../lib/api-request.js';


let PanierData = {};



PanierData.fetch = async function(id){
    let data = await getRequest('panier/'+id);
    return data==false ? PanierData.pop() : [data];
}

PanierData.fetchAll = async function(){
    let data = await getRequest('panier');
    return data;
}


export {PanierData};