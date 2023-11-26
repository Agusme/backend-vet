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

const getOne = async(req, res) => {
    try {
        const {id}= req.params;
        const foundPacient = await Pacient.findById(id)
        res.status(200).json(foundPacient)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al obtener un paciente", error: error.message });
    }
}
const updatePacient = async (req, res) => {
    try {
      await Pacient.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Paciente modificado" });
    } catch (error) {
      res.status(400).json({ message: "Error al modificar el paciente", error: error });
    }
  };

  const deletePacient = async (req, res) => {
    try {
      await Pacient.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "se borro satisafactoriamente" });
    } catch (error) {
      res.status(400).json({ message: "error al eliminar" });
    }
  
  }; 

export {showPacients, createdPacient, getOne, updatePacient, deletePacient}