import axios from 'axios';
import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const AddData = () => {
  const [user]=useAuthState(auth)

const handleAddData=event=>{
  event.preventDefault();
  const product ={
    email:user.email,
    name:event.target.name.value,
    price:event.target.price.value,
    ratingsCount:event.target.ratingsCount.value,
    quantity:event.target.quantity.value,
    description:event.target.description.value,
    supplierman:event.target.supplierman.value,
    img:event.target.img.value,

  }
axios.post('http://localhost:5000/product',product)
.then(response=>{
  const {data}=response;
  console.log(data);
  alert('Data Add Sucess full')
  event.target.reset();
})
axios.post('http://localhost:5000/order',product)
.then(response=>{
  const {data}=response;
  console.log(data);
  alert('Data Add Sucess full')
  event.target.reset();
})

}

  return (
    <div className='container mt-3 w-50'>
      <form onSubmit={handleAddData}>
        <input className="w-100 mb-2" type="text" name="name" placeholder='name' required autoComplete='off'></input><br></br>
        <input className="w-100 mb-2" type="email" value={user.email} name="email" placeholder='email' required readOnly disabled></input><br></br>
        <input className="w-100 mb-2" type="number" name="price" placeholder='Price'  required autoComplete='off' ></input><br></br>
        <input className="w-100 mb-2" type="number" name="ratingsCount" placeholder='ratingsCount'  required autoComplete='off'></input><br></br>
        <input className="w-100 mb-2" type="text" name="description" placeholder='description'  required autoComplete='off'></input><br></br>
        <input className="w-100 mb-2" type="number" name="quantity" placeholder='quantity' required autoComplete='off'  ></input><br></br>
        <input className="w-100 mb-2" type="text" name="supplierman" placeholder='supplierman'  required autoComplete='off'></input><br></br>
        <input className="w-100 mb-2" type="text" name="img" placeholder='imgUrl'  required autoComplete='off'></input><br></br>
        <input className='mb-2' type="submit" value="add data" />
      </form>
    </div>
  );
};

export default AddData;



























// import React from 'react';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import { useForm } from "react-hook-form";
// import auth from '../../firebase.init';
// import './AddData.css'


// const AddData = () => {
//   const [user]=useAuthState(auth)
//   const { register, handleSubmit} = useForm();
//   const onSubmit = data => {
 

// const url=`http://localhost:5000/product`;
// fetch(url,{
// method: 'POST',
// headers : {
//   'content-type': 'application/json'
// },
// body:JSON.stringify(data)

// })
// .then(res=>res.json())
// .then(result=>console.log(result));


// console.log(data)

//  };






//     return (
//   <div className='w-50 mx-auto'>

// <h1 className='text-center'>Add Data form strok</h1>
// <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
//       <input placeholder='name' className='mb-2' type="text"{...register("name")} />
//       <input placeholder='name' className='mb-2' value={user.email} type="email"{...register("email")} readOnly disabled/>
     
     
 
//       <input placeholder='supplierman' className='mb-2' {...register("supplierman")} autoComplete='off'/>
//       <input placeholder='ratingsCount' className='mb-2' type="number" {...register("ratingsCount")} />
//       <input placeholder='quantity' className='mb-2' type="number" {...register("quantity")} />
//       <textarea placeholder='description' className='mb-2' {...register("description")} />
//       <input placeholder='price' className='mb-2' type="number" {...register("price")} />
//       <input placeholder='Photo URL' className='mb-2' type="text" {...register("img")} />
//       <input  className='mb-2' type="submit" />
//     </form>
//   </div>
       
//     );
// };

// export default AddData;



