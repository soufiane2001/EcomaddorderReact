import React, { useContext,useState , useEffect } from 'react'
import { ProductContext } from './ProductContext';
import { Link, useNavigate } from 'react-router-dom';

function Panier() {
  const [count,setcount]=useState([1])
  const navigate = useNavigate();
    const { panier,supprimer,incriment,decriment} = useContext(ProductContext);


    
  return (
    <>

{panier.length>0 &&(
   <Link to='/Commande' className='btn btn-success'>Finir la commande</Link>
)
}
    <div className='d-flex flex-wrap justify-content-around mt-5'>
  {panier.length>0 ? (panier.map((x,key)=>{
  return (
  <div key={key} class="card" style={{width:400}}>
   
    <div class="card-body">
      <h4 class="card-title" style={{fontSize:28}}>{x.name}</h4>
      <p class="card-text" style={{fontSize:24}}>{x.price}$</p>
      <p class="card-text" style={{fontSize:24}}>Stock : {x.inventory}</p>
    
    <h5 class="card-text" style={{fontSize:20}}>quantité : {x.quantité}</h5>
    <button class="btn btn-primary" onClick={()=>{incriment(x)}} >+</button>
     <button class="btn btn-warning ml-2"  style={{pointerEvents:x.quantité==1 && 'none' }} onClick={()=>{decriment(x)}}>-</button>
    <button   class="btn btn-danger ml-5" onClick={()=>supprimer(x.id,x.quantité)}>
    <i style={{fontSize:27}} class="fa">&#xf014;</i>
    </button>
   
    
    </div>
  </div>
  
  )
  
  })):(
    <h1>waiting</h1>
  )
  
  }
  
  </div></>
  )
}

export default Panier