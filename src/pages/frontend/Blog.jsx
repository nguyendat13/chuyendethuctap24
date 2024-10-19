import React from 'react'
import Testimonials from '../../layouts/Testimonials'
import Line from '../../layouts/Line'
import Banner from './banner/Banner'
import Article from './blog/index'

const Blog = () => {
  return (
    <div>
      	<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Blog</h1>
								<Line/>
							</div>
						</div>
						<div class="col-lg-7">
							<Banner/>
						</div>
					</div>
				</div>
			</div>
		<Article/>
		<Testimonials/>
    </div>
  )
}

export default Blog
