import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';
import { useAuth } from '../Login/useAuth';


const Header = () => {
 
    const auth = useAuth();
    console.log(auth);

    return (
        <div className="header">
            
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="inventory">Manage Inventory</a>
            
            </nav>
        </div>
    );
};

export default Header;