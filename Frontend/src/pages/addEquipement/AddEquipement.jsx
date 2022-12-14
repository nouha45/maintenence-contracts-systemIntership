import React, {useState} from 'react'
import {useFormik} from "formik"
import {useNavigate} from 'react-router-dom'
import './addEquipement.css'
import basicSchema from '../../schemas'
import EquipementService from '../../services/EquipementService'

function AddEquipement() {

    const history = useNavigate();

    const onSubmit= async (values, actions) =>{
        console.log("submitted")

        await new Promise((resolve) => setTimeout(resolve,1000))
    actions.resetForm()
    EquipementService.addEquipement(values).then((response) => {
        history('/equipmentList')
    }).catch(error => {
        console.log(error)
    })

    }

     const {values,errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            nom:"",
            num_serie: "",
            designation: "",
            marque:"",
            madele:"",
            details:"",
            date:""

        },
        validationSchema:  basicSchema,
        onSubmit
     });

     let class1= "in-add"

  return (
    <form  onSubmit ={handleSubmit} autoComplete="off">
        <label  className="label-add"  htmlFor="nom">Equipement</label>
    <div className="in-add">   <input 
        value={values.nom}
        onChange={handleChange}
        onBlur={handleBlur}
        className= {errors.nom && touched.nom ? "input-error": ""} 
        id="nom" type="text" placeholder="Enter the name of equipment"/>
        {errors.nom && touched.nom && <p className="error">{errors.nom}</p>}</div>

        <label className="label-add"  htmlFor="num_serie">Seial number</label>
        <div className="in-add">      <input 
         value={values.num_serie}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.num_serie && touched.num_serie ? "input-error": ""}
        id="num_serie" type="number" placeholder="Enter the serial number"/>
         {errors.num_serie && touched.num_serie && <p className="error">{errors.num_serie}</p>}</div>

<label className="label-add"  htmlFor="designation">Designation</label>
<div className="in-add">      <input 
         value={values.designation}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.designation && touched.designation ? "input-error": ""}
        id="designation" type="text" placeholder="Enter the designation"/>
         {errors.designation && touched.designation && <p className="error">{errors.designation}</p>}</div>


        <label  className="label-add" htmlFor="marque" >Marque</label>
        <div className="in-add">         <input 
         value={values.marque}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.marque && touched.marque ? "input-error": ""}
        id="marque"  type="text" placeholder="Enter the brand"/>
         {errors.marque && touched.marque && <p className="error">{errors.marque}</p>}</div>
     <label className="label-add"  htmlFor="madele" >Modele</label>
     <div className="in-add">   <input 
         value={values.madele}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.madele && touched.madele ? "input-error": ""}
        id="madele"  type="text" placeholder="Enter the model"/>
         {errors.madele && touched.madele && <p className="error">{errors.madele}</p>}</div>

        <label  className="label-add" htmlFor="details" >Details</label>
        <div className="in-add">       <input 
         value={values.details}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.details && touched.details ? "input-error": ""}
         id="details"  type="textarea" placeholder="Enter the details"/>
          {errors.details && touched.details && <p className="error">{errors.datails}</p>}</div>

        <label className="label-add"  htmlFor="date" >Date</label>
        <div className="in-add">      <input 
         value={values.date}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.date && touched.date ? "input-error": ""}
        id="date"  type="text" placeholder="Enter the date"/>
         {errors.date && touched.date && <p className="error">{errors.date}</p>}</div>
        <button className="submit-button"  disabled={isSubmitting} type="submit">Add</button>




        
          
    </form>
  )
}

export default AddEquipement
