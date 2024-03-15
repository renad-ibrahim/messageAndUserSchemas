const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017")
    .then(()=>{
        console.log("DB is connected");
    })
    .catch((err)=>{
        console.log("DB not connected" + err.message);
    })
}

module.exports = {connect}