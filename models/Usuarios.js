const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bycript = require('bcrypt');

const usuariosShema = new mongoose.Schema({
    email :{
        type: String,
        unique: true, // no es un validador como en sequelize
        lowercase:true,
        trim:true,
    },
    nombre :{
        type: String,
        required:true
        },
    password:{
    type: String,
    required: true,
    },
    token: String,
    expira: Date,
});

//metodo para hashear los passwords

usuariosShema.pre('save',async function(next){
    //si el password ya esta hasheado
    if(!this.isModified('password')){
        return next(); //detener la ejecucion
    }
    //hashear el password
    const hash = await bycript.hash(this.password,12);
    this.password = hash;
next();
})


module.exports = mongoose.model('Usuarios', usuariosShema);