
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [user]=useAuthState(auth);
    const [product,setProduct]=useState([])


    const handleDelete=id=>{
        const proceed=window.confirm('Are You sure?');
        if(proceed){
            const url=`http://localhost:5000/order/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=product.filter(product=>product._id !==id)
                setProduct(remaining)
            })
     
        }
    
    
    
    
    
    
    }













    useEffect(()=>{


                    const getProduct=async()=>{
                     const email=user.email;
                    const url=`http://localhost:5000/order?email=${email}`;
                    const {data} = await axios.get(url);
                    setProduct(data);

                    } 
                    getProduct();



    },[user])

    return (
        
         
      <>
      <h2 className='text-center mt-2'>My Product</h2>
      <h4 className='text-center'>You added Product:  {product.length}</h4>
  {
            product.map(product=>
        
                <div key={product._id} className='row  d-flex align-items-center m-3'>
                
                <div  className='col-lg-6 col-md-6 blog'>
                 <img  className='m-1' src={product.img} alt="sorry"></img>
                  
                
                </div>
        
        
               
                <div className='col-lg-6 col-md-6'>
                    <h5><span>Name : {product.name}</span><br></br>
                    <span>Price : {product.price}</span><br></br>
                    <span>Supplireman :  {product.supplierman}</span><br></br>
                    <span>RatingsCount : {product.ratingsCount}</span><br></br>
                    <span>Quantity : {product.quantity}</span><br></br>
                    </h5>
        
                    <p>{product.description}</p>
                    
                    <div><button onClick={()=>handleDelete(product._id)} className='px-5 py-2 allProduct-button'>Delete</button></div>
          
                   
                   
                   {/*  Add Data*/}
                   
                    {/* Add Data */}
                </div>
                
               
                
                
                
                </div>
                )
              
        
        }



      </>

   

    );
};

export default MyProducts;
