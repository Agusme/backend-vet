import { Router } from "express";
import { showProduct } from "../controllers/pacient.controllers";

const router = Router();
router.route('/pacients/').get(showProduct)

export default router;
