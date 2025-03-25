const mongoose=require("mongoose");
 const connect=mongoose.connect("mongodb://localhost:27017/login-tut");
 connect.then(()=>{
    console.log("connect");
 })
 .catch(()=>{
    console.log("not");
 });
 const loginschema=new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    confirm:{
      type:String,

    }

 });
 const collection=new mongoose.model("users",loginschema);
 module.exports=collection;