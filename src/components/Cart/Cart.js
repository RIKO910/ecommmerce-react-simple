import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props
    console.log(cart)

    let total =0;
    for (const product of cart){
        total =total +product.price;
    }

    let ship =0;
    for(const product of cart){
        ship=ship +product.shipping;
    }

    let tax = ((total)*5)/100
    let grand =total+tax+ship;
    

    return (
        <div className='cart'>
            <p>Selected cart:{cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${ship}</p>
            <p>Tax:${tax}</p>
            <p>Grand Total:${grand}</p>
        </div>
    );
};

export default Cart;



