import {getRequest} from '../lib/api-request.js';


let CategoryData = {};



CategoryData.fetch = async function(id){
    let data = await getRequest('category/'+id);
    return data==false ? CategoryData.pop() : [data];
}

CategoryData.fetchAll = async function(){
    let data = await getRequest('category');
    return data;
}


export {CategoryData};