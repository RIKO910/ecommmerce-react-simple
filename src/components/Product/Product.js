import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    
    const {name,img,seller,price,ratings}=props.product;
    
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={()=>props.handelAddtoCart(props.product)}  className='button-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;