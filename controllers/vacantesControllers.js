const Vacante = require('../models/Vacantes');
const mongoose = require('mongoose');

exports.formularioNuevaVacante =(req,res)=>{
    res.render('nueva-vacante',{
     nombrePagina:'Nueva Vacante',
     tagline:'Llena el formulario y publica tu vacante'
    })
};
exports.agregarVacante = async (req,res)=>{
    const vacante = new Vacante(req.body);
    // usuario autor de la vacante(falta)
    // crear array de habilidades (skills)
    vacante.skills = req.body.skills.split(',');
    // almacenar en la BD
    const nuevaVacante = await vacante.save();
    // redireccionar
    res.redirect(`/vacantes/${nuevaVacante.url}`);
};

//muestro una vacante
exports.mostrarVacante =async (req,res,next)=>{
 const vacante = await Vacante.findOne({url:req.params.url});

 //si no hay resultado 
 if(!vacante) return next();

 res.render('vacante',{
    vacante,
    nombrePagina:vacante.titulo,
    barra:true
 })
}


exports.formEditarVacante = async (req,res,next)=>{
const vacante = await Vacante.findOne({url:req.params.url})
if(!vacante) return next();

res.render('editar-vacante',{
    vacante,
    nombrePagina:`Editar ${vacante.titulo}`
})
}
