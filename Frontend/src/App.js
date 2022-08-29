import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import FeaturedInfo from './components/featuredInfo/FeaturedInfo'
import WidgetLg from "./components/widgetLg/WidgetLg"
import EquipmentList from './pages/equipmentList/EquipmentList'
import EquipementDetails from './pages/equipementDetails/EquipementDetails'
import ReactDOM from "react-dom/client";
import AddEquipement from './pages/addEquipement/AddEquipement'
import UpdateEquipement from './pages/updateEquipement/UpdateEquipement'
import AddContract from './pages/addContract/AddContract'
import ContractsList from './pages/contractsList/ContractsList'
import EditContract from './pages/editContract/EditContract'
import ServiceProvidersList from './pages/serviceProviders/ServiceProvidersList'
import "./app.css"
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react'

function App() {

  
  
  return (
    <div className="App">
      <Topbar/>
     <div className="container">
      
      <BrowserRouter>
      <Sidebar/>
     
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/equipmentList" element={<EquipmentList/>}/>
        <Route path='/equipementDetails/:numSerie' element={<EquipementDetails/>}/>
        <Route path="/addEquipement" element={<AddEquipement/>}/>
        <Route path="/updateEquipement/:numSerie" element={<UpdateEquipement/>}/>
        <Route path="/addContract/:numSerie" element={<AddContract/>}/>
        <Route path="/listContracts/:numSerie" element={<ContractsList/>}/>
        <Route path="/editContract/:marche" element={<EditContract/>}/>
        <Route path="/listPrestataire" element={<ServiceProvidersList/>}/>


      </Routes>
      </BrowserRouter>
     
     </div>
     
    </div>
  );
}

export default App;
