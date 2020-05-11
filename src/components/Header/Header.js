import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';

const usePrevious = value => {
    const prev = useRef();
    useEffect(()=> {
        prev.current = value;
    },[value])
    return  prev.current;
}

const Header = () => {
    const user = useContext(UserContext);
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    
    return (
        <div className="header">
            <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="inventory">Manage Inventory</a>
                <span>{user}</span>
            </nav>
        </div>
    );
};

export default Header;