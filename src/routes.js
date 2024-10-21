import { Router } from "express";     // Router é o maestro das rotas
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();              // instanciando o Router

router.get('/doctors', controllerDoctor.Listar);    // chamando a function Listar de dentro do controllers











export default router;