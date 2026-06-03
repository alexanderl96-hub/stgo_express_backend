// import express from "express";
// import cors from "cors";
// import morgan from "morgan";

// import customerRoutes from "./routes/customer.routes.js";
// import orderRoutes from "./routes/order.routes.js";
// import adminRoutes from "./routes/admin.routes.js"
// import productsRoutes from "./routes/products.routes.js"
// import categoryRoutes from "./routes/category.routes.js";
// import colorRoutes from "./routes/color.routes.js";
// import passwordRoutes from "./routes/password.routes.js";
// import productImagesRoutes from "./routes/productImages.routes.js";

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // 👇 Serve static images
// app.use("/images", express.static(path.join(__dirname, "source")));

// // middlewares
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.json());
// app.use(morgan("dev"));

// // health check
// app.get("/", (req, res) => {
//   res.json({ message: "API running 🚀" });
// });

// // routes
// app.use("/api/products", productsRoutes)
// app.use("/api/admin", adminRoutes);
// app.use("/api/customers", customerRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/colors", colorRoutes);

// app.use("/api/auth", passwordRoutes);
// app.use("/api/product-images", productImagesRoutes);

// export default app;

import express from "express";
import cors from "cors";
import morgan from "morgan";

import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/order.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import productsRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import colorRoutes from "./routes/color.routes.js";
import passwordRoutes from "./routes/password.routes.js";
import productImagesRoutes from "./routes/productImages.routes.js";
import qrcode from "./routes/productQRCode.routes.js"


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();




// STATIC IMAGES
// app.use(
//   "/images",
//   express.static(
//     path.join(__dirname, "source")
//   )
// );

app.use(
  "/images",
  express.static(
    path.join(__dirname, "source/images")
  )
);



// MIDDLEWARES
app.use(cors({

  origin: [

    "http://localhost:3000",

    "https://stgo-ventas.onrender.com"
  ],

  credentials: true
}));


app.use(express.json());

app.use(morgan("dev"));




// HEALTH CHECK
app.get("/", (req, res) => {

  res.json({
    message: "API running 🚀"
  });
});




// ROUTES
app.use("/api/products", productsRoutes);

app.use("/qrcode", qrcode);

app.use("/api/admin", adminRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/colors", colorRoutes);

app.use("/api/auth", passwordRoutes);

app.use(
  "/api/product-images",
  productImagesRoutes
);




export default app;