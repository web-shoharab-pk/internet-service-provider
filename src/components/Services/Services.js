import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import ServicesCard from '../ServiceCard/ServicesCard';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([])
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5500/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(data)
            })
    }, [])


    return (
        <main>
            <section>
                <Navbar></Navbar>
            </section>
            <section className="container text-center  d-flex justify-content-between  align-items-center">

                <div>
                    <h1 style={{color: '#FF4B54'}} className="my-3">Our all services</h1>
                    {
                        spinner ?
                            <div className="row">
                                {
                                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                                }
                            </div>
                            :
                            <div className="d-flex justify-content-center align-items-center m-5">
                                <div>
                                    <div className="spinner-border" role="status">
                                        <span>Loading...</span>
                                    </div>
                                </div>

                            </div>
                    }

                </div>
            </section>
            <section>

                <Footer></Footer>
            </section>
        </main>
    );
};

export default Services;