import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let j=0 ; j<cart.length; j++){
        const p = cart[j];
        total += p.population;
    }
    console.log(cart);
    return (
        <div className='cartContainer'>
            <span>Added country : {cart.length}</span>
            <p>Total Countrys Population : {total}</p>
        </div>
    );
};

export default Cart;