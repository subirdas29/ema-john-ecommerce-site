import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const {products,initialCart} = useLoaderData() // return {products:products, initialCart : initialCart}
    const [cart,setCart] = useState(initialCart);// Cart er remove and changing access user k diyar jonno useState use kora hoise.ar na hyle state use korar dorkar nai..
    return (
        <div>
             <div className='shop-container'>
            <div className="products-container">
               
                {
                    
                }

            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
               {/* added */}
            </div>
        </div>
        </div>
    );
};

export default Orders;