const Vacante = require('../models/Vacantes');
const mongoose = require('mongoose');

exports.formularioNuevaVacante =(req,res)=>{
    res.render('nueva-vacante',{
     nombrePagina:'Nueva Vacante',
     tagline:'Llena el formulario y publica tu vacante'
    })
}
exports.agregarVacante = async (req,res)=>{
    const vacante = new Vacante(req.body);
    // usuario autor de la vacante(falta)
    // crear array de habilidades (skills)
    vacante.skills = req.body.skills.split(',');
    // almacenar en la BD
    const nuevaVacante = await vacante.save();
    // redireccionar
    res.redirect(`/vacantes/${nuevaVacante.url}`);
}
