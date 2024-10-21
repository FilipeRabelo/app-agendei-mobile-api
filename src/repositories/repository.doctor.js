
import { query } from "../database/sqlite.js";

// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS

async function Listar(name) {                          // recebe os métodos do route
  let filter = [];
  let sql = 'SELECT * FROM doctors ';                  // listando 

  if (name) {
    sql = sql + 'WHERE name LIKE ? ';                  // onde eo nome parece com o paramento q vou passar
    filter.push('%' + name + '%');
  }

  sql = sql + 'ORDER BY name';

  const doctors = await query(sql, filter);            // executando o sql
  return doctors;
}


async function Inserir(name, specialty, icon) {                          // recebe os métodos do route
  
  let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) returning id_doctor`;      // inserindo 
  const doctor = await query(sql, [name, specialty, icon]);              // executando o sql
  
  return doctor[0];
}


async function Editar(id_doctor, name, specialty, icon) {
  
  let sql = `update doctors set name=?, specialty=?, icon=? where id_doctor = ?`;
  await query(sql, [name, specialty, icon, id_doctor]);

  return { id_doctor };
}


async function Excluir(id_doctor) {                                // recebe os métodos do route
  
  let sql = `DELETE FROM doctors WHERE id_doctor = ?`;
  await query(sql, [id_doctor]);

  return { id_doctor };
}

export default { Listar, Inserir, Editar, Excluir };