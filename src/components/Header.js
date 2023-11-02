import { LOGO_URL } from '../utils/constants'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import SearchSVG from 'url:../assets/search.svg';
console.log(SearchSVG)

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
                <li className="px-6 text-gray-700 cursor-pointer hover:text-orange-600"><img src={window.location.origin + "/src/assets/search.svg"} /> Search</li>
                <li className="px-6 text-gray-700 cursor-pointer hover:text-orange-600"><Link to="/offers">Offers</Link></li>
                <li className="px-6 text-gray-700 cursor-pointer hover:text-orange-600"><Link to="/support">Help</Link></li>
                <li className="px-6 text-gray-700 cursor-pointer hover:text-orange-600"><Link to="/support">Sign In</Link></li>
                <li className="px-6 font-bold text-gray-700 cursor-pointer hover:text-orange-600"><Link to="/cart">Cart ({cartItems?.length})</Link></li>
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