// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS

import { query } from "../database/sqlite.js";

async function Inserir(name, email, password) {                          // recebe os métodos do route
  let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?) returning id_user`;      // inserindo 
  const user = await query(sql, [name, email, password]);              // executando o sql

  return user[0];
}

async function ListarByEmail(email) {                  // recebe os métodos do route
  let sql = `SELECT * FROM users WHERE email = ?`;     // inserindo 
  const user = await query(sql, [email]);              // executando o sql

  if(user.length == 0){
    return [];
  }else{
    return user[0];
  }

}


export default { Inserir, ListarByEmail };












// async function Listar(name) {                          // recebe os métodos do route
//   let filter = [];
//   let sql = 'SELECT * FROM doctors ';                  // listando 

//   if (name) {
//     sql = sql + 'WHERE name LIKE ? ';                  // onde eo nome parece com o paramento q vou passar
//     filter.push('%' + name + '%');
//   }
//   sql = sql + 'ORDER BY name';

//   const doctors = await query(sql, filter);            // executando o sql
//   return doctors;
// }




// async function Editar(id_doctor, name, specialty, icon) {
//   let sql = `update doctors set name=?, specialty=?, icon=? where id_doctor = ?`;
//   await query(sql, [name, specialty, icon, id_doctor]);

//   return { id_doctor };
// }


// async function Excluir(id_doctor) {                                // recebe os métodos do route
//   let sql = `DELETE FROM doctors WHERE id_doctor = ?`;
//   await query(sql, [id_doctor]);

//   return { id_doctor };
// }