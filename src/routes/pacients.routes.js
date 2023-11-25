import { Router } from "express";
import { createdPacient, deletePacient, getOne, showPacients, updatePacient } from "../controllers/pacient.controllers";
import pacientValidation from "../middlewares/pacientValidation";

const router = Router();
router.route('/pacients')
.get(showPacients)
.post([pacientValidation],createdPacient)

router.route('/pacients/:id')
.get(getOne)
.put(updatePacient)
.delete(deletePacient)


export default router;
