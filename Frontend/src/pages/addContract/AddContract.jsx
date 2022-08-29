import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ContractService from '../../services/ContractService'
import '../updateEquipement/updateEquipement.css'

function AddContract() {
  
    const[marche, setMarche]= useState('')
    const[prestataire, setPrestataire]= useState('')
    const[intervenant, setIntervenant]=useState('')
    const[date_intervention, setDate_intervention]= useState('')
    const[action, setAction]= useState('')
    const[commentaire, setCommentaire]=useState('')

    const history = useNavigate();
    const {numSerie} = useParams();
    console.log(numSerie)
    let equipement_num_serie= numSerie

    const saveContract = (e) => {
        console.log('ana dkhlt l save')
        e.preventDefault();

        const contract = {marche, prestataire,intervenant,date_intervention,action,commentaire,equipement_num_serie}

        
            ContractService.addContract(contract).then((response) => {
                console.log('ana nouhaila')
                history('/equipementDetails/'+ numSerie)
            }).catch(error => {
                console.log(error)
            })

        
        
    }

    
  return (
    
    <div className="container1">
        <div className="title1">Edit informations</div>
        <form  action="#">
            <div className="equipement-details">
                <div className="input-box">
                    <span className="details">Marche</span>
                    <input
                    value={marche}
                    onChange = {(e) => setMarche(e.target.value)}
                     type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Numero de serie</span>
                    <input 
                    value={numSerie}
                    type="text" placeholder="Enter the seriel number" required/>
                </div>
                <div className="input-box">
                    <span className="details">Prestataire</span>
                    <input
                    value={prestataire}
                    onChange = {(e) => setPrestataire(e.target.value)}
                     type="text" placeholder="Enter the designation" required/>
                </div>
                <div className="input-box">
                    <span className="details">Date d'intervention</span>
                    <input 
                    value={date_intervention}
                    onChange = {(e) => setDate_intervention(e.target.value)}
                    type="text" placeholder="Enter the brand" required/>
                </div>
                <div className="input-box">
                    <span className="details">Action effectuee</span>
                    <input 
                    value={action}
                    onChange = {(e) => setAction(e.target.value)}
                    type="text" placeholder="Enter the model" required/>
                </div>
                
                <div className="input-box">
                    <span className="details">Commentaire</span>
                    <input 
                    value={commentaire}
                    onChange = {(e) => setCommentaire(e.target.value)}
                    type="text" placeholder="Enter the name of the equipment" required/>
                </div>
                <div className="input-box">
                    <span className="details">Intervenant</span>
                    <textarea
                    value={intervenant}
                    onChange = {(e) => setIntervenant(e.target.value)}
                     type="textarea" rows="5" cols="50" placeholder="Enter the details" required/>
                </div>
            </div>
            <div className="button-edit">
                <input type="submit"  onClick = {(e) => saveContract(e)} value="Add"/>
            </div>
        </form>
    </div>
  )
}

export default AddContract