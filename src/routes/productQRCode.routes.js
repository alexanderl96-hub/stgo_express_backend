import express from "express";

import {  
  getProductByQRCode
 } from "../controllers/productsQRCode.controllers.js"; 

 const router = express.Router();

 router.get(
   "/:id",
   getProductByQRCode
 );
 
 export default router;