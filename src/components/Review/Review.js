import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Review.css';
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div className='reviews'>
                <h2>Customer Reviews(3)</h2>
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

export default Review;