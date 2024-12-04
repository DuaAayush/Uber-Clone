const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'Name must be at least 3 characters']
        },
        lastname:{
            type:String,
            minlength:[3,'Name must be at least 3 characters']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please enter a valid email'],

    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password must be at least 6 characters']
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be at least 3 characters']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','Auto'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number,
            min:[-90,'Latitude must be between -90 and 90'],
            max:[90,'Latitude must be between -90 and 90']
        },
        lng:{
            type:Number,
            min:[-180,'Longitude must be between -180 and 180'],
            max:[180,'Longitude must be between -180 and 180']
        }
    }


})
CaptainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

CaptainSchema.methods.comparePassword = async function(password){    
    return await bcrypt.compare(password,this.password);
}

CaptainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}


const CaptainModel = mongoose.model('Captain',CaptainSchema);

module.exports = CaptainModel;