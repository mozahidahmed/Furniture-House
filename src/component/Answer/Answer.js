import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className=''>
            <h1 className='text-center mt-3 d-flex justify-content-center'>Answer To The Question</h1>
            <div className='row container w-100 mx-auto'>
                    <div className='col-md-6 col-lg-4 col-style'>
                    <h4>javascript VS node.js</h4>
                    <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires 
                    libraries that can easily be accessed from JavaScript programming for better use.</p>
                    </div>

                    <div className=' col-md-6 col-lg-4 col-style'>
                    <h4>When should use Node.js?</h4>
                    <p>
                    Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services
                   but was designed with real-time, push-based architectures in mind.</p>
                   <h4 className=''>When should use MongoDB?</h4>
                    SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to
                    accommodate massive scale, when you are rapidly prototyping, and a few other use cases
                    </div>

                    <div className='col-md-6 col-lg-4 col-style'>
                        <h4>SQL VS NOSQL</h4>
                    <p className=''>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row 
                    transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                   
                   
                   
                    
            </div>
       
        </div>
    );
};

export default Answer;