// recebe as info do repository
// a service nao sabe como o repository vai listar os dados
// É O REPOSITORY QUEM FAZ O ACESSO AO BD E TRÁS AS INFO

import repositoryAppointments from '../repositories/repository.appointment.js';

async function ListarByUser(id_user) {                           // recebe os métodos do route
  const appointments = await repositoryAppointments.ListarByUser(id_user);  // passei para o repos inserir no bd
  return appointments;
}

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {   
                           
  const appointment = await repositoryAppointments.Inserir(
    id_user, id_doctor, id_service, booking_date, booking_hour
  );     

  return appointment;
}


export default { ListarByUser, Inserir };