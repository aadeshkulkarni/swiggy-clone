import { LOGO_URL } from '../utils/constants'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import SearchIcon from '../assets/SearchIcon';
import OfferIcon from '../assets/OfferIcon';
import HelpIcon from '../assets/HelpIcon';
import UserIcon from '../assets/UserIcon';
import CartIcon from '../assets/CartIcon';
import ConfigContext from '../utils/ConfigContext';
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const data = useContext(UserContext);

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    return (<div className='grid grid-cols-12 px-6 py-2 shadow-md align-items'>
        <div className="col-span-1"></div>
        <div className="flex items-center justify-center col-span-2">
            <Link to="/"><img className="p-4 w-36" src={LOGO_URL} alt="logo" /></Link>
        </div>
        <div className="col-span-8 nav-items">
            <ul className="flex items-center justify-center p-2 m-2 text-md">
                <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600" onClick={()=>{ console.log("Clicked")}}><SearchIcon /> <span className="px-1">Search</span></li>
                <li className="px-3 text-gray-700 cursor-pointer hover:text-orange-600"><Link className="flex items-center justify-center" to="/offers"><OfferIcon /> <span className="px-1">Offers</span></Link></li>
                <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600"><Link className="flex items-center justify-center" to="/support"><HelpIcon /> <span className="px-1">Help</span></Link></li>
                <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600"><Link className="flex items-center justify-center" to="/support"><UserIcon /> <span className="px-1">Sign In</span></Link></li>
                <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600"><Link className="flex items-center justify-center" to="/cart"><CartIcon text={cartItems?.length}></CartIcon><span className="px-1">Cart</span></Link></li>
                {/* <button className="px-4 py-2 rounded-md" onClick={() => {
                    if (btnName === "Login") {
                        setBtnName("Logout")
                    }
                    else {
                        setBtnName("Login")
                    }
                }}>{btnName}</button> */}
                {/* <li>{data.loggedInUser}</li> */}
            </ul>
        </div>
        <div className="col-span-1"></div>
    </div>)
}
export default Header;