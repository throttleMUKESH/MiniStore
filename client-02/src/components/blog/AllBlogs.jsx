import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../../constants/blogData";

const AllBlogs = () => {
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
    <div className="flex flex-col justify-center mb-24 px-4 md:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-normal">All Blogs</h1>
        <Link to="/Shop" className="text-sm md:text-base relative uppercase underline hover:no-underline">
          Shop Now
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-item">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={post.img} alt={post.title} />
              <div className="p-4">
                <div className="flex font-thin text-xs md:text-sm mb-2">
                  <p>{post.date}</p> - <p className="ml-1">{post.title}</p>
                </div>
                <h1 className="text-lg md:text-xl mb-3">{post.mainTitle}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
