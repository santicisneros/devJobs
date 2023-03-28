const express =require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');
const vacantesControllers = require('../controllers/vacantesControllers')
const usuariosControllers = require('../controllers/usuariosControllers')


module.exports =()=>{
    router.get('/', homeController.mostrarTrabajos)
    
 //crear vacante
    router.get('/vacantes/nueva',vacantesControllers.formularioNuevaVacante)
    router.post('/vacantes/nueva',vacantesControllers.agregarVacante)

    //mostrar vacante 
    router.get('/vacantes/:url',vacantesControllers.mostrarVacante);
//editar vacante
    router.get('/vacantes/editar/:url',vacantesControllers.formEditarVacante);
    router.post('/vacantes/editar/:url',vacantesControllers.editarVacante);

    //crear cuentas

    router.get('/crear-cuenta', usuariosControllers.formCrearCuenta)
    return router
}

