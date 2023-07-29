const mongoose=require("mongoose")
const validator=require("validator")

const studentschema=new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email already exis"],
        validator(value){
        if(!validator.isEmail(value)){
        throw new Error("invalid email")
        }
        if (!username) {
            return res.status(400).json({ error: "Name is required." });
          }
        }
    },

    password: { type: String, required: true },
}

)

const Student=new mongoose.model("Student",studentschema);

module.exports=Student;