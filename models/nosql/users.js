const  mongoose=require("mongoose") 

const UserScheme=new mongoose.Schema(
    {
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    
     email:{
        Type:String,
        unique:true,
    },
    artist:{
        name:{
            type:String
        }
        
    },
    role:{
        type: ["user", "admin"],
        default: "user",
    },
},
{
    timestamps: true,
    versionkey: true,
}
)

module.exports = mongoose.model("users", UserScheme);