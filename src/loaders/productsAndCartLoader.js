import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>
{
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const storedCart = getStoredCart();
    const initialCart = [];
    for(const id in storedCart)
    {
        const addedCart = products.find(product => product.id=== id)
        if (addedCart)
        {
            const quantity = storedCart[id];
            addedCart.quantity = quantity;
            initialCart.push(addedCart);
        }
    }
    return {products:products, initialCart : initialCart}
}