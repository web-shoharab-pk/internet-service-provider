import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './GiveReview.css';
const axios = require('axios');

const GiveReview = () => {
    const [imageURL, setImageURL] = useState({}); 
    const [info, setInfo] = useState({}); 
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url); 
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleReview = (e) => {
        // e.preventDefault()
        const review = {
            image: imageURL,
            name: info.name,
            review: info.review,
            date: new Date().toDateString()
        }

        fetch('http://localhost:5500/getReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
    }


    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                    <h2 style={{color: '#fe3749'}} className="fw-bold">Submit your Review</h2>
                    <form>
                        <label className="fs-5 fw-bold text-secondary">Name</label>
                        <input onBlur={handleBlur} className="form-control w-50" placeholder="Name is required" required name="name" />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">Review</label>
                        <textarea style={{height: '100px'}} onBlur={handleBlur} className="form-control w-50" placeholder="Review is required" required name="review" />
                        <br />
                        <label className="fs-5 fw-bold text-secondary">Upload your image</label>
                        <input style={{ width: '100%' }} name="photo" className="form-control w-50" onChange={handleImageUpload} type="file" required />
                        <br />
                        <button  type="submit" onClick={handleReview} className="brandBtn w-50">SUBMIT</button>
                    </form>
                </div>
            </div>

        </main>
    );
};

export default GiveReview;