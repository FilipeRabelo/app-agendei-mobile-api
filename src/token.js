// contem as 2 rotinas para gerar o token e validar o token

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config(); // Configure o dotenv

const secretToken = process.env.SECRET_TOKEN;

function CreateToken(id_user){                              // gerando o token
  const token = jwt.sign({id_user}, secretToken, {
    expiresIn: 999999
  });

  return token;
}

// pegar a requisição
function ValidateToken(req, res, next){                // se for uma rota protegida - vai validar o token
  const authToken = req.headers.authorization;         // "Bearer 000000000"

  if(!authToken){
    return res.status(401).json({error: "Token não informado"});  // se nao ler o token
  }

  const [ bearer, token ] = authToken.split(" ")       // split - fatiar - "Bearer" "000000000"

  jwt.verify(token, secretToken, (err, tokenDecoded) => {
    if(err){
      return res.status(401).json({ error: "Token Inválido" });
    }
    req.id_user = tokenDecoded.id_user                 // inserindo o id_user dentro da requisição

    next();
  })

}



export default { CreateToken, ValidateToken };