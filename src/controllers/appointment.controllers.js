import Appointment from "../models/appointment.model";

const showAppointments =async(req, res)=>{
try{
  const appointmentList = await Appointment.find()
  res.status(200).json(appointmentList) 
}catch{
  res.status(404).json({message:'Error searching for requested appointments'})
}

}
const createdAppointment = async (req, res) => {
  const { appointmentDetail, veterinarian, pet, date, time} = req.body;

    try {
      const  existingAppointmentHour = await Appointment.countDocuments({
        date,
        time,
      });


      if (existingAppointmentHour>=2){
        return res.status(400).json({
          message: "No hay turno disponible en ese horario.",
        });
      }




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
        res.status(400).json({ message: "Error al crear el turno", error: error});
    }
};

const getOneAppointment = async(req, res) => {
    try {
        const {id}= req.params;
        const foundAppointment = await Appointment.findById(id)
        res.status(200).json(foundAppointment)
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error para recuperar el turno", error: error});
    }
}
const updateAppointment = async (req, res) => {
    try {
      const { date, time } = req.body;

    const existingAppointmentHour = await Appointment.countDocuments({
      date,
      time,
      _id: { $ne: req.params.id }, 
    });

    if (existingAppointmentHour >= 2) {
      return res.status(400).json({
        message: "No hay turno disponible en ese horario.",
      });
    }
      await Appointment.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Turno modificado" });
    } catch (error) {
      res.status(404).json({ message: "Error al modificar el turno", error: error });
    }
  };

  const deleteAppointment= async (req, res) => {
    try {
      await Appointment.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "se borro satisafactoriamente" });
    } catch (error) {
      res.status(404).json({ message: "error al eliminar" });
    }
  
  }; 

export {showAppointments, createdAppointment, updateAppointment, getOneAppointment, deleteAppointment}