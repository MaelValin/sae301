import {getRequest} from '../lib/api-request.js';


let ProductData = {};



ProductData.fetch = async function(id){
    let data = await getRequest('products/'+id);
    return data==false ? ProductData.pop() : [data];
}

ProductData.fetchAll = async function(){
    let data = await getRequest('products');
    return data;
}


export {ProductData};