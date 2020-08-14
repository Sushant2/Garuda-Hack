const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const appointmentSchema = Schema({
    patientID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    },
    doctorID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    probableStartTime : Date,
    actualEndTime : Date,
    appointmentStatusID : {
        type : String,
        default:'Active',
        enum : ['Cancelled, Active, Completed']
    }
},{timestamps:true})

module.exports = mongoose.model('Appointment',appointmentSchema)
