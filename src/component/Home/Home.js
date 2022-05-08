import React from 'react';


import Blog from './Blog/Blog';

import './Home.css';
import Products from './Products/Products';


const Home = () => {
    return (
        <div className='Home-container'>
           
         
          <Blog></Blog>
           <Products></Products>

          
           
                
               
           
        </div>
    );
};

export default Home;