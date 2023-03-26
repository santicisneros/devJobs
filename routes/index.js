const express =require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');
const vacantesControllers = require('../controllers/vacantesControllers')


module.exports =()=>{
    router.get('/', homeController.mostrarTrabajos)
    
 //crear vacante
    router.get('/vacantes/nueva',vacantesControllers.formularioNuevaVacante)
    router.post('/vacantes/nueva',vacantesControllers.agregarVacante)

    //mostrar vacante 
    router.get('/vacantes/:url',vacantesControllers.mostrarVacante)
    return router
}
