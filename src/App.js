import './App.css';
import React, { createContext, useEffect, useState } from 'react';


import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Products';

import Panier from './Panier';

import { ProductProvider } from './ProductContext';

import Commande from './Commande';



function App() {

 




  return (
<>


    <ProductProvider>
    
    <Router>

            <Header/>
      
      <Routes>
            
        
            <Route path='/' element={<Products />} />
        
            <Route path="/Panier" element={<Panier />} />
     
            <Route path="/Commande" element={<Commande />} />
      
     
   
      </Routes>
    


  </Router>
</ProductProvider>

</>
  )

}

export default App;