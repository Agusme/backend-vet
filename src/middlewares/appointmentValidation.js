import { check } from "express-validator";
import validatinresults from "../helpers/validationResults";

const appointmentValidation = [
  check("appointmentDetail")
    .notEmpty()
    .withMessage("El detalle de la cita es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El detalle de la cita debe tener entre 2 y 100 caracteres"),
  check("veterinarian")
    .notEmpty()
    .withMessage("El veterinario es obligatorio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El veterinario debe tener entre 2 y 100 caracteres"),
  check("pet")
    .notEmpty()
    .withMessage("La mascota es obligatoria")
    .isLength({ min: 2, max: 30 })
    .withMessage("La mascota debe tener entre 2 y 100 caracteres"),
  check("date").notEmpty().withMessage("La fecha es obligatoria"),
  check("time").notEmpty().withMessage("La hora es obligatoria").custom((value) => {
    if (value >= 8 && value <= 16) {
      return true;
    } else {
      throw new Error("La hora debe estar entre las 8:00 hs y 16:00 hs");
    }
  }),
  (req, res, next) => {
    validatinresults(req, res, next);
  },
];

export default appointmentValidation;
