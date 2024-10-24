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

ProfilData.save = async function (data) {
    try {
        let response = await postRequest('profil', JSON.stringify(data)); // Use postRequest here
console.log(response);
        if (!response) {
            console.error('Server responded with an error');
            return false;
        }

        return response;
    } catch (error) {
        console.error('Error in ProfilData.add:', error);
        return false;
    }
};


export {ProfilData};