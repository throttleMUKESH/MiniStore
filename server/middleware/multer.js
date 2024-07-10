import multer from "multer";

// Multer config
const storage = multer.memoryStorage();

const singleUpload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(file.originalname.toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("File upload only supports the following filetypes - " + filetypes));
  }
}).single("image"); // Ensure this matches the field name

export { singleUpload };
