import React, { useEffect, useState } from 'react';
import SingleReview from '../singleReview/SingleReview';
// import './Explore.css'


const ManageReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Our Reviews</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;