
import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';



const UserId = () => {
     const navigate=useNavigate();
    const {id}=useParams();  
    const [product,setProduct]=useState({});
    const {_id,img,price,supplierman,name,description,quantity}=product;


    useEffect(()=>{

        const url=`http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
        
           },[product])
//.................................................




//.............................
const navigatToManageItem=event=>{
    navigate('/manageitem');
}



//.................................
 const handleDelivered= () =>{
   
   const productQuantity={quantity:quantity-1};
   const url=`http://localhost:5000/product/${_id}`;
             fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
           },
            body:JSON.stringify(productQuantity),

             })
             .then(res=>res.json())
             .then(number=>{
                console.log(number);
               setProduct(product);
              
            })

        }
// //...............................


//...............................................
const handleRestock=event=>{
event.preventDefault();
const restockValue=event.target.restock.value;
const value=parseInt(restockValue);
const restock={quantity:parseInt(quantity)+value}

const url=`http://localhost:5000/product/${_id}`;
fetch(url,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
   },
   body:JSON.stringify(restock),
})
.then(res=>res.json())
.then(number=>{
    console.log(number);
    setProduct(product);
    alert('restock sucessfull')
    event.target.reset();
 
 })


}


//................................................




    return (
        <div className='container '>
<div className='row d-flex align-items-center'>
           
           

<div className='col-lg-6 col-md-6 blog'>
    <img  className='m-1' src={img} alt="sorry"></img>
</div>



<div className='col-lg-6 col-md-6'>
    <h5>Name:{name}<br/> 
   
    Price:{price}<br/> 
    supplierman:{supplierman}<br/> 
     
    
    quantity:{quantity}<br/>
    <p>{description}</p>

    </h5>
    
    <button onClick={handleDelivered} className='px-5 py-2 bg-dark text-white'>Delebaride</button>
    
    <form  onSubmit={handleRestock} className='mt-2'>
        <input type="text" name="restock"></input>
        <input type="submit" value="Restock" id=""></input>

    </form>


</div>



            
    
    <div className='d-flex justify-content-center'>
    <button className='btn  text-white bg-dark w-50 p-2 form-submit mt-2' onClick={navigatToManageItem}>Manage Items</button>
    </div>

        
        </div>
        </div>
    );
};

export default UserId;