import { check } from "express-validator";
import validatinresults from "../helpers/validationResults";

const pacientValidation =[
    check('ownerName')
    .notEmpty()
    .withMessage('El nombre del dueño es obligatorio')
    .isLength({min:2, max:30})
    .withMessage('El nombre del dueño debe tener entre 2 y 100 caracteres'),
    check('email')
    .notEmpty()
    .withMessage('El mail es obligatorio')
    .isLength({min:2, max:30})
    .withMessage('El mail debe tener entre 2 y 200 caracteres'),
    check('tel')
    .notEmpty()
    .withMessage('El telefono es obligatorio')
    .isLength({min:2, max:12})
    .withMessage('El tel debe tener entre 2 y 100 caracteres'),
    check('petName')
    .notEmpty()
    .withMessage('El nombre de la mascota es obligatorio')
    .isLength({min:2, max:30})
    .withMessage('El nombre de la mascota debe tener entre 2 y 100 caracteres'),
    check('specie')
    .notEmpty()
    .withMessage('La especie es obligatoria')
    .isLength({min:2, max:30})
    .withMessage('La especie debe tener entre 2 y 100 caracteres'),
    check('race')
    .notEmpty()
    .withMessage('La raza es obligatoria')
    .isLength({min:2, max:30})
    .withMessage('La raza debe tener entre 2 y 100 caracteres'),
    (req, res, next) => {
        validatinresults(req, res, next);
      },
]

export default pacientValidation;