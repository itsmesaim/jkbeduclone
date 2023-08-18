const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jkb", {
    useNewUrlParser:true,
    useUnifiedTopology:true
    // createIndexes: true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log(e);
})