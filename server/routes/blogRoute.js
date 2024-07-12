const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinaryConfig.js');
const blogController = require('../controllers/blogCont.js');

const router = express.Router();
const upload = multer({ storage });

router.post('/blogs', upload.single('img'), blogController.createBlog);
router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', upload.single('img'), blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;