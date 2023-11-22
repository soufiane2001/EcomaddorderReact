import React, { useContext, useEffect, useState ,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ProductContext } from './ProductContext';


function Products() {

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [text,setText]=useState("")

  const { clothes,panier,addToCart,filtrerclothes  ,getData  } = useContext(ProductContext);
  const buttonRef = useRef(null);
var [products,setProducts]=useState([])


  useEffect(()=>{
    getData()
setProducts(clothes)

  },[])
 
  

  
  
    return (

  <>

  <input  
              value={text}
              
              placeholder='Recherche'
              
              onChange={(e) => setText(e.target.value)} 
              
              onKeyUp={()=>{filtrerclothes(text)}}

          type="text" class="form-control  w-25 ml-4 mt-5" />




  <div className='d-flex flex-wrap justify-content-around mt-5'>
  {clothes.length>0 ? (clothes.map((x,key)=>{
  return (
  <div key={key} class="card mt-5" style={{width:350}}>
   
    <div class="card-body">
    <h4 class="card-title" style={{fontSize:28}}>{x.name}</h4>
      <p class="card-text" style={{fontSize:24}}>{x.price}$</p>
      <p class="card-text" style={{fontSize:24}}>Stock : {x.inventory}</p>
     
      <button style={{fontSize:20}} class="btn btn-warning" onClick={()=>{addToCart(x)}}>ajouter au panier</button>
    </div>
  </div>
  
  )
  
  })):(
    <h1>waiting</h1>
  )
  
  }</div>
  </>
    )
  
}

export default Products