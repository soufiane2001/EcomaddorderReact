import {React,useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from './ProductContext';


function Header(){

  const { panier,nbclick} = useContext(ProductContext);
  const [total,setTotal]=useState(0);
  const [de,setde]=useState(false);
  










  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li style={{fontSize:24}} >
  <Link to="/">Home</Link>
    </li>
   
    <li style={{fontSize:27}} class="nav-item ml-5 ">
    <Link to="/Panier"><i  class="fa">&#xf07a;</i> {nbclick} </Link>

    </li>


   
  </ul>
</nav>
  )
}

export default Header