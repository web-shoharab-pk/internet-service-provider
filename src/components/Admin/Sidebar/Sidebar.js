import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
             <Link className="text-light text-center p-1" to="/home"><h1>Admin</h1></Link>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Order list</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Add Services</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Make Admin</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Manage Services</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Order</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Order list</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList">Order Review</Link>
            </div>
        </div>
    );
};

export default Sidebar;