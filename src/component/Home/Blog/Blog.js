import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='row blog-container container'>

                    <div className='col-lg-6 col-md-6'>
                        <h1>Welcome To Mozahid <br/> Furniture House</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quam iste officiis eligendi, veniam exercitationem sequi deleniti itaque optio nulla fugiat omnis, odit distinctio, rerum quos dolores numquam. Architecto sapiente voluptas corporis obcaecati quidem veniam sit eaque tenetur reprehenderit consequuntur? Tempore doloremque consequuntur aliquam, mollitia dolor ipsum perferendis dolores sequi!</p>
                        <button className='px-5 py-2 blog-button'>Shop Now</button>

                    </div>

                    <div className='col-lg-6 col-md-6 blog'>
                        <img  className='m-1' src="https://i.ibb.co/JCBkkrn/mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm.png" alt="sorry"></img>
                      

                    </div>
                   

        
        </div>
    );
};

export default Blog;