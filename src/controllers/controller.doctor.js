// requisição
import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {                               // recebe os métodos do route
  const name = req.query.name;
  const doctors = await serviceDoctor.Listar(name);             // chama o service - monta as dados - chama o método
  
  res.status(200).json(doctors);
}

async function Inserir(req, res) {
  const { name, specialty, icon } = req.body;                           // desestruturando do corpo da requisição 
  const doctor = await serviceDoctor.Inserir(name, specialty, icon);    // chama o service - monta as dados - chama o método
  
  res.status(201).json(doctor);                                         // devolvendo os dados
}

async function Editar(req, res) {
  const id_doctor = req.params.id_doctor;
  const { name, specialty, icon } = req.body;
  const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
  
  res.status(200).json(doctor);
}

async function Excluir(req, res) {
  const id_doctor = req.params.id_doctor;                                // pegando o paramento
  const doctor = await serviceDoctor.Excluir(id_doctor);                 // chamando o serviceDoctor
  
  res.status(200).json(doctor);                                          // devolvendo os dados
}


// SERVIÇOS MEDICOS

async function ListarServicos(req, res) {                               // recebe os métodos do route
  const id_doctor = req.params.id_doctor;
  const serv = await serviceDoctor.ListarServicos(id_doctor);             // chama o service - monta as dados - chama o método

  res.status(200).json(serv);
}


export default { Listar, Inserir, Editar, Excluir, ListarServicos };