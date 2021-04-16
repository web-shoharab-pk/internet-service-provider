import React, { useContext } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserShield, faListAlt, faPlusSquare, faUserPlus, faTasks, faSort, faCommentDots, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    const {setUserInfo} = useContext(UserContext)
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful
            setUserInfo("")
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="sidebar">
             <Link className="text-light text-center p-1" to="/home"><h1><FontAwesomeIcon icon={faUserShield}/></h1></Link>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderList"><FontAwesomeIcon icon={faListAlt}/> Order list</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/addService"><FontAwesomeIcon icon={faPlusSquare}/> Add Services</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/addAdmin"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/manageService"><FontAwesomeIcon icon={faTasks}/> Manage Services</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/bookingService"><FontAwesomeIcon icon={faSort}/> Booking</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/bookingList"><FontAwesomeIcon icon={faListAlt}/> Booking list</Link>
            </div>
            <div className="sidebarOption">
                <Link className="sidebarLink text-light" to="/admin/orderReview"><FontAwesomeIcon icon={faCommentDots}/> Order Review</Link>
            </div>
            <div onClick={handleLogout} className="sidebarOption logout">
                <Link  className="sidebarLink text-light" to="/home"><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;