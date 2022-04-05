import React from 'react';
import './Cart.css';
const Cart = ({review}) => {

    const { name, picture, ratings } = review;
    return (
        <div className='reviews'>
            <img src={picture} alt=''></img>
            <p>Name:{name}</p>
            <p>Awsome</p>
            <p>Ratings:{ratings}</p>
        </div>
    );
};

export default Cart;