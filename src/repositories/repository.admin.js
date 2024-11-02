
import { query } from "../database/sqlite.js";

async function InserirAdmin(name, email, password) {                          // recebe os métodos do route
  let sql = `INSERT INTO admins (name, email, password) VALUES (?, ?, ?) returning id_admin`;      // inserindo 
  const admin = await query(sql, [ name, email, password ]);                  // executando o sql

  return admin[ 0 ];
}

async function ListarByEmailAdmin(email) {                  // recebe os métodos do route
  let sql = `SELECT * FROM admins WHERE email = ?`;          // inserindo 
  const admin = await query(sql, [ email ]);                 // executando o sql

  if (admin.length == 0) {
    return [];
  } else {
    return admin[ 0 ];
  }
}


export default { InserirAdmin, ListarByEmailAdmin };









// async function Listar(id_user, dt_start, dt_end, id_doctor) {                          // recebe os métodos do route

//   let filtro = [];

//   let sql = `
//     SELECT a.id_appointment, s.description AS service, d.name AS doctor, d.specialty,
// 		  a.booking_date, a.booking_hour, u.name AS user, ds.price
//     FROM appointments a
//     JOIN services s ON (s.id_service = a.id_service)
//     JOIN doctors d ON (d.id_doctor = a.id_doctor)
//     JOIN users u ON (u.id_user = a.id_user)
//     JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service)
//     WHERE a.id_appointment > 0
//   `;

//   const appointments = await query(sql, filtro);            // executando o sql
//   return appointments;
// }

