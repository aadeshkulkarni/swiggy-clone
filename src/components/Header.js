import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SwiggyIcon from "../assets/SwiggyIcon";
import SearchIcon from "../assets/SearchIcon";
import OfferIcon from "../assets/OfferIcon";
import HelpIcon from "../assets/HelpIcon";
import UserIcon from "../assets/UserIcon";
import CartIcon from "../assets/CartIcon";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const addressDetails = useSelector((store) => store?.address?.addressDetails);

  useEffect(() => {
    if (Object.keys(addressDetails).length === 0) {
      navigate("/landing");
    }
  }, []);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="fixed bg-white w-screen z-30 grid grid-cols-12 px-6 py-2 shadow-md align-items">
      <div className="col-span-1"></div>
      <div className="flex items-center justify-center col-span-7 md:col-span-3">
        <Link to="/">
          <SwiggyIcon />
          {/* <img className="p-4 w-36" src={SwiggyIcon} alt="logo" /> */}
        </Link>
        <div className="p-4 text-orange-700 font-bold text-xs w-[200px] truncate after:content-['˯']">
          <Link to="/landing">{addressDetails?.formatted_address}</Link>
          {/* {(Object.keys(addressDetails).length !== 0) && <span className="text-xl"></span>} */}
        </div>
      </div>
      <div className="col-span-3 md:col-span-7 nav-items">
        <ul className="flex items-center justify-end md:justify-center p-2 m-2 text-md">
          <li className="hidden md:flex items-center justify-center px-3 text-gray-800 cursor-pointer hover:text-orange-600">
            <SearchIcon /> <div className="px-4 text-sm font-bold">Search</div>
          </li>
          <li className="hidden md:block px-3 text-gray-700 cursor-pointer hover:text-orange-600">
            <div className="flex items-center justify-center" to="/offers">
              <OfferIcon /> <span className="px-4 text-sm font-bold">Offers</span>
            </div>
          </li>
          <li className="hidden md:block flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600">
            <div className="flex items-center justify-center" to="/support">
              <HelpIcon /> <span className="px-4 text-sm font-bold">Help</span>
            </div>
          </li>
          <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600">
            <div className="flex items-center justify-center" to="/support">
              <UserIcon /> <span className="px-4 text-sm font-bold hidden md:inline ">Sign In</span>
            </div>
          </li>
          <li className="flex items-center justify-center px-3 text-gray-700 cursor-pointer hover:text-orange-600">
            <Link className="flex items-center justify-center" to="/cart">
              <CartIcon text={cartItems?.length}></CartIcon>
              <span className="px-4 text-sm font-bold hidden md:block ">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};
export default Header;
