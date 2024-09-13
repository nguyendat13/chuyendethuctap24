import React from 'react';
import Pro1 from '../assets/images/product-1.png';
import Pro2 from '../assets/images/product-2.png';
import Pro3 from '../assets/images/product-3.png';
import Cross from '../assets/images/cross.svg';
import Couch from '../assets/images/couch.png'
import Line from '../layouts/Line';
const index = () => {
  return (
    <div>
    <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
            <Line/>
		  </div>
        </div>
        <div class="col-lg-7">
          <div class="hero-img-wrap">
            <img src={Couch} class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="product-section">
     			<div class="container">
     				<div class="row">
    
     					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
     						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
     						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
     						<p><a href="shop.html" class="btn">Explore</a></p>
     					</div> 
    
     					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
     						<a class="product-item" href="cart.html">
     							<img src={Pro1} class="img-fluid product-thumbnail"/>
     							<h3 class="product-title">Nordic Chair</h3>
     							<strong class="product-price">$50.00</strong>
    
     							<span class="icon-cross">
     								<img src={Cross} class="img-fluid"/>
     							</span>
     						</a>
     					</div> 
						 <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
     						<a class="product-item" href="cart.html">
     							<img src={Pro1} class="img-fluid product-thumbnail"/>
     							<h3 class="product-title">Nordic Chair</h3>
     							<strong class="product-price">$50.00</strong>
    
     							<span class="icon-cross">
     								<img src={Cross} class="img-fluid"/>
     							</span>
     						</a>
     					</div> 
    
     					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
     						<a class="product-item" href="cart.html">
     							<img src={Pro3} class="img-fluid product-thumbnail"/>
     							<h3 class="product-title">Ergonomic Chair</h3>
     							<strong class="product-price">$43.00</strong>
    
     							<span class="icon-cross">
     								<img src={Cross} class="img-fluid"/>
     							</span>
     						</a>
     					</div>
    
     				
    
     				</div>
     			</div>
     		</div>
  </div>
  )
}

export default index
