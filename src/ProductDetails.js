import React from 'react';  
import { useParams, Link } from 'react-router-dom';  
import './App.css';  

const productData = {  
    1: { name: 'Today is Good', price: 212, originalPrice: 232, discount: '-20%', sizes: ['Normal', 'Premium'], reviews: ['Great book, nice to read!', 'Love the material and fit.'], image: '../images/thumbnailImage_4584109.jpg' },  
    2: { name: 'Knight of Knights', price: 145, sizes: ['Normal', 'Premium', 'Collection'], reviews: ['Love the design!', 'Unique and vibrant colors.'], image: '../images/thumbnailImage_5192397.jpg' },  
    3: { name: 'King From Hell', price: 80, sizes: ['Normal', 'Premium'], reviews: ['Perfect for summer!', 'Comfortable and stylish.'], image: '../images/thumbnailImage_5460155.jpg' },  
    4: { name: 'Barrier Master', price: 210, sizes: ['Normal', 'Premium'], reviews: ['Great fit!', 'Looks great with any outfit.'], image: '../images/thumbnailImage_5470315.jpg' }  
};  

function ProductDetails() {  
    const { productId } = useParams();  
    const product = productData[productId];  

    // Check if product exists  
    if (!product) {  
        return <div>Product not found.</div>;  
    }  

    return (  
        <div className="product-details">  
            <div className="image-section">  
                <img src={product.image} alt={product.name} />  
            </div>  
            <div className="details-section">  
                <h1>{product.name}</h1>  
                <p className="price">  
                    ${product.price} <span className="original-price">${product.originalPrice}</span> <span className="discount">{product.discount}</span>  
                </p>  
                <div className="size-options">  
                    <p>Choose Size</p>  
                    <div>  
                        {product.sizes.map((size, index) => (  
                            <button key={index} className="size-button">{size}</button>  
                        ))}  
                    </div>  
                </div>  
                <div className="quantity-section">  
                    <button>-</button>  
                    <span>1</span>  
                    <button>+</button>  
                </div>  
                <Link to="/cart" className="add-to-cart">Add to Cart</Link>  
                <div className="reviews">  
                    <h3>All Reviews</h3>  
                    {product.reviews.map((review, index) => (  
                        <p key={index}>{review}</p>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
}  

export default ProductDetails;
