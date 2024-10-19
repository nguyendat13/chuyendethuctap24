import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../../assets/images/cart.svg';
import { useCart } from './CartContext';

const CartIcon = () => {
    const { cartCount } = useCart();

    return (
        <li>
            <Link className="nav-link" to="/home/cart">
                <img className="cart" src={Cart} alt="Cart Icon" />
                <small className="in">{cartCount}</small>
            </Link>
        </li>
    );
};

export default CartIcon;
