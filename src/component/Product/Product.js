import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, ratings } =props.product;
 
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{ratings}</small></p>
            <p><small>Price:${price}</small></p>
           </div>
           <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
            
           </button>


        </div>
    );
};

export default Product;