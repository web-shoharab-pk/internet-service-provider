import React, { useEffect, useState } from 'react'; 
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import ServicesCard from '../ServiceCard/ServicesCard';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5500/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <main>
            <section>
                <Navbar></Navbar>
            </section>
            <section className="container text-center  d-flex justify-content-between  align-items-center">

                <div className=" ">
                    <div className="row">
                        {
                            services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
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