import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='row blog-container'>

                    <div className='col-lg-6 col-md-6'>
                        <h1>Welcome To Mozahid <br/> Furniture House</h1>
                        <p>Mozahi furniture The best in at Sylhet. Nulla exercitationem praesentium obcaecati error, minima atque eligendi voluptates. Quasi, similique exercitationem.</p>
                        <button className='px-5 py-2 blog-button'>Shop Now</button>

                    </div>

                    <div className='col-lg-6 col-md-6 blog'>
                        <img  className='m-1' src="https://i.ibb.co/JCBkkrn/mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm.png" alt="sorry"></img>
                      

                    </div>
                   

        
        </div>
    );
};

export default Blog;