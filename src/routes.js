import { Router } from "express";     // Router é o maestro das rotas
import jwt from './token.js';

import controllerDoctor from "./controllers/controller.doctor.js";

import controllerUser from "./controllers/controller.users.js";

import controllerAppointment from './controllers/controller.appointment.js'


const router = Router();              // instanciando o Router

// doctors
router.get('/doctors', jwt.ValidateToken, controllerDoctor.Listar);    // chamando a function Listar de dentro do controllers
router.post('/doctors', jwt.ValidateToken, controllerDoctor.Inserir);    // chamando a function Enviar de dentro do controllers
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete('/doctors/:id_doctor', jwt.ValidateToken, controllerDoctor.Excluir);

// Services (serviços prestados pelos medicos)
router.get('/doctors/:id_doctor/services', jwt.ValidateToken, controllerDoctor.ListarServicos);

// users
router.post("/users/register", controllerUser.Inserir) // criação de conta - post
router.post("/users/login", controllerUser.Login) // criação de conta - post
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile) // listar os dados do user

// Reservas (appointments)
router.get('/appointments', jwt.ValidateToken, controllerAppointment.ListarByUser);
router.post('/appointments', jwt.ValidateToken, controllerAppointment.Inserir);



export default router;