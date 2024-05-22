import React from 'react';
import {Routes, Route} from 'react-router-dom'

import NavBar from './suby/components/NavBar.jsx';
import ItemsDisplay from './suby/components/ItemsDisplay.jsx';
import Chains from './suby/components/Chains.jsx';
import FirmCollections from './suby/components/FirmCollections.jsx';
import './App.css';
import ProductMenu from './suby/components/ProductMenu.jsx';
import LandingPage from './suby/pages/LandingPage.jsx';

const App=()=>{
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <LandingPage></LandingPage>
         }/>
        <Route path='/products/:firmId/:firmName' element={
          <ProductMenu></ProductMenu>
        }/>
        
                </Routes>
        </div>
      
  )
}


  export default App;