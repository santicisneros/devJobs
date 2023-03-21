const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid= require ('shortid');
const vacantesSchema = new mongoose.Schema({
    titulo : {
        type:String,
        required: [true,'El nombre de la vacante es obligatorio'],
        trim: true
    },
    empresa:{
        trype:String,
        trim:true,
    },
    ubicacion:{
        type:String,
        trim:true,
        required:'La ubicación es obligatorio',
    },
    contrato:{
        type:String,
    },
    salario:{
        type:String,
        default:0,
        trim:true,
    },
    descripcion:{
        type:String,
        trim:true,
    },
url:{
    type: String,
    lowercase:true,
},
skills:[String],
candidatos:[{
    nombre:String,
    email:String,
    cv:String,
}]
});
vacantesSchema.pre('save',function(next) {
   //crear url 
    const url=slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`

    next()
    
})

module.exports = mongoose.model('Vacante', vacantesSchema)