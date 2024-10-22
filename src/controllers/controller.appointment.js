
import serviceAppointment from '../services/service.appointment.js';

async function ListarByUser(req, res) {                               // recebe os métodos do route
  const id_user = req.id_user;
  const appointments = await serviceAppointment.ListarByUser(id_user);             // chama o service - monta as dados - chama o método

  res.status(200).json(appointments);
}

async function Inserir(req, res) {

  const id_user = req.id_user;                       // pega do tokem
  const { id_doctor, id_service, booking_date, booking_hour } = req.body;

  const appointment = await serviceAppointment.Inserir(
    id_user, id_doctor, id_service, booking_date, booking_hour
  );

  res.status(201).json(appointment);
}

export default { ListarByUser, Inserir };