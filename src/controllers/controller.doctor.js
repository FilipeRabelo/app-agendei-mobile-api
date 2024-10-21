// requisição
import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {                           // recebe os métodos do route

  const doctors = await serviceDoctor.Listar();             // monta as dados - chama o método
  res.status(200).json(doctors);
}

export default { Listar };