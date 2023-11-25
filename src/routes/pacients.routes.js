import { Router } from "express";
import { createdPacient, showPacients } from "../controllers/pacient.controllers";
import pacientValidation from "../middlewares/pacientValidation";

const router = Router();
router.route('/pacients')
.get(showPacients)
.post([pacientValidation],createdPacient)
export default router;
