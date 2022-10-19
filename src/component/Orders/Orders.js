import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart} = useLoaderData() // return {products:products, initialCart : initialCart}
    const [cart,setCart] = useState(initialCart);// Cart er remove and changing access user k diyar jonno useState use kora hoise.ar na hyle state use korar dorkar nai..

    const handleRemoveToCart = (id) =>
    {
        const remaining = cart.filter(product => product.id !== id );
        setCart(remaining);
        removeFromDb(id);
    }
    
    const clearCart = () =>
    {
        setCart([]);
        deleteShoppingCart();
    }
    


  
    return (
        <div>
             <div className='shop-container'>
            <div className="orders-container">
               
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveToCart={handleRemoveToCart}></ReviewItem>)
                }

                {
                    cart.length===0 && <h2>Please empty cart, <Link  className='btn ' to ='/'>Order Now</Link></h2>
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart} clearCart={clearCart}>
                <Link to ='/shipping'> Procced shipping</Link>
               </Cart>
               {/* added */}
            </div>
        </div>
        </div>
    );
};

export default Orders;