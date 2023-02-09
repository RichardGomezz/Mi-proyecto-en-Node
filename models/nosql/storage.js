const  mongoose=require("mongoose") 

const StorgeScheme=new mongoose.Schema(
    {
    url:{
        type:String,
    },
    filename:{
        type:Number,
    },
    

},
{
    timestamps: true,
    versionkey: true,
}
)

module.exports = mongoose.model("storages", StorgeScheme);