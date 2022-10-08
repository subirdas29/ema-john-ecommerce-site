import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart)
    {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal= totalPrice + shipping + totalTax;
    return (
        <div className='cart'>
             <h4>Order Summary in Cart</h4>
                <p>selected items: {quantity}</p>
                <p>Total price:${totalPrice}</p>
                <p>Total Shipping:{shipping}</p>
                <p>Tax:{totalTax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};
 
export default Cart;