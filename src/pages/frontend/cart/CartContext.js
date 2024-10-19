import React, { createContext, useContext, useState, useEffect } from 'react';
import CartService from '../../../services/CartService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        fetchCartItems(); // Fetch cart items on mount
    }, []);

    const fetchCartItems = async () => {
        try {
            const data = await CartService.getCart();
            if (data?.product?.length) {
                setCartItems(data.product);
                calculateCartCount(data.product);
            } else {
                setCartItems([]);
                setCartCount(0);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateCartCount = (items) => {
        const count = items.reduce((total, item) => total + item.qty, 0);
        setCartCount(count);
    };

    const addToCart = async (product) => {
        await CartService.addItem(product);
        fetchCartItems(); // Refetch the cart items after adding
    };

    const updateCartItem = async (product_id, quantity) => {
        await CartService.updateCartItem(product_id, { qty: quantity });
        fetchCartItems(); // Refetch the cart items after updating
    };

    const removeCartItem = async (product_id) => {
        await CartService.delete(product_id);
        fetchCartItems(); // Refetch the cart items after removal
    };

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateCartItem, removeCartItem }}>
            {children}
        </CartContext.Provider>
    );
};
