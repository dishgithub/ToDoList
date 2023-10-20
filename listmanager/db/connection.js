const { default: mongoose } = require("mongoose")

const url="mongodb+srv://disha21csu391:Dishuniatlas@cluster0.txt1lym.mongodb.net/listmanager?retryWrites=true&w=majority"
const connection = ()=>{
    mongoose.connect(url).then(()=>{
        console.log("Database Connected Successfully");
    }).catch((error)=>{
        console.log("Database Not Connected",error);
    })
}

module.exports = connection;