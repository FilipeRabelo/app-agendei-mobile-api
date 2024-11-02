// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS

import { query } from "../database/sqlite.js";



async function Listar(id_user, dt_start, dt_end, id_doctor) {                          // recebe os métodos do route

  let filtro = [];

  let sql = `
    SELECT a.id_appointment, s.description AS service, d.name AS doctor, d.specialty,
		  a.booking_date, a.booking_hour, u.name AS user, ds.price
    
    FROM appointments a
    JOIN services s ON (s.id_service = a.id_service)
    JOIN doctors d ON (d.id_doctor = a.id_doctor)
    JOIN users u ON (u.id_user = a.id_user)    
    JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service)
    
    WHERE a.id_appointment > 0 `;

  if(id_user){
    filtro.push(id_user);
    sql = sql + 'AND a.id_user = ? '
  }

  if(dt_start){
    filtro.push(dt_start);
    sql = sql + 'AND a.booking_date >= ? '
  }

  if(dt_end){
    filtro.push(dt_end);
    sql = sql + 'AND a.booking_date <= ? '
  }


  if(id_doctor){
    filtro.push(id_doctor);
    sql = sql + 'AND a.id_doctor = ? '
  }

  sql = sql + 'ORDER BY a.booking_date, a.booking_hour'

  const appointments = await query(sql, filtro);            // executando o sql
  return appointments;
}



async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {                          // recebe os métodos do route

  let sql = `
    INSERT INTO appointments 
    (id_user, id_doctor, id_service, booking_date, booking_hour) VALUES (?, ?, ?, ?, ?)
    returning id_appointment
  `;

  const appointment = await query(
    sql, [ id_user, id_doctor, id_service, booking_date, booking_hour ]
  );

  return appointment[ 0 ];
}


async function Deletar(id_user, id_appointment) {                          // recebe os métodos do route

  // manda o comando
  let sql = `
    DELETE FROM appointments
    WHERE id_appointment = ? AND id_user = ?
  `;

  await query(sql, [ id_appointment, id_user ]);

  return { id_appointment };
}



export default { Listar, Inserir, Deletar };




















async function ListarByUser(id_user) {                          // recebe os métodos do route

  let sql = `
    SELECT a.id_appointment, s.description AS service, d.name AS doctor, d.specialty,
		  a.booking_date, a.booking_hour, u.name AS user, ds.price
    FROM appointments a
    JOIN services s ON (s.id_service = a.id_service)
    JOIN doctors d ON (d.id_doctor = a.id_doctor)
    JOIN users u ON (u.id_user = a.id_user)
    JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service)
    WHERE a.id_user = ?
    ORDER BY a.booking_date, a.booking_hour
  `;

  const serv = await query(sql, id_user);            // executando o sql
  return serv;
}