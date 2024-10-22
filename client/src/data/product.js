import {getRequest, postRequest} from '../lib/api-request.js';


let ProductData = {};



ProductData.fetch = async function(id){
    let data = await getRequest('products/'+id);
    return data==false ? ProductData.pop() : [data];
}

ProductData.fetchAll = async function(){
    let data = await getRequest('products');
    return data;
}
/*
ProductData.add = async function(data){
    
    data = {
        name: "name",
        price: 10,
        description: "description",
        image: "image",
        stock: 10
    }
    
    let response = await postRequest('products', data);
    return response;
}*/


export {ProductData};