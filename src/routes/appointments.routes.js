import { Router } from "express";
import { createdAppointment, deleteAppointment, getOneAppointment, showAppointments, updateAppointment } from "../controllers/appointment.controllers";
import appointmentValidation from "../middlewares/appointmentValidation";

const router = Router();
router.route('/appointments')
.get(showAppointments)
.post([appointmentValidation] ,createdAppointment)

router.route('/appointments/:id')
.get(getOneAppointment)
.put(updateAppointment)
.delete(deleteAppointment)


export default router;
