import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
    
       for(const id in storedCart)
       {
        const addedProduct = products.find(product =>product.id === id) //localstorage pawa gele ae kaj ta korbe
        
        if(addedProduct)
        {
            const quantity = storedCart[id]; //kono local storage thaka id er value paite hoile object name er moddhe id k call dite hbe
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
       }
       setCart(savedCart);
   
    },[products]);
    
    const handleAddToCart = (selectedProduct)=>

    {
        let newCart =[];
        const exits = cart.find(product => product.id ===selectedProduct.id);
        if(!exits)
        {
            selectedProduct.quantity= 1;
            newCart = [...cart,selectedProduct];
        }

        else{
            const rest = cart.filter( product =>product.id !==selectedProduct.id);//ekhane jegula milbe na seigula k alada kora hyece.
            exits.quantity = exits.quantity+1;
            newCart =[...rest,exits];

        }
        setCart(newCart); 
        addToDb(selectedProduct.id);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}  
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                }

            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
               {/* added */}
            </div>
        </div>
    );
};

export default Shop;