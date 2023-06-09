import { Router } from "express";
import { ProductsController } from "./productsController.js";

import mongoose from "mongoose";
import { authorization } from "../../middlewares/authMiddlewares.js";
// import productosEnEmpresa from "../dao/filesystem/manangers/productMananger.js";
// const productMananger = productosEnEmpresa;
const router = Router();

let Controller = new ProductsController();

//* Obtener Productos

router.get("/", async (req, res, next) => {
  try {
    let productos = await Controller.getAllProducts(req);

    if (productos.status == 200) {
      return res.status(200).send(productos.response);
    } else {
      return res.status(400).send(productos.response);
    }
  } catch (error) {
    next(error);
  }
});

//* Subir producto
router.post("/", authorization("admin"), async (req, res, next) => {
  try {
    let result = await Controller.addProduct(req);
    if (result.status == 200) {
      return res.status(200).send(result);
    } else {
      return res.status(400).send(result.response);
    }
  } catch (error) {
    next(error);
  }
});

//* Traer Productos con un id
router.get("/:pid", async (req, res, next) => {
  try {
    let result = await Controller.getProductWhitId(req);
    if (result.status == 200) {
      return res.status(200).send(result.response);
    } else {
      return res.status(400).send(result.response);
    }
  } catch (error) {
    next(error);
  }
});

//*Actualizar productos
router.put("/:pid", authorization("admin"), async (req, res, next) => {
  try {
    let result = await Controller.updateProducts(req);
    if (result.status == 200) {
      return res.status(200).send({
        status: result.status,
        response: result.response,
      });
    } else {
      return res.status(400).send(result.response);
    }
  } catch (error) {
    next(error);
  }
});

//* Eliminar productos
router.delete("/:pid", authorization("admin"), async (req, res, next) => {
  try {
    let result = await Controller.deleteProducts(req);
    if (result.status == 200) {
      return res.status(200).send(result.response);
    } else {
      return res.status(400).send(result.response);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
