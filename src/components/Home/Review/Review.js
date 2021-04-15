import React from 'react';
import './Review.css';
import review1 from '../../images/review1.png';
import review2 from '../../images/review2.png';
import review3 from '../../images/review3.png'
import ReviewCard from './ReviewCard/ReviewCard';


const reviews = [
    {
        name: 'Mst. Laila',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nobis deleniti fugiat, dolore vel.',
        image: review1
    },
    {
        name: 'Md. Shohel',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nobis deleniti fugiat, dolore vel.',
        image: review2
    },
    {
        name: 'Mst. Komola',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nobis deleniti fugiat, dolore vel.',
        image: review3
    }
]
const Review = () => {
    return (
        <section className="container my-5">
            <div>
                <h1 style={{color: '#BF18A2'}} className="text-center">Review</h1>
            </div>
            <div className="row">
                  {
                      reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                  }  
            </div>
        </section>
    );
};

export default Review;