import React from 'react'
import Couch from "../../../assets/images/couch.png";

const Banner = () => {
  return (
    <div>
              <div className="banner hero-img-wrap">
                <img src={Couch} className="img-fluid" />
              </div>
    </div>
  )
}

export default Banner
