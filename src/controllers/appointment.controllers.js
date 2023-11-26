import Appointment from "../models/appointment.model";

const showAppointments =async(req, res)=>{
const appointmentList = await Appointment.find()
res.status(200).json({appointmentList}) 
}
const createdAppointment = async (req, res) => {
    try {
        const { appointmentDetail, veterinarian, pet, date, time} = req.body;

        const newAppoinment = new Appointment({
            appointmentDetail,
            veterinarian,
            pet,
            date,
            time,
        });

        await newAppoinment.save();
        res.status(201).json({ message: "Turno creado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al crear el turno", error: error.message });
    }
};

const getOneAppointment = async(req, res) => {
    try {
        const {id}= req.params;
        const foundAppointment = await Appointment.findById(id)
        res.status(200).json(foundAppointment)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error para recuperar el turno", error: error.message });
    }
}
const updateAppointment = async (req, res) => {
    try {
      await Appointment.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Turno modificado" });
    } catch (error) {
      res.status(400).json({ message: "Error al modificar el turno", error: error });
    }
  };

  const deleteAppointment= async (req, res) => {
    try {
      await Appointment.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "se borro satisafactoriamente" });
    } catch (error) {
      res.status(400).json({ message: "error al eliminar" });
    }
  
  }; 

export {showAppointments, createdAppointment, updateAppointment, getOneAppointment, deleteAppointment}