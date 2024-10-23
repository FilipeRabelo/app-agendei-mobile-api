// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS

import { query } from "../database/sqlite.js";

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

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {                          // recebe os métodos do route

  // manda o comando
  let sql = `
    INSERT INTO appointments 
    (id_user, id_doctor, id_service, booking_date, booking_hour) VALUES (?, ?, ?, ?, ?)
    returning id_appointment
  `;

  // executa o comando
  const appointment = await query(
    sql, [ id_user, id_doctor, id_service, booking_date, booking_hour ]
  );

  // retorna
  return appointment[ 0 ];
}

async function Deletar(id_user, id_appointment) {                          // recebe os métodos do route

  // manda o comando
  let sql = `
    DELETE FROM appointments
    WHERE id_appointment = ? AND id_user = ?
  `;

  // executa o comando
  await query(sql, [ id_appointment, id_user ]);

  // retorna
  return { id_appointment };
}

export default { ListarByUser, Inserir, Deletar };