const mongoose=require("mongoose")

const quesschema=new mongoose.Schema({
    // question:String,
    // option:String,
    // option:String,
    // option:String,
    // option:String,
    // c_option:String,
    
        question:String,
        answers:[
            {option:String},
            {option:String},
            {option:String},
            {option:String}
        ]
});
const Question=mongoose.model("Question",quesschema);
module.exports=Question;
