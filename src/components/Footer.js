import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="hidden md:grid w-full grid-cols-12 p-8 text-gray-200 bg-black text-md">
      <div className="col-span-2"></div>
      <div className="col-span-2">
        <h1 className="text-3xl font-bold">Swiggy</h1>
        <div className="py-4 pr-4 font-light">© 2023 Aadesh Kulkarni</div>
      </div>
      <div className="col-span-2">
        <h1 className="text-lg font-bold text-gray-200">Company</h1>
        <ul className="font-light list-none">
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">About</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Careers</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Team</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Swiggy One</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Swiggy Instamart</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Swiggy Genie</Link></li>
        </ul>
      </div>
      <div className="col-span-2">
        <h1 className="text-lg font-bold text-gray-200">Contact Us</h1>
        <ul className="font-light list-none">
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Help & Support</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Partner with us</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Ride with us</Link></li>
        </ul>
        <h1 className="text-lg font-bold text-gray-200">Legal</h1>
        <ul className="font-light list-none">
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Terms & Conditions</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Cookie Policy</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="col-span-2">
      <h1 className="text-lg font-bold text-gray-200">We deliver to:</h1>
        <ul className="font-light list-none">
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Bangalore</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Gurgaon</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Hyderabad</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Delhi</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Mumbai</Link></li>
          <li className="py-2 text-gray-400 cursor-pointer"><Link to="/">Pune</Link></li>
          <select className="text-gray-200 bg-black border border-gray-700 rounded-sm">
            <option>589 cities</option></select>
        </ul>
      </div>
      <div className="col-span-2"></div>
    </div>
  )
}

export default Footer