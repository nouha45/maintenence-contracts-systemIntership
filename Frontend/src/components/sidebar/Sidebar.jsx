import React from 'react'
import "./sidebar.css"
import {LineStyle, InsertInvitation, People} from "@material-ui/icons"
import RouterIcon from '@mui/icons-material/Router';
import {Link} from "react-router-dom";
import { Logout} from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';



export default function Sidbar() {


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon"/>
                  Home
              </li>
                
                
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle"> Quick Menu</h3>
            <ul className="sidebarList">
             <li className="sidebarListItem" >
            
                  <People className="sidebarIcon"/>
                  service provider management
                </li>
                
             <Link to="/equipmentList">    <li className="sidebarListItem" >
                  <RouterIcon className="sidebarIcon"/>
                 equipments management
                </li></Link>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Authentication</h3>
            <ul className="sidebarList">
             <li className="sidebarListItem" >
            
                  <LockOpenIcon className="sidebarIcon"/>
                  Login
                </li>
                
                 <li className="sidebarListItem" >

                  <AssignmentIndIcon className="sidebarIcon"/>
                Register
                </li>
                
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                
                
                <li className="sidebarListItem">
                  <Logout className="sidebarIcon"/>
                  Logout
                  
                </li>
                
            </ul>
        </div>
      </div>
      
    </div>
  )
}