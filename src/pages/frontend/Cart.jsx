import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartService from "../../services/CartService";
import { urlImage } from "../../config";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [loadingItem, setLoadingItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const data = await CartService.getCart();
            console.log("Full Cart Response:", data);

            if (data?.product?.length) {
                const mergedItems = mergeDuplicateItems(data.product);
                setCartItems(mergedItems);
                calculateSubtotal(mergedItems);
            } else {
                setCartItems([]);
                setSubtotal(0); // Reset subtotal when cart is empty
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            alert("Failed to fetch cart items.");
        }
    };

    const mergeDuplicateItems = (items) => {
        const itemMap = {};
        items.forEach(item => {
            if (itemMap[item.product_id]) {
                itemMap[item.product_id].qty += item.qty;
            } else {
                itemMap[item.product_id] = { ...item };
            }
        });
        return Object.values(itemMap);
    };

    const calculateSubtotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
        setSubtotal(total);
    };

    const updateCartItemQuantity = async (item, newQuantity) => {
        if (newQuantity < 1) return;
        setLoadingItem(item.product_id);
        try {
            console.log("Updating item with product_id:", item.product_id, "to quantity:", newQuantity);
            const result = await CartService.updateCartItem(item.product_id, { qty: newQuantity });
            console.log("Update result:", result.item.product_id);
              
            if (result.status) {
                // Instead of updating state manually, refetch the cart
                fetchCartItems(); // Reset cart state
                
            } else {
                alert("Failed to update item quantity.");
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
            fetchCartItems();  // Reset cart on error
        } finally {
            setLoadingItem(null);
        }
    };
      
      
    const handleQuantityChange = (item, delta) => {
        const newQuantity = item.qty + delta;
        updateCartItemQuantity(item, newQuantity);
    };

    const handleRemoveItem = async (product_id) => {
        setLoadingItem(product_id);
        try {
            const result = await CartService.delete(product_id);
            if (result.status) {
                setCartItems((prevItems) =>
                    prevItems.filter((item) => item.product_id !== product_id)
                );
                calculateSubtotal(cartItems);
            } else {
                alert("Failed to remove item. Please try again.");
            }
        } catch (error) {
            console.error("Error removing item:", error);
            alert("Failed to remove item.");
            fetchCartItems();
        } finally {
            setLoadingItem(null);
        }
    };

    return (
        <div className="untree_co-section before-footer-section">
            <div className="container">
                <div className="row mb-5">
                    <h1 className="mb-5 text-dark">Cart</h1>
                    <form className="col-md-10">
                        <div className="site-blocks-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item) => (
                                            <tr key={item.product_id}>
                                                <td>
                                                    <img
                                                        src={`${urlImage}products/${item.image}`}
                                                        alt={item.name}
                                                        className="img-fluid"
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>${item.price.toFixed(2)}</td>
                                                <td>
                                                    <div className="quantity-container">
                                                        <button
                                                            className="btn btn-outline-black"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleQuantityChange(item, -1);
                                                            }}
                                                            disabled={loadingItem === item.product_id}
                                                        >
                                                            {loadingItem === item.product_id ? (
                                                                <span className="spinner-border spinner-border-sm" />
                                                            ) : (
                                                                "-"
                                                            )}
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="text-center"
                                                            value={item.qty}
                                                            readOnly
                                                        />
                                                        <button
                                                            className="btn btn-outline-black"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleQuantityChange(item, 1);
                                                            }}
                                                            disabled={loadingItem === item.product_id}
                                                        >
                                                            {loadingItem === item.product_id ? (
                                                                <span className="spinner-border spinner-border-sm" />
                                                            ) : (
                                                                "+"
                                                            )}
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>${(item.price * item.qty).toFixed(2)}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-black"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleRemoveItem(item.product_id);
                                                        }}
                                                        disabled={loadingItem === item.product_id}
                                                    >
                                                        {loadingItem === item.product_id ? (
                                                            <span className="spinner-border spinner-border-sm" />
                                                        ) : (
                                                            "X"
                                                        )}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">
                                                No items in cart.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <Link to="/home/shop" className="btn btn-outline-black ms-2">
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="col-md-6 text-right">
                        <h4>Cart Totals</h4>
                        <p>Subtotal: ${subtotal.toFixed(2)}</p>
                        <button
                            onClick={() =>
                                navigate("/home/checkout", { state: { cartItems, subtotal } })
                            }
                            className="btn btn-black"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
