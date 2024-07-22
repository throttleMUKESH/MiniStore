import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../../../constants/blogData";

const HomeBlog = () => {
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
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-normal mb-4 lg:mb-0">LATEST POST</h1>
        <Link
          to="/blog"
          className="relative uppercase underline hover:no-underline text-blue-500"
        >
          READ BLOG
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {blogs.slice(0, 3).map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 blog-item"
          >
            <div className="max-w-md rounded overflow-hidden m-4">
              <img className="w-full h-48 object-cover" src={post.img} alt={post.title} />
              <div className="flex items-center justify-between mt-2 px-4">
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="text-sm text-gray-600">{post.title}</p>
              </div>
              <h1 className="text-xl font-semibold px-4 mb-3">{post.mainTitle}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
