
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import './Products.css';




const Products = () => {

const [products,setProducts]=useProducts();

const navigate=useNavigate();
const navigateToProductDetails=id=>{
  
  navigate(`/product/${id}`);
  
  
  }



return (
       <div>
<h1 className='text-center mt-4'>Warehouse Product mozahid </h1>

         
      <div className='row d-flex justify-content-center'>
          {
              products.slice(0,6).map(product=>
                <div key={product._id} className="card h-100 col-12 col-md-6 col-lg-4 g-1 product-cart">
                <img className='w-100' src={product.img} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">product name:{product.name}</h5>
                  <h5 className="card-title">price:{product.price}</h5>
                  <h5 className="card-title">ratingsCount:{product.ratingsCount}</h5>
                  <h5 className="card-title">quantity:{product.quantity}</h5>
                  <h5 className="card-title">supplierman:{product.supplierman}</h5>
                  <p className="card-text">description:{product.description}</p>
                </div>
                <button onClick={()=> navigateToProductDetails(product._id)} className='product-button py-2'>Update Now</button>
              </div>

                ) 
          }
       


       
      </div>



       </div>
    );
};

export default Products;