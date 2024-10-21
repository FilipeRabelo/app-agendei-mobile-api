import { Router } from "express";     // Router é o maestro das rotas
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();              // instanciando o Router

router.get('/doctors', controllerDoctor.Listar);    // chamando a function Listar de dentro do controllers
router.post('/doctors', controllerDoctor.Inserir);    // chamando a function Enviar de dentro do controllers
router.put("/doctors/:id_doctor", controllerDoctor.Editar);
router.delete('/doctors/:id_doctor', controllerDoctor.Excluir);




export default router;