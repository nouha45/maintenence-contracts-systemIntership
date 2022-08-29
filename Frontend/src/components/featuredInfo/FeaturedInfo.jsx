import React from 'react'
import "./featuredInfo.css"
import {ArrowUpward, ArrowDownward} from '@material-ui/icons'
import {useEffect, useState} from 'react';



export default function () {
    
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">service provider</span>

            
                    <div>
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>567</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
           
        </div>

        <div className="featuredItem">
        <span className="featuredTitle">Equipements</span>
       
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>468</span>
                <span className="featuredPatientRate">
                    
                +11<ArrowUpward  className='featuredIcon '/>
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
            
           
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Contrats de maintenance</span>
           
             
                    <div>
            
            <div className='featuredPatientsContainer'>
                <span className='featuredPatients'>67</span>
                <span className="featuredPatientRate">
                    
                -13<ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className='featuredSub'>Compared to  last month</span>
            </div>
           
        </div>
    </div>
  )
}