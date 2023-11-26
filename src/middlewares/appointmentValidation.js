import { check } from "express-validator";
import validatinresults from "../helpers/validationResults";

const appointmentValidation = [
  check("appointmentDetail")
    .notEmpty()
    .withMessage("El detalle de la cita es obligatorio")
    .isLength({ min: 2, max: 200 })
    .withMessage("El detalle de la cita debe tener entre 2 y 100 caracteres"),
  check("veterinarian")
    .notEmpty()
    .withMessage("El veterinario es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El veterinario debe tener entre 2 y 100 caracteres"),
  check("pet")
    .notEmpty()
    .withMessage("La mascota es obligatoria")
    .isLength({ min: 2, max: 100 })
    .withMessage("La mascota debe tener entre 2 y 100 caracteres"),
  check("date").notEmpty().withMessage("La fecha es obligatoria"),
  check("time").notEmpty().withMessage("La hora es obligatoria"),
  (req, res, next) => {
    validatinresults(req, res, next);
  },
];

export default appointmentValidation;
