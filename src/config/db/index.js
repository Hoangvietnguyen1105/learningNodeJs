const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/coffee');
        console.log("connect....done")
    }
    catch(error){
        console.log("connect...false")
    }
}
module.exports = {connect}