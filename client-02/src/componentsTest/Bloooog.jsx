import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../constants/blogData";

const Bloooog = () => {
  // Simulating fetching blog data
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated data fetching (replace with actual API fetch or state management logic)
    const fetchData = () => {
      // Simulated delay for API call
      setTimeout(() => {
        setBlogs(blogData);
      }, 1000); // Simulated delay of 1 second
    };

    fetchData();
  }, []);

  if (blogs.length === 0) {
    return <div>Loading...</div>; // Handle loading state if needed
  }

  return (
    <div className="flex flex-col justify-center mb-24">
      <div className="flex justify-between">
        <h1 className="text-4xl font-normal">LATEST POST</h1>
        <Link to="/blog" className="relative uppercase underline hover:no-underline">
          READ BLOG
        </Link>
      </div>
      <div className="flex gap-3 justify-center">
        {blogs.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-item">
            <div className="w-80 gap-4 max-w-md rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={post.img} alt={post.title} />
              <div className="flex font-thin px-6 mt-2">
                <p>{post.date}</p> - <p>{post.title}</p>
              </div>
              <h1 className="text-xl mb-3">{post.mainTitle}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bloooog;
