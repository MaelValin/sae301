import {deleteRequest} from '../lib/api-request.js';


let PanierDelette = {};



PanierDelette.delette = async function(data){
    let response = await deleteRequest('panier', data);
    return response;
}


export {PanierDelette};

