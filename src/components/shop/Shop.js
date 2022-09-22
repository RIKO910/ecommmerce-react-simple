import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'


const Shop = () => {

    const [products,setProduct]=useState([])
    const [cart,setCart] =useState([])

    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    } ,[]);
    const handelAddtoCart =(product)=>{
       const newCart =[...cart,product];
       setCart(newCart)
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handelAddtoCart={handelAddtoCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                {/* <p>Selected cart:{cart.length}</p> */}
                <Cart cart={cart.length}></Cart>
            </div>
        </div>
    );
};

export default Shop;