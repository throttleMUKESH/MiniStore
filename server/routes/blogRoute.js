import express from 'express';
import { createBlogController, deleteBlogController } from '../controllers/blogCont.js';
import { singleUpload } from '../middleware/multer.js';

const router = express.Router();

router.post('/create', singleUpload, createBlogController);
router.delete('/delete/:id', deleteBlogController); // Assuming you want to delete by ID

export default router;
