import React from 'react';
import useProducts from '../../hooks/useProducts';
import './AllProduct.css';
import { useNavigate } from 'react-router-dom';
// import AllSingleProduct from './AllSingleProduct/AllSingleProduct';

const AllProduct = () => {
const [products,setProducts]=useProducts();


const handleDelete=id=>{
    const proceed=window.confirm('Are You sure?');
    if(proceed){
        const url=`https://fast-spire-75245.herokuapp.com/product/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining=products.filter(product=>product._id !==id)
            setProducts(remaining)
        })
 
    }






}

//.................................
const navigate=useNavigate();

const addDataNavigate=event=>{
    navigate('/adddata');
}
//..................................





//.................................



//..................................



 
 return (

<div className="container mt-3">

<h1 className='text-center'>Warehouse All Product</h1>
<h3 className='text-center'>Avalable Product:{products.length}</h3>

<div className='d-flex justify-content-center'><button onClick={addDataNavigate} className='px-5 py-2 allProduct-button'>Add Data</button></div>


{
    products.map(product=>

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
            
           
           <div className='d-flex'>
           <div><button onClick={()=>handleDelete(product._id)} className='px-5 py-2 allProduct-button'>Delete</button></div>
          
           
           </div>
           
           {/*  Add Data*/}
           
            {/* Add Data */}
        </div>
        
       
        
        
        
        </div>
        )
      

}


</div>


    )}


export default AllProduct;



