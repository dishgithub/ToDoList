const express = require('express');
const bodyParser=require('body-parser');

const userRoutes = require('./routes/userRoutes');
const connection = require('./db/connection');
const taskRouter = require('./routes/taskRoutes');

const app = express();
connection();

app.use(express.json())

//app.use("/static",express.static("public"));
app.use(express.static("public"));

//app.use(bodyParser.urlencoded({ extended:true }));

app.use('/api',userRoutes);

app.use('/api',taskRouter);

//app.set("view engine", "ejs");

// app.get('/',function(request,response){
//     response.render("list");
// });

// app.get('/',function(request,response){
//     const i=request.body.n;
//     console.log(i);
// });

// app.get("/api/create"function(request,response){

// }
// )


//app.get('/api/create',()={})

app.listen(3000,function () {
        console.log("running on port 3000..");
})