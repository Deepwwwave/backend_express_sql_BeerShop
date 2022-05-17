import express from 'express'
import { getAllProducts } from "../controllers/shop.controller.js";

const router = express.Router();

router.get('/load_products', getAllProducts)

export default router;