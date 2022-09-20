import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'


const Shop = () => {

    const [products,setProduct]=useState([])

    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    } ,[])
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                okkkkk
            </div>
        </div>
    );
};

export default Shop;