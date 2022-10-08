const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()
module.exports = () => {
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log('Connected to dataBase successFully');
    }catch(error){
       console.log(error);
       console.log("could not connected to db successfully");
    }
}