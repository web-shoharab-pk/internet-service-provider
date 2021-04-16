import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';


const ServicesCard = ({ service }) => {

    const {   setBookingService } = useContext(UserContext)
    const history = useHistory() 
    const handleBooking = (id) => {
        fetch(`http://localhost:5500/bookingService/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookingService(data[0])
                if (data) {
                    history.push('/admin/bookingService')
                }
            })
    }

    return (
        <div className="col-md-3 p-3">
            <div className="shadow p-1" >
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text"><strong>Details:</strong>  {service.description}</p>
                    <h5 className="card-title">Price: ${service.price} <span className="text-danger">per/month</span> </h5>
                    <button onClick={() => handleBooking(service._id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>

    );
};

export default ServicesCard;