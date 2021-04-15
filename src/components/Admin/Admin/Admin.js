import React from 'react';
import './Admin.css';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <main className="admin">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">

                </div>
                <div className="col-md-5">

                </div>
            </div>
        </main>
    );
};

export default Admin;