
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
<h1 className='text-center mt-4'>Our Products </h1>

         
      <div className='row d-flex justify-content-center'>
          {
              products.slice(0,6).map(product=>
                <div key={product._id} className="card h-100 col-12 col-md-4 col-lg-4 g-1 product-cart ">
                <img className='w-100 ' src={product.img} class="card-img-top" alt="..."/>
                <div className="card-body d-grid justify-content-center">
                  <h5 className="card-text">Name: {product.name}</h5>
                  <h5 className="card-text">Price: {product.price}</h5>
                  <h5 className="card-text">Ratings: {product.ratingsCount}</h5>
                  
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