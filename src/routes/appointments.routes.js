import { Router } from "express";
import { createdAppointment, deleteAppointment, getOneAppointment, showAppointments, updateAppointment } from "../controllers/appointment.controllers";

const router = Router();
router.route('/appointments')
.get(showAppointments)
.post(createdAppointment)

router.route('/appointments/:id')
.get(getOneAppointment)
.put(updateAppointment)
.delete(deleteAppointment)


export default router;
