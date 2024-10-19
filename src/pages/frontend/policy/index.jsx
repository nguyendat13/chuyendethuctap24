import React, { useState, useEffect } from 'react';
import PostService from '../../../services/PostService';
import { urlImage } from '../../../config';

const Policy = () => {
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
    <div>
      {isLoading ? ( // Display loading indicator while fetching
        <div>Loading posts...</div>
      ) : (
        <div className="row my-5">
          {posts && posts.length > 0 && posts.map((post, index) => (
            <div className="feature" key={index}> {/* Added key for efficient rendering */}
              <div className="icon">
                <img
                  src={urlImage + "posts/" + post.image}
                  alt="Image"
                  className="img-fluid" // Corrected class name
                />
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Policy;