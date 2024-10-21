
// instalar o drive sqlite3: npm install sqlite3
// -- node --watch src / index.js 		// para levantar o app	//

// ports de entrada da aplicação      // aqui q levanta o app

import express from 'express';        // express quem levanta o servidor
import cors from 'cors';              // p abrir o app e ser consumida por script
import router from './routes.js';

const app = express();                // instanciando o servidor

app.use(cors());                      // executar o cors
app.use(router);


app.listen(3001, () => {
  console.log('listening on http://localhost:3001');
});