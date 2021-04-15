import React, { useState } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import './AddAmin.css'

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    console.log(info);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }
    const handleSubmit = () => {
        const adminInfo = {
            name: info.name,
            email: info.email,
            phone: info.phone
        }

        fetch('http://localhost:5500/addAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(adminInfo)
        })

    }

    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                    <h1 className="text-primary">Give New Admin Details</h1>
                    <br />
                    <div>
                        <form>
                            <label className="fs-5 fw-bold text-secondary">Admin Name</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="Name is required" required name="name" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">Admin Email</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="Email is required" required name="email" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">Admin Phone</label>
                            <input onBlur={handleBlur} className="form-control w-25" placeholder="Phone" name="phone" />
                            <br />
                            <button onClick={handleSubmit} type="submit" className="brandBtn text-center">Make Admin</button>
                        </form>
                    </div>


                </div>
            </div>
        </main>
    );
};

export default AddAdmin;