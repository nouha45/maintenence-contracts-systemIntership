import React from 'react'
import {useEffect, useState} from 'react';
import "./widgetLg.css"




export default function WidgetLg() {
 
    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}> {type}</button>
      }



  
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">les nouveaux equipements</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">L'equipement</th>
          <th className="widgetLgTh">Numero de serie</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Modele</th>
          <th className="widgetLgTh">Marque</th>
          <th className="widgetLgTh">Details</th>
          
        </tr>

       
        
              <tr className="widgetLgTr">
          <td className="widgetLgPatient">
           
            <span className="widgetLgName"> 
            </span>
            <span className="widgetLgName"> 
            </span></td>
            <td className="widgetLgDate"> </td>
           
           

          
            </tr>  
        
           
            
      </table>
    </div>)
  
}