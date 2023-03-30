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
    
  body('nombre').notEmpty().withMessage('El nombre es obligatorio').escape(),
  body('email').isEmail().withMessage('El email es obligatorio').escape(),
  body('password').bail().notEmpty().isLength({ min: 8, max:12 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage('La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial').withMessage('El email es obligatorio').escape(),
  body('confirmar').bail().equals(({ req }) => req.body.password).withMessage('El password es diferente'),
  

  (req,res,next)=>{
      console.log(req.body);
      const errors = validationResult(req);// se guardan errores
      console.log(errors)
      if (!errors.isEmpty()) {
          return res.render('crear-cuenta',
          { errors: errors.array() });
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