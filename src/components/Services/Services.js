import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import ServicesCard from '../ServiceCard/ServicesCard';
import './Services.css';

const services = [
    {
        name: 'Online gaming, 3+ devices',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '55'
    },
    {
        name: 'Android TV',
        description: '40+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '35'
    },
    {
        name: 'Streaming video in HD',
        description: '10-30 Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '65'
    },
    {
        name: 'Amazom Prime',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '25'
    },
    {
        name: 'Online gaming, 1-2 devices',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '40'
    },
    {
        name: 'Wi-Fi broadband',
        description: '10-25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '45'
    },
    {
        name: 'Mobile broadband',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '35'
    },
    {
        name: 'Online gaming, 1-2 devices',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '40'
    },
    {
        name: 'Android TV',
        description: '40+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '35'
    },
    {
        name: 'Online gaming, 3+ devices',
        description: '25+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '$55'
    },
    {
        name: 'Android TV',
        description: '40+ Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '35'
    },
    {
        name: 'Streaming video in HD',
        description: '10-30 Mbps Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellendus.',
        price: '65'
    } 
]

const Services = () => {
    return (
        <main>
            <section>
                <Navbar></Navbar>
            </section>
            <section className="container text-center  d-flex justify-content-between  align-items-center">
                
                <div className=" ">
                    <div className="row">
                        {
                            services.map(service => <ServicesCard service={service}></ServicesCard>)
                        }
                    </div>
                </div>


            </section>
            <section>

                <Footer></Footer>
            </section>
        </main>
    );
};

export default Services;