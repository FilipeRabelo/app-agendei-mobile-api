import { Router } from "express";     // Router é o maestro das rotas
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.users.js";
import jwt from './token.js';

const router = Router();              // instanciando o Router

// doctors
router.get('/doctors', jwt.ValidateToken, controllerDoctor.Listar);    // chamando a function Listar de dentro do controllers
router.post('/doctors', jwt.ValidateToken, controllerDoctor.Inserir);    // chamando a function Enviar de dentro do controllers
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete('/doctors/:id_doctor', jwt.ValidateToken, controllerDoctor.Excluir);

// users
router.post("/users/register", controllerUser.Inserir) // criação de conta - post
router.post("/users/login", controllerUser.Login) // criação de conta - post


export default router;