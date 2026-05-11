import { products, categoryData, administrador } from "../../data/db.js";

import {
  createNewProduct,
  getProductById,
  updateProduct,
  deleteProduct
} from "../utils/factories.js";


/* =========================================
   CREATE PRODUCT
========================================= */

export const createProduct = (
  req,
  res
) => {

  try {

    const {

      type,
      name,
      category,
      color,
      brand,
      size,
      length,
      store,
      likes,
      dollarPrice,
      currentDollarPrice,
      price,
      originalPrice,
      total_Items,
      description,
      genero,
      age,
      rating,
      reviews,
      img,
      status,
      qrCode

    } = req.body;



    // REQUIRED FIELDS
    if (
      !name ||
      !type ||
      !category
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Missing required fields"
      });
    }



    // CHECK IF PRODUCT EXISTS
    const existingProduct =
      products.find(
        (product) =>
          product.name
            .toLowerCase()
            .trim() ===
          name
            .toLowerCase()
            .trim()
      );



    if (existingProduct) {

      return res.status(409).json({
        success: false,
        message:
          "Product already exists"
      });
    }



    // CREATE PRODUCT
    const newProduct =
      createNewProduct({

        type,

        name,

        category,

        color,

        brand,

        size,

        length,

        store,

        likes,

        dollarPrice,

        currentDollarPrice,

        price,

        originalPrice,

        total_Items,

        description,

        genero,

        age,

        rating,

        reviews,

        img,

        status,

        qrCode
      });



    // SAVE PRODUCT
    products.push(newProduct);



    return res.status(201).json({

      success: true,

      product: newProduct
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error creating product"
    });
  }
};



/* =========================================
   GET ALL PRODUCTS
========================================= */

export const getProducts = (
  req,
  res
) => {

  try {

    return res.status(200).json(
      {products, categoryData, administrador }
    );

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error fetching products"
    });
  }
};



/* =========================================
   GET ONE PRODUCT
========================================= */

export const getOneProduct = (
  req,
  res
) => {

  try {

    const { id } = req.params;



    const product =
      getProductById(
        products,
        Number(id)
      );



    if (!product) {

      return res.status(404).json({

        success: false,

        message:
          "Product not found"
      });
    }



    return res.status(200).json(
      product
    );

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error fetching product"
    });
  }
};



/* =========================================
   UPDATE PRODUCT
========================================= */

export const updateOneProduct = (
  req,
  res
) => {

  try {

    const { id } = req.params;

    const updatedData = req.body;



    const existingProduct =
      getProductById(
        products,
        Number(id)
      );



    if (!existingProduct) {

      return res.status(404).json({

        success: false,

        message:
          "Product not found"
      });
    }



    const updatedProducts =
      updateProduct(
        products,
        Number(id),
        updatedData
      );



    return res.status(200).json({

      success: true,

      message:
        "Product updated successfully",

      products: updatedProducts
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error updating product"
    });
  }
};



/* =========================================
   DELETE PRODUCT
========================================= */

export const deleteOneProduct = (
  req,
  res
) => {

  try {

    const { id } = req.params;



    const existingProduct =
      getProductById(
        products,
        Number(id)
      );



    if (!existingProduct) {

      return res.status(404).json({

        success: false,

        message:
          "Product not found"
      });
    }



    const updatedProducts =
      deleteProduct(
        products,
        Number(id)
      );



    return res.status(200).json({

      success: true,

      message:
        "Product deleted successfully",

      products: updatedProducts
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error deleting product"
    });
  }
};