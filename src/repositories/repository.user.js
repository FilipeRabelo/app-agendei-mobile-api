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


async function Profile(id_user) {                       // recebe os métodos do route

  let sql = `SELECT id_user, name, email FROM users WHERE id_user = ?`;     // inserindo 
  const user = await query(sql, [id_user]);              // executando o sql

  return user[0];
}


export default { Inserir, ListarByEmail, Profile };