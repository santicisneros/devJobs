const Usuario = require('../models/Usuarios');
const mongoose = require('mongoose');

exports.formCrearCuenta = (req,res)=>{
    res.render('crear-cuenta',{
        nombrePagina:'Crea tu cuenta en devJobs',
        tagline:'Comienza a publicar tus vacantes gratis, solo debes crear una cuenta'
    })
}