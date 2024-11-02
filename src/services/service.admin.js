
import repositoryAdmin from '../repositories/repository.admin.js';
import bcrypt from 'bcrypt';
import jwt from '../token.js';

async function InserirAdmin(name, email, password) {                         // recebi os dados

  const hashPassword = await bcrypt.hash(password, 10);                 // promise
  const admin = await repositoryAdmin.InserirAdmin(name, email, hashPassword);     // passei para o repos inserir os dados

  admin.token = jwt.CreateToken(admin.id_admin);

  return admin;
}

async function LoginAdmin(email, password) {                       // recebi os dados

  // validando o email
  const admin = await repositoryAdmin.ListarByEmailAdmin(email);     // passei para o repos inserir os dados

  if (admin.length == 0) {
    return [];
  } else {

    // validando a senha
    if (await bcrypt.compare(password, admin.password)) {
      delete admin.password;                                  // por segurança, nao enviar a senha

      admin.token = jwt.CreateToken(admin.id_admin);

      return admin;
    } else {
      return [];
    }
  }
}



export default { InserirAdmin, LoginAdmin };


// async function Listar(id_user, dt_start, dt_end, id_doctor) {
//   const appointments = await repositoryAdmin.Listar(id_user, dt_start, dt_end, id_doctor);

//   return appointments;
// }