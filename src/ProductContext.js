// ProductContext.js
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [clothes,setclothes]=useState([])
    const [nbclick,setnbclick]=useState(0)
    const [connect,setconnect]=useState(false)
    const [somme,setSomme]=useState(0)
    const [arrayhelp,sethelparray]=useState([])
    const [panier,setpanier]=useState([])

    
  
  
  useEffect(()=>{
  
  getData()


  },[])
  




/************************************************************************************** */




    const getData=async()=>{
  
     await fetch('http://127.0.0.1:8000/api/products')
      .then(res=>res.json())
      .then(jsona=>{
    
      
        setclothes(jsona)
        sethelparray(jsona)
      
      
      })

  
    }
  

   /************************************************************************************** */ 
  



 







  const addToCart = (product) => {
    setnbclick(x=>x+1)
var exist=false;

if(panier.length<1){
 // console.log("awl")
  setpanier([...panier, {...product,quantité:1}]);
}

else{
 // console.log("tani")
  var updatearray= panier.map((x)=> {
          if(x.id==product.id){
            exist=true
            return {...x,quantité:x.quantité+1}  
          }

    
          return x;
         
          
    })

    setpanier(updatearray)
    



    
if(exist==false){
  setpanier([...panier, {...product,quantité:1}]);

}

    




  }

  };

  /************************************************************************************** */

  const supprimer = (id,n) => {
    var supp=panier.filter((x)=> {  return x.id  !=id;})
    
    setpanier(supp)
    
//for(var i=0;i<n;i++){
    setnbclick(nb=>nb-n)
//}

  };

/************************************************************************************** */














  const filtrerclothes = (item) => {
  
    var texta=arrayhelp.filter((x)=> {
      var pattern=x.name.toLowerCase()
      const result= pattern.search(item.toLowerCase());
      return result !== -1

    
    })

    setclothes(texta)

  };



/************************************************************************************** */







const incriment=(product)=>{
  setnbclick(x=>x+1)

  var updatearray= panier.map((x)=> {
    if(x.id==product.id && x.quantité< x.inventory ){
  
      return {...x,quantité:x.quantité+1}  
    }


    return x;
   
    
})

setpanier(updatearray)

}



/************************************************************************************** */









const decriment=(product)=>{
  setnbclick(ff=>ff-1)

  var updatearray= panier.map((x)=> {
    if(x.id==product.id  && x.quantité>1){
  
      return {...x,quantité:x.quantité-1}  
    }


    return x;
   
    
})

setpanier(updatearray)



}



/************************************************************************************** */




var sommetotal=()=>{

var sm=0;

panier.map((x)=> {

sm+=(x.quantité*x.price)

})
setSomme(sm)

return sm;

}



/************************************************************************************** */




var ajoutercommandes=(id,nom,prenom,adress,prixtotal)=>{




  const apiUrl = 'http://127.0.0.1:8000/api/orders'; // Replace with your API endpoint
  const requestBody = {
    id: id,
    firstname:nom,
    lastname:prenom,
    adresse:adress,
    totalprice:prixtotal
  }; 
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify the content type of your request body
    },
    body: JSON.stringify(requestBody), // Convert the JavaScript object to a JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      // Handle the response data here
      console.log(data);
    })
    .catch(error => {
      // Handle errors here
      console.log(error)});


setpanier([])
setnbclick(0)






panier.map((x)=> {



  const apiUrl = 'http://127.0.0.1:8000/api/ordersdetails'; // Replace with your API endpoint
  const requestBody = {
    idcommande: id,
    qte:x.quantité,
    idproduct:x.id,
    priceunique:x.price,
    
  };
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify the content type of your request body
    },
    body: JSON.stringify(requestBody), // Convert the JavaScript object to a JSON string
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response as JSON
    })
    .then(data => {
      // Handle the response data here
      console.log(data);
    })
    .catch(error => {
      // Handle errors here
      console.log(error)});


const apiUrls = 'http://127.0.0.1:8000/api/products/'

console.log(parseInt(x.inventory)-parseInt(x.quantité))
const requestBodys = {
  id:x.id,
  inventory:parseInt(x.inventory)-parseInt(x.quantité)
};

fetch(apiUrls, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type of your request body
  },
  body: JSON.stringify(requestBodys), // Convert the JavaScript object to a JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.log(error)});
})


}














  return (
    <ProductContext.Provider value={{clothes, panier,nbclick,getData,ajoutercommandes,addToCart,filtrerclothes,supprimer,incriment ,decriment,sommetotal
    }}>
      {children}
    </ProductContext.Provider>
  );
};
