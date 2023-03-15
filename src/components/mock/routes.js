import { Router } from "express";
import { generateProduct } from "./mockProducts.js";


const router = Router();

router.get("/", async (req, res) => {
  let products = generateProduct();

  res.status(200).send({
    status: 200,
    response: products.response,
  });
});


export default router;
