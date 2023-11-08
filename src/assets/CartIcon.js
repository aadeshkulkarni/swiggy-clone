import * as React from "react"
const CartIcon = (props) =>{ 
    return (
  <svg
    width={22}
    height={22}
    fill="transparent"
    className={`border border-gray-500 ${props.text > 0 && 'bg-green-500 border-green-50 text-white'}`}
    viewBox="-1 0 37 32"
    {...props}
  >
    <path fill="transparent" d="M4.438 0 1.84 5.11 0 31.234h34.909L33.003 5.11 30.406 0z" />
    <text x="10" y="25" fontSize="26px" fill={props.text > 0 ? "white":"black" }>{props.text}</text>
  </svg>
)}
export default CartIcon
