import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [info, setInfo] = useState({});
    console.log(info);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }
    const handleSubmit = () => {
        const serviceInfo = {
            name: info.name,
            description: info.description,
            price: info.price
        }

        fetch('http://localhost:5500/addService', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serviceInfo)
        })

    }
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                <h1 className="text-primary">Add Service</h1>
                    <br />
                    <div>
                        <form>
                            <label className="fs-5 fw-bold text-secondary">service name</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="Name is required" required name="name" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">description</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="description" required name="description" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">price</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="Price" name="price" />
                            <br />
                            <button onClick={handleSubmit} type="submit" className="brandBtn w-25 text-center">SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default AddService;