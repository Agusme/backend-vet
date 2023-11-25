import Pacient from "../models/pacient.model"

const showPacients =async(req, res)=>{
const productList = await Pacient.find()
res.status(200).json({productList})

}
const createdPacient = async (req, res) => {
    try {
        const { ownerName, email, tel, petName, specie, race } = req.body;
        console.log('Datos recibidos:', req.body); // Agrega este console.log para verificar datos

        const newPacient = new Pacient({
            ownerName,
            email,
            tel,
            petName,
            specie,
            race,
        });

        await newPacient.save();
        res.status(201).json({ message: "Paciente creado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al crear paciente", error: error.message });
    }
};
export {showPacients, createdPacient}