import React from 'react'

const Offer = () => {
  return (
    <div >
      <h1 className="font-bold text-2xl p-2 m-4">Offer Page</h1>
      <form>
        <input type="text" className="border border-black p-2 m-4" placeholder='name'/>
        <input type="text" className="border border-black p-2 m-4" placeholder='message' />
        <button className="p-2 rounded-lg bg-black text-white">Submit</button>
      </form>
      </div>
  )
}

export default Offer