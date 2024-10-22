import {postRequest} from '../lib/api-request.js';


let PanierAdd = {};



PanierAdd.add = async function(data){
    let response = await postRequest('panier', data);
    return response;
}


export {PanierAdd};

