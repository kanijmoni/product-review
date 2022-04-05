import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <section>
            <div>
                <div className='best-watch'>
                    <h1>Your Best Watch</h1>
                    <p>You can choose any of this watch.These are the best watches I have ever seen.</p>
                    <button id='button'>Live Demo</button>
                </div>

            </div>
            <div>
                <div className='review'>
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
                <div>
                    <Link to="/reviews">
                        <button className='button'><p>See All Reviews...</p></button>
                    </Link>
                </div>
            </div >
        </section>
    );
};

export default Review;