import ProductCard from './ProductCard'; 
import './App.css';

const products = [  
    { id: 1, name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', image: 'images/thumbnailImage_9870660bbbc04dd1890e5520afbb022.jpg' },  
    { id: 2, name: 'Knight of Knights', price: 145, image: 'images/thumbnailImage_5192397.jpg' },  
    { id: 3, name: 'King From Hell', price: 80, image: 'images/thumbnailImage_5460155.jpg' },  
    { id: 4, name: 'Barrier Master', price: 210, image: 'images/thumbnailImage_d6f81b1c15df4f3b85dae4acab784fd.jpg' }  
  ];  

  
function NewArrivals() {  
    return (  
      <div className="product-listing">  
        <h2 className="product-listing-title">New Arrivals</h2>  
        <div className="product-card-container">  
          {products.map((product) => (  
            <ProductCard key={product.id} product={product} />  
          ))}  
        </div>  
        <button className="view-all-button">View All Products</button>  
      </div>  
    );  
  }  
  
  export default NewArrivals;