import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../constants/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container w-80 h-96 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <img src={blog.img} alt={blog.title} className="w-full h-auto" />
      <p className="mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
