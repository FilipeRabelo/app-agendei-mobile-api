import serviceAdmin from "../services/service.admin.js";

async function InserirAdmin(req, res) {
  const { name, email, password } = req.body;                       // desestruturando do corpo da requisição 
  const admin = await serviceAdmin.InserirAdmin(name, email, password);    // chama o service - monta as dados - chama o método

  res.status(201).json(admin);                                       // devolvendo os dados
}


async function LoginAdmin(req, res) {
  const { email, password } = req.body;                     // desestruturando do corpo da requisição 

  const admin = await serviceAdmin.LoginAdmin(email, password);    // chama o service - monta as dados - chama o método

  if (admin.length == 0) {
    res.status(401).json({ error: "E-mail ou senha Inválida!" });
  } else {
    res.status(200).json(admin);                               // devolvendo os dados
  }
}



export default { InserirAdmin, LoginAdmin };


// listando o admin
// async function Listar(req, res) {

//   const dt_start = req.query.dt_start;
//   const dt_end = req.query.dt_end;
//   const id_doctor = req.query.id_doctor;

//   const appointments = await serviceAdmin.Listar(0, dt_start, dt_end, id_doctor);

//   res.status(200).json(appointments);
// }