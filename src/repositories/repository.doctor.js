// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS

import { query } from "../database/sqlite.js";

async function Listar() {                           // recebe os métodos do route

  let sql = 'SELECT * FROM doctors';  // executando a query no banco de dados
  const doctors = await query(sql, []);             // devolve
  
  return doctors;
}

export default { Listar };