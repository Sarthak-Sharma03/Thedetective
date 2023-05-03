const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const DB = process.env.DATABASE;
const DB="mongodb+srv://sarthak:sarthak@cluster0.8v9igjo.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery" , true);

mongoose.connect(DB, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=> console.log(err));
