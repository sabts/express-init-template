const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
    name: String,
    surname: String,
    phone: String,
    email: String
}, { timestamps: true, versionKey: false }
)

const Student = model('student', studentSchema);
module.exports = Student

//timestamps: true //cuando se creo u actualizo
//versionKey: false elimina el tema de la version 
//https://mongoosejs.com/docs/schematypes.html