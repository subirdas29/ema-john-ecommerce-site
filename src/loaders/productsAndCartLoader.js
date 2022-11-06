import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>
{
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();

    const storedCart = getStoredCart();
    const initialCart = [];
    for(const id in storedCart)
    {
        const addedCart = products.find(product => product._id=== id)
        if (addedCart)
        {
            const quantity = storedCart[id];
            addedCart.quantity = quantity;
            initialCart.push(addedCart);
        }
    }
    return {products:products, initialCart : initialCart}
}