import {patchRequest} from '../lib/api-request.js';


let PanierUpdate = {};



PanierUpdate.update = async function(data){
    let response = await patchRequest('panier', data);
    return response;
}


export {PanierUpdate};

