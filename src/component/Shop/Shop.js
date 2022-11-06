import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
//    const {products,count} = useLoaderData();

//    console.log(products)

    const [products,setProducts]= useState([])
    const [count,setCount] = useState(0)
    const [cart,setCart]= useState([]);
    const [page,setPage]= useState([0]);
    const [size,setSize]= useState([10]);

    const url = `http://localhost:5000/products?page=${page}&size=${size}`
    useEffect( ()=>
    {
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            setCount(data.count)
            setProducts(data.products)
        } )
    },[page , size])

    const pages = Math.ceil(count/size);
    
    const clearCart = () =>
    {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=>{
        const storedCart = getStoredCart();
        console.log(storedCart)
        const savedCart = [];

        const ids = Object.keys(storedCart)

        fetch('http://localhost:5000/productsByIds',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(ids)
        })
        .then(res=>res.json())
        .then(data=>
            {
                for(const id in storedCart)
                {
                 const addedProduct = data.find(product =>product._id === id) //localstorage pawa gele ae kaj ta korbe
                 
                 if(addedProduct)
                 {
                     const quantity = storedCart[id]; //kono local storage thaka id er value paite hoile object name er moddhe id k call dite hbe
                     addedProduct.quantity = quantity;
                     savedCart.push(addedProduct);
                 }
                }
                setCart(savedCart);
            })
    
    
   
    },[products]);
    
    const handleAddToCart = (selectedProduct)=>

    {
        let newCart =[];
        const exits = cart.find(product => product._id ===selectedProduct._id);
        if(!exits)
        {
            selectedProduct.quantity= 1;
            newCart = [...cart,selectedProduct];
        }

        else{
            const rest = cart.filter( product =>product._id !==selectedProduct._id);//ekhane jegula milbe na seigula k alada kora hyece.
            exits.quantity = exits.quantity+1;
            newCart =[...rest,exits];

        }
        setCart(newCart); 
        addToDb(selectedProduct._id);

    }
    return (
        
        <div className='shop-container'>
            <div className="products-container">
               
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}  
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                }

            </div>
            <div className="cart-container">
               <Cart cart={cart} 
               clearCart={clearCart}
               >
                <Link to ='/orders'>
                <button>Review Order</button>
                </Link>
               </Cart>
               {/* added */}

            </div>
            <div className='pagination'>
            <p className='mb-4'>selected page:{page} && selected size:{size}</p>
                
        {
            
            [...Array(pages).keys()].map(number =><button className={page === number && 'selective'}  onClick={()=>setPage(number)}  key={number}>{number+1}</button>)
        }
        <select onChange={event => setSize(event.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>  
        </select>
    </div>
        </div>
        
   
    );
};

export default Shop;