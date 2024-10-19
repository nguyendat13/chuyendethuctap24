import React, { useState, useEffect } from 'react';
import PostService from '../../../services/PostService';
import { urlImage } from '../../../config';

const Ourteam = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false); // Added for loading state
  
	useEffect(() => {
	  const fetchData = async () => {
		setIsLoading(true); 
		// Set loading state to true
	 try {
		  const result = await PostService.list();
		  setPosts(result.posts);
		} catch (error) {
		  console.error('Error fetching posts:', error);
		} finally {
		  setIsLoading(false); // Set loading state to false after fetch (success or failure)
		}
	  }
  
	  fetchData();
	}, []); // Empty dependency array ensures data is fetched only once on component mount
  
  return (
	
      <div class="untree_co-section">
		
			<div class="container">

				<div class="row mb-5">
					<div class="col-lg-5 mx-auto text-center">
						<h2 class="section-title">Our Team</h2>
					</div>
				</div>
				<div class="row">
				{posts && posts.length >0 && posts.map((post,index)=>{
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
						<img src={urlImage + "posts/" + post.image} class="img-fluid mb-5"/>
						<h3><a href="#">{post.title}</a></h3>
            			<span class="d-block position mb-4">{post.description}</span>
           	 			<p>{post.detail}</p>
							<p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
					</div> 
						})}
				</div>
			</div>
		</div>
  )
}

export default Ourteam
