import multer from "multer";

import path from "path";

import fs from "fs";




// CREATE FOLDER IF NOT EXISTS
const uploadPath =
  "src/source/images/products";

if (!fs.existsSync(uploadPath)) {

  fs.mkdirSync(uploadPath, {
    recursive: true
  });
}




// STORAGE CONFIG
const storage =
  multer.diskStorage({

    destination: (
      req,
      file,
      cb
    ) => {

      cb(null, uploadPath);
    },



    filename: (
      req,
      file,
      cb
    ) => {

      const uniqueName =
        Date.now() +
        path.extname(
          file.originalname
        );

      cb(null, uniqueName);
    }
  });




// EXPORT
const upload = multer({
  storage
});

export default upload;