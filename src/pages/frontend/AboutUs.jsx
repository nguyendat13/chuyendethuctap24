import React from 'react'
import Line from '../../layouts/Line'
import Testimonials from '../../layouts/Testimonials'
import Banner from './banner/Banner'
import Policy from './policy'
import Ourteam from './about_us'
import Why from '../../assets/images/why-choose-us-img.jpg'
const AboutUs = () => {
  return (
    <div>
      	<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>About Us</h1>
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
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-6">
						<h2 class="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<Policy/>
					</div>

					<div class="col-lg-3">
						<div class="img-wrap">
							<img src={Why} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
		<Ourteam/>
		<Testimonials/>
    </div>
  )
}

export default AboutUs
