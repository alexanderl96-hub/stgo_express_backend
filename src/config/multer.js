// import multer from "multer";

// import path from "path";

// import fs from "fs";


// // https://stgo-express-backend.onrender.com/images/products/filename.png

// // CREATE FOLDER IF NOT EXISTS
// const uploadPath =
//   "src/source/images/products";

// if (!fs.existsSync(uploadPath)) {

//   fs.mkdirSync(uploadPath, {
//     recursive: true
//   });
// }




// // STORAGE CONFIG
// const storage =
//   multer.diskStorage({

//     destination: (
//       req,
//       file,
//       cb
//     ) => {

//       cb(null, uploadPath);
//     },



//     filename: (
//       req,
//       file,
//       cb
//     ) => {

//       const uniqueName =
//         Date.now() +
//         path.extname(
//           file.originalname
//         );

//       cb(null, uniqueName);
//     }
//   });




// // EXPORT
// const upload = multer({
//   storage
// });

// export default upload;


// import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";

// https://stgo-express-backend.onrender.com/images/products/filename.png



// // CREATE FOLDER IF NOT EXISTS
// const uploadPath =
//   "src/source/images/products";

// if (!fs.existsSync(uploadPath)) {

//   fs.mkdirSync(uploadPath, {
//     recursive: true
//   });
// }



// // STORAGE CONFIG
// const storage =
//   multer.diskStorage({

//     destination: (
//       req,
//       file,
//       cb
//     ) => {

//       cb(null, uploadPath);
//     },



//     filename: (
//       req,
//       file,
//       cb
//     ) => {

//       const uniqueName =
//         `${Date.now()}-${crypto.randomUUID()}${path.extname(file.originalname)}`;

//       cb(null, uniqueName);
//     }
//   });




// // EXPORT
// const upload = multer({
//   storage
// });

// export default upload;

// import multer from "multer";

// import {
//   CloudinaryStorage
// }
// from "multer-storage-cloudinary";

// import cloudinary
// from "../config/cloudinary.js";



// const storage =
//   new CloudinaryStorage({

//     cloudinary,

//     params: async (
//       req,
//       file
//     ) => ({

//       folder: "products",

//       allowed_formats: [
//         "jpg",
//         "jpeg",
//         "png",
//         "webp",
//         "avif"
//       ],

//       public_id:
//         `${Date.now()}-${file.originalname}`
//     })
//   });




// const upload = multer({
//   storage
// });



// export default upload;

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => ({
    folder: "products",

    format: "avif", // Force AVIF output

    public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, "")}`,

    transformation: [
      {
        fetch_format: "avif"
      }
    ]
  })
});

const upload = multer({ storage });

export default upload;