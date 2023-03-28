const Usuarios = require('../models/Usuarios');
const mongoose = require('mongoose');
const { validationResult, body} = require('express-validator')

exports.formCrearCuenta = (req,res)=>{
    res.render('crear-cuenta',{
        nombrePagina:'Crea tu cuenta en devJobs',
        tagline:'Comienza a publicar tus vacantes gratis, solo debes crear una cuenta'
    })
};

exports.validarRegistro =[
    body('nombre').notEmpty().withMessage('El combre es obligatorio'),
    (req,res,next)=>{
        const errors = validationResult(req);;// se guardan errores
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          next();
        }];

exports.crearUsuario= async (req,res,next)=>{
    //crear usuario
  const usuario = new Usuarios(req.body);
  //console.log(usuario)
  const nuevoUsuario = await usuario.save();
  if(!nuevoUsuario) return next();

  res.redirect('/iniciar-sesion')
}