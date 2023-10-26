import { LOGO_URL } from '../utils/constants'
import searchSVG from '../../assets/search.svg';
import { useState } from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (<div className='header'>
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <img src={searchSVG} alt="search-logo" /> Search
                </li>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    if (btnName === "Login") {
                        setBtnName("Logout")
                    }
                    else {
                        setBtnName("Login")
                    }
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
}
export default Header;