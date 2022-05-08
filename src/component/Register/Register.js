import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import Social from '../Social/Social';
import auth from '../../firebase.init';



const Register = () => {
    const navigate=useNavigate();



    //sign up......................................................
    //step 1.....
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{useSendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
        
   //step 2.......................
   const handleSignup=async (event)=>{
    event.preventDefault();
    const displayName=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    
    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName});
    alert('Updated profile');
}


//step  3..........
if(user){
    navigate('/home')
}




       
   //.........................................................
        


        



    //go to login page..........
    const navigateLogin=event=>{

        navigate('/login')
        
    }




    return (
        <div className='container bg-dark w-70 mt-2'>

        <Form  onSubmit={handleSignup} className='p-5 '>
    <Form.Group className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='text-white'>
        Name
        </Form.Label>
        <Col sm="10" className='input-box  w-100'>
        <Form.Control type="name" name="name" placeholder="name"  required/>
        </Col>
    </Form.Group>


    <Form.Group  className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='text-white'>
        Email
        </Form.Label>
        <Col sm="10" className='input-box  w-100'>
        <Form.Control type="email" name="email"  placeholder="email" required />
        </Col>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='text-white'>
        Password
        </Form.Label>
        <Col sm="10" className='input-box w-100'>
        <Form.Control type="password" name="password" placeholder="Password" required  />
        </Col>
    </Form.Group>

    <div className='d-flex  justify-content-center'>
    <button type="submit" class="btn btn-primary w-50 form-submit">Register</button>
    </div>

    <h5 className='text-white mt-2 d-flex  justify-content-center'>Alredy Account......<span className='text-primary' onClick={navigateLogin}>Login</span></h5>
    

    <Social></Social>


    </Form> 



</div>
    );
};

export default Register;