import React from 'react'
import Neydata from './Neydata'

const Neymar = () => {
  console.log(Neydata)
  return (
    <div>
    <div className="training-section">
    <div className="container">
    {Neydata.map((item)=>
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
      </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default Neymar