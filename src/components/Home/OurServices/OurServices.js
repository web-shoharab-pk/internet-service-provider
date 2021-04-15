import React from 'react';
import broadband from '../../images/broadband.jpg';
import tvDish from '../../images/tv-internet.jpg';
import mobile from '../../images/mobile-internet.jpg'
import ServicesCard from './ServicesCard';

const services = [
    {
        title: 'Broadband',
        image: broadband,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    },
    {
        title: 'TV Dish',
        image: tvDish,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    },
    {
        title: 'Moblie Internet',
        image: mobile,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    }
]

const OurServices = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
                <div>
                    <h3 style={{color: '#D2159C'}}>OUR SERVICES</h3>
                    <h1>Services We Provide</h1>
                </div> 
            </div>
            <div className="row d-flex justify-content-around align-items-center mt-5">
                {
                    services.map(service =>  <ServicesCard service={service}></ServicesCard>)
                }
               
            </div>
        </section>
    );
};

export default OurServices;