import axios from "axios";

const ServiceProviders_API_BASE_URL =`http://localhost:8080/prestataires/`


class PrestataireService{
    getPrestataires(){
        return axios.get(ServiceProviders_API_BASE_URL + "allProviders");

    }

    deletePrestataire(nom){
        return axios.post(ServiceProviders_API_BASE_URL + nom);
    
    }

}


export default new PrestataireService()