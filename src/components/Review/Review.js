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
    }, [reviews]);
    return (
        <section>
            <div>
                <div className='best-watch'>
                    <h1> Choose a Watch</h1>

                    <p>You can choose any of this watch.These are the best watches as far as I know.These are the trendy watch for now.All products sold on this brand are 100% authentic guaranteed. This brand purchases its inventory via authorized dealers or respected industry wholesalers/distributors.</p>
                    <button id='button'>Live Demo</button>
                    <img src="image" alt=""></img>
                </div>
            </div>
            <div>
                <div className='review'>
                    <h2>Customer Reviews(3)</h2>
                </div>
                <div className='cart-container'>
                    {
                        reviews.slice(0, 3).map((review) => <Cart
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