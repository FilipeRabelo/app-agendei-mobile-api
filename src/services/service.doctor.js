// recebe as info do repository
// a service nao sabe como o repository vai listar os dados
// É O REPOSITORY QUEM FAZ O ACESSO AO BD E TRÁS AS INFO

import repositoryDoctor from '../repositories/repository.doctor.js';

async function Listar() {                           // recebe os métodos do route
  
  const doctors = await repositoryDoctor.Listar();  // usando o método em repository
  return doctors;
}



export default { Listar };