import {getRequest,postRequest,deleteRequest,patchRequest} from '../lib/api-request.js';

let ProfilData = {};

ProfilData.fetch = async function(id){
    let data = await getRequest('profil/'+id);
    return data==false ? ProfilData.pop() : [data];
}

ProfilData.fetchAll = async function(){
    let data = await getRequest('profil');
    return data;
}

//genere la méthode save qui envoie le Profil au serveur
ProfilData.save = async function(data) {
    // Assuming the server expects an array of items for the 'Profil' endpoint
    console.log(data);
        let res = await postRequest('profil', JSON.stringify(data)); // Send each item as JSON
         // Collect responses for each item if needed
         console.log(res);
    return res; // Return all responses if needed
}


export {ProfilData};