const mongoose=require('mongoose');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name should be atleast 3 charachter long']
        },
        lastname:{
            type:String,
            required:false,
            minlength:[3,'last name should be atleast 3 charachter long']
        }
    },
    email:{
        type:String,
        required:true,
        minlength:[6,'email should be atleast 6 charachter long']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String, 
    },
})

userSchema.methods.generateAuthToken = async function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bycrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bycrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;