const Blog = require('../model/Blog.js');

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, mainTitle, content } = req.body;
    const img = req.file.path;

    const newBlog = new Blog({ title, mainTitle, content, img });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post', error });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts', error });
  }
};

// Get a single blog post by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post', error });
  }
};

// Update a blog post by ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, mainTitle, content } = req.body;
    const img = req.file ? req.file.path : req.body.img;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, mainTitle, content, img },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post', error });
  }
};

// Delete a blog post by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post', error });
  }
};
