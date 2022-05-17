import express from 'express';
import adminRoutes from '../routes/admin.routes.js';
import shopRoutes from '../routes/shop.routes.js';


const router = express.Router();

router.use("/api/v1/admin",adminRoutes)
router.use("/api/v1/shop", shopRoutes)

export default router