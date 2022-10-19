import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product,handleRemoveToCart}) => {
    const {img, name, price,shipping, quantity,id } = product;
    return (
        <div className='review-item'>
            <div className='image-item'>
                <img src={img} alt="" />
            </div>
            
            <div className='details-item'>
            <div className='review-details'>
                <p>Name:{name}</p>
                <p>price:${price}</p>
                <p>price:${shipping}</p>
                <p>quantity:{quantity}</p>
            </div>
            <div className='delete-button'>
                <button className='delete-btn' onClick={()=> handleRemoveToCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon> 
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItem;