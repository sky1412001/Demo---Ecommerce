import React from 'react'
import Mesdata from './Mesdata'

const Lionel = () => {
  console.log(Mesdata)
  return (
    <div>
    <div className="training-section">

    <div className="container">

     { Mesdata.map((item)=>
      <div className="item-container">
        <img
          src={item.img}
          alt="..."
        />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p style={{ color: "#FFD700" }}>
        <i class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
        <i  class="fa fa-star"></i>
      </p>
        <button>Buy-Now</button>
      </div>)}
      </div>
      </div>
    
    </div>
  )
}

export default Lionel