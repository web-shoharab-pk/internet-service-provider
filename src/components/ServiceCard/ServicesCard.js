import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    return (
        <div className="col-md-3 p-3">
            <div className="shadow p-1" >
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text"><strong>Details:</strong>  {service.description}</p>
                    <h5 className="card-title">Price: ${service.price} <span className="text-danger">per/month</span> </h5>
                    <Link to="#" className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>

    );
};

export default ServicesCard;