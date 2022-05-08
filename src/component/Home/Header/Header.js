import React from 'react';
import { Container, Navbar,Nav,  } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css';
import { Link } from 'react-router-dom';




const Header = () => {
  const [user]=useAuthState(auth);
 



//signOut
const handleSignOut=()=>{
  signOut(auth);
}





    return (

<>
<Navbar collapseOnSelect expand="lg" bg="dark" className='text-center' variant="dark" >
  <Container>
  <Navbar.Brand href="#home">
  <div className='logo'>
                   <div>
                  <img height="40px"   src='https://i.ibb.co/PMYdzx9/logo-fur11111111.png' alt=""></img>
                  </div>
                  <div>
                   <h3 className='ms-2'> Mozahid Furniture</h3>
                  </div>
                  </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className='ms-auto'>
      <Nav.Link >
      <Link to="/home" className='m-2 link-style'>Home</Link>
      </Nav.Link>
      <Nav.Link >
      <Link to="/answer" className='m-2 link-style'>Question</Link>
      </Nav.Link>

      
     {
             user?
             <div className='d-lg-flex'>
             <Nav.Link > <Link to='/manageitem' className='link-style'>Manage Items</Link></Nav.Link> 
             <Nav.Link > <Link to='/myitem' className='link-style'>My Product</Link></Nav.Link> 
             <Nav.Link > <Link to="/adddata" className='m-2 link-style'>Add Data</Link></Nav.Link>
           <button  onClick={handleSignOut} className='btn text-white link-style signoutbutton'>Signout</button>
             </div>
            :
            <Nav.Link> <Link to="/login" className='m-2 link-style'>login</Link></Nav.Link>
    }
     

     




    </Nav>

    
  </Navbar.Collapse>
  </Container>
</Navbar>

</>



              
    );
};

export default Header;