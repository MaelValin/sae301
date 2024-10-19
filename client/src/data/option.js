import {getRequest} from '../lib/api-request.js';


let OptionData = {};



OptionData.fetch = async function(id){
    let data = await getRequest('option/'+id);
    return data==false ? OptionData.pop() : [data];
}

OptionData.fetchAll = async function(){
    let data = await getRequest('option');
    return data;
}


export {OptionData};