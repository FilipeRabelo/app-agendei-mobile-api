// recebe as info do repository
// a service nao sabe como o repository vai listar os dados
// É O REPOSITORY QUEM FAZ O ACESSO AO BD E TRÁS AS INFO

import repositoryDoctor from '../repositories/repository.doctor.js';

async function Listar(name) {                           // recebe os métodos do route
  const doctors = await repositoryDoctor.Listar(name);  // passei para o repos inserir no bd
  return doctors;
}


async function Inserir(name, specialty, icon){                              // recebi os dados
  const doctor = await repositoryDoctor.Inserir(name, specialty, icon);     // passei para o repos inserir os dados
  return doctor;
}


async function Editar(id_doctor, name, specialty, icon) {
  const doctor = await repositoryDoctor.Editar(id_doctor, name, specialty, icon);
  return doctor;
}


async function Excluir(id_doctor) {
  const doctor = await repositoryDoctor.Excluir(id_doctor); // passei para o repos inserir os dados
  return doctor;
}

// serviços
async function ListarServicos(id_doctor) {                           // recebe os métodos do route
  const serv = await repositoryDoctor.ListarServicos(id_doctor);    // passei para o repos inserir no bd
  return serv;
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos };