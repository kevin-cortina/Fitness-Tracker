const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    day: {
        type:Date,
        default:()=>new Date,
    },
    exercises:[{
        type:{
            type: String,
        trim: true,
        required: "please enter exescise type"
        },
        name:{
            type: String,
            trim: true,
            required: "enter name"  
        },
        duration:{
            type: Number,
        
        required: "please enter exescise duration"
        },
        weight:{
        type: Number,
        
        },
        reps:{
            type:Number,
        },
        sets:{
            type:Number,

        },
        distance:{
            type:Number,
        }
    }]
    
})
const Workout =mongoose.model("Workout",workoutSchema)
module.exports = Workout