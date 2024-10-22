// recebe as info do repository
// a service nao sabe como o repository vai listar os dados
// É O REPOSITORY QUEM FAZ O ACESSO AO BD E TRÁS AS INFO

// aqui q é feito a tratativa da senha - validações
// npm install bcrypt

// para gerar o token
// npm install jsonwebtoken

import bcrypt from 'bcrypt';
import repositoryUser from '../repositories/repository.user.js';
import jwt from '../token.js';

async function Inserir(name, email, password) {                         // recebi os dados
  
  const hashPassword = await bcrypt.hash(password, 10);                 // promise
  const user = await repositoryUser.Inserir(name, email, hashPassword);     // passei para o repos inserir os dados
  
  user.token = jwt.CreateToken(user.id_user);

  return user;
}

async function Login(email, password) {                       // recebi os dados

  // validando o email
  const user = await repositoryUser.ListarByEmail(email);     // passei para o repos inserir os dados
  
  if(user.length == 0){
    return [];
  }else{

    // validando a senha
    if(await bcrypt.compare(password, user.password)){
      delete user.password;                                  // por segurança, nao enviar a senha
      
      user.token = jwt.CreateToken(user.id_user);

      return user;
    }else{
      return [];
    }
  }
}

async function Profile(id_user) {                           // recebe os métodos do route
  const user = await repositoryUser.Profile(id_user);  // passei para o repos inserir no bd
  return user;
}


export default { Inserir, Login, Profile };