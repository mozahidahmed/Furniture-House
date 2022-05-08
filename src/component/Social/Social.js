
import React from 'react';
import './Social.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';




const Social = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;
    if (error) {
       
       errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
       
      }





//go to home page
if(user){
       navigate('/home');
      }


    return (
         <div>

            <div className='d-flex justify-content-center'>
            <button onClick={()=>signInWithGoogle()} className='btn text-white bg-primary w-50  mt-2 google-btn'>Google Signin</button>
           
        </div>
       
           <h4 className='text-danger d-flex justify-content-center'>{errorElement}</h4>


</div>

    );
};

export default Social;