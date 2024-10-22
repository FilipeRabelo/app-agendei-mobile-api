// requisição
import serviceUser from "../services/service.user.js";

async function Inserir(req, res) {
  const { name, email, password } = req.body;                       // desestruturando do corpo da requisição 
  const user = await serviceUser.Inserir(name, email, password);    // chama o service - monta as dados - chama o método
  
  res.status(201).json(user);                                       // devolvendo os dados
}


async function Login(req, res) {
  const { email, password } = req.body;                     // desestruturando do corpo da requisição 
  
  const user = await serviceUser.Login(email, password);    // chama o service - monta as dados - chama o método
  
  if(user.length == 0){
    res.status(401).json({error: "Email ou senha inválida"});
  }else{
    res.status(200).json(user);                               // devolvendo os dados
  }
}

async function Profile(req, res){

  const id_user = req.id_user;
  const user = await serviceUser.Profile(id_user);

  res.status(200).json(user);
}


export default { Inserir, Login, Profile };












// async function Listar(req, res) {                               // recebe os métodos do route
//   const name = req.query.name;
//   const doctors = await serviceDoctor.Listar(name);             // chama o service - monta as dados - chama o método
  
//   res.status(200).json(doctors);
// }

// async function Editar(req, res) {
//   const id_doctor = req.params.id_doctor;
//   const { name, specialty, icon } = req.body;
//   const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
  
//   res.status(200).json(doctor);
// }

// async function Excluir(req, res) {
//   const id_doctor = req.params.id_doctor;                                // pegando o paramento
//   const doctor = await serviceDoctor.Excluir(id_doctor);                 // chamando o serviceDoctor
  
//   res.status(200).json(doctor);                                          // devolvendo os dados
// }