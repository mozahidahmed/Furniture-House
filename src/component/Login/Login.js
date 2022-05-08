import React, { useRef } from 'react';
import {  Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';





const Login = () => {
    const navigate=useNavigate();
    const emailRef=useRef('');
     const passwordRef=useRef('');


//step......1
const [
    signInWithEmailAndPassword,
    user,
    // loading,
    // error,
  ] = useSignInWithEmailAndPassword(auth);


//handle submit
const handleSubmit=event=>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  



//go to Register page
const navigateRegister=event=>{

navigate('/register')

}

if(user){
    navigate('/home')
  }

    return (
        <div className='container bg-dark  mt-2'>

                <Form onSubmit={handleSubmit} className='p-5 '>
  


            <Form.Group  className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2" className='text-white'>
                Email
                </Form.Label>
                <Col sm="10" className='input-box w-100'>
                <Form.Control  ref={emailRef} className="input" type="email" name="email" placeholder="email" required />
                </Col>
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2" className='text-white'>
                Password
                </Form.Label>
                <Col sm="10" className='input-box w-100' >
                <Form.Control ref={passwordRef} className="input" type="password" name="password" placeholder="Password"  required  />
                </Col>
            </Form.Group>
           
               
                <div className="d-flex  justify-content-center">
                <button type="submit" class="btn btn-primary w-50 form-submit">Login</button>
               
                </div>
                <h5 className='text-white mt-2 d-flex  justify-content-center'>New User....?<span className='text-primary' onClick={navigateRegister}>Create Account</span></h5>
                
                <Social></Social>
              

            
           
            
            



            </Form> 

            


        </div>
    );
};

export default Login;