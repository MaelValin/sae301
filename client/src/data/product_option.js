import {getRequest} from '../lib/api-request.js';


let ProductOptionData = {};



ProductOptionData.fetch = async function(id){
    let data = await getRequest('productoption/'+id);
    return data==false ? ProductOptionData.pop() : [data];
}

ProductOptionData.fetchAll = async function(){
    let data = await getRequest('productoption');
    return data;
}


export {ProductOptionData};