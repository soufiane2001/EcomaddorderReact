import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';

function Commande() {
    const navigate = useNavigate();
    const { sommetotal,ajoutercommandes } = useContext(ProductContext);
    var [prixtotal,setPrixtotal]=useState(0) 
    
    var [nom,setNom]=useState("") 
    var [prenom,setPrenom]=useState("") 
    var [adress,setAdress]=useState("") 


useEffect(()=>{
setPrixtotal(sommetotal)



},[])

var finir=()=>{
if(prenom.length>3 && nom.length>3 && adress.length>4){

var id=Math.floor(Math.random()*7246)

ajoutercommandes(id,nom,prenom,adress,prixtotal)
navigate("/")

}
else{
alert("veuillez remplir tout les champs")

}

}




  return (
    <>
    <div>
        
        <h1 class="card-title" style={{fontSize:28}}> prix total : { parseFloat(prixtotal).toFixed(2)}$
         </h1>
    
    </div>






<div className='container p-5 '>

    <input  
            value={nom}
              placeholder='Nom'
              onChange={(e) => setNom(e.target.value)} 
               type="text" class="form-control  w-75 ml-4 mt-5" />

<input  
            value={prenom}
              placeholder='Prenom'
              onChange={(e) => setPrenom(e.target.value)} 
               type="text" class="form-control  w-75 ml-4 mt-5" />
    <input  
            value={adress}
              placeholder='Adress'
              onChange={(e) => setAdress(e.target.value)} 
               type="text" class="form-control  w-75 ml-4 mt-5" />



<button onClick={()=>{finir()}} className='btn btn-danger mt-5 ml-4'>Commander</button>
</div>

</>  )
}

export default Commande