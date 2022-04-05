import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div className='review'>
                <h2>Customer Reviews(All)</h2>
            </div>
            <div className='cart-container'>
                {
                    reviews.map((review) => <Cart
                        key={review.id}
                        review={review}>
                    </Cart>)
                }
            </div>
        </div>
    );
};

export default Reviews;