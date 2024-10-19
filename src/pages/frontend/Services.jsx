import React from 'react'
import Testimonials from '../../layouts/Testimonials'
import Line from '../../layouts/Line'
import IntroProduct from './product/IntroProduct'
import Banner from './banner/Banner'
import Policy from './policy'

const Services = () => {
  return (
    <div>
      	<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Services</h1>
								<Line/>
							</div>
						</div>
						<div class="col-lg-7">
							<Banner/>
						</div>
					</div>
				</div>
			</div>
		<div class="why-choose-section">
			<div class="container">			
				<Policy/>			
			</div>
		</div>

		<div class="product-section pt-0">
			<div class="container">
				<div class="row">
					<IntroProduct/>
				</div>
			</div>
		</div>

		<Testimonials/>
    </div>
  )
}

export default Services
