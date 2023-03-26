const Vacante = require('../models/Vacantes');
const mongoose = require('mongoose');

exports.mostrarTrabajos = async (req,res,next)=>{

    const vacantes = await Vacante.find();
    if(!vacantes) return next
   console.log(vacantes)
    res.render('home',{
     nombrePagina:'devJobs',
     tagline:'Encuentra y publica trabajos para desarrolladores Web',
     barra:true,
     boton:true ,
     vacantes // como tienen mismo nombre, no es necesario pasar 
   
    })
}