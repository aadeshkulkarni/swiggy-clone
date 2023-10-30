import { LOGO_URL } from '../utils/constants'
import searchSVG from '../../assets/search.svg';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const data = useContext(UserContext);
    console.log(data)

    return (<div className='p-2 flex justify-between align-items shadow-md'>
        <div className="flex justify-center items-center">
            <img className="w-48 p-4" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-4 justify-center items-center">
                <li className="px-2">Search</li>
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/support">Support</Link></li>
                <li className="px-2"><Link to="/offers">Offers</Link></li>
                <li className="px-2">Cart</li>
                <button className="px-4 py-2 rounded-md" onClick={() => {
                    if (btnName === "Login") {
                        setBtnName("Logout")
                    }
                    else {
                        setBtnName("Login")
                    }
                }}>{btnName}</button>
                <li>{data.loggedInUser}</li>
            </ul>
        </div>
    </div>)
}
export default Header;