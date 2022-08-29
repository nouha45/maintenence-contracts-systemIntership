import axios from "axios";
import React from 'react'

const EQUIPEMENT_API_BASE_URL =`http://localhost:8080/api/v1/`



class EquipementService {
    getEquipements(){
        return axios.get(EQUIPEMENT_API_BASE_URL + "equipements");

    }

    getEquipement(num_serie){
        return axios.get(EQUIPEMENT_API_BASE_URL + num_serie);

       
    }
    addEquipement(values){
        return axios.post(EQUIPEMENT_API_BASE_URL + "equipement" , values);
    }

    deleteEquipement(num_serie){
        return axios.delete(EQUIPEMENT_API_BASE_URL+num_serie);
    
    }

    updatePatient(num_serie, equipement){
        return axios.put(EQUIPEMENT_API_BASE_URL + num_serie, equipement);
    }



}



export default new EquipementService()
