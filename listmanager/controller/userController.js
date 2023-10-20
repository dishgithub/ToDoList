const userModel = require("../models/userModel");
const encryptDecrypt = require("../utils/encryptDecrypt");



const loginController = async(request,response)=>{
    try {

        const {email,password} = request.body; // original password
        const user = await userModel.findOne({email:email});

        // user.password hashed password

        if(user && user._id){
            if(encryptDecrypt.matchPwd(password,user.password)){
                response.status(200).json({message:"Login Successfully"})

            }
            else{
                response.status(403).json({message:"Invalid Email or password"})
            }
            
        }
    else{
        response.status(404).json({message:"User Not Found"})
    }
        
    } catch (error) {
        response.status(500).json({message:"Internal server error"})
    }
}


   const registerController = async(request,response)=>{
        try {
            const {username,email,password} = request.body;
            const hashedPwd = encryptDecrypt.hashPwd(password);
             
            const user = await userModel.create({
                email:email,
                password:hashedPwd,
                username:username,
            })

            if(user && user._id){
                response.status(201).json({message:"User Register Successfully"})
            }
            else{
                response.status(404).json({message:"user not register"});
            }

            
        } catch (error) {
            console.log(error);
            response.status(500).json({message:"Internal server error"})
        }
    }


module.exports = {registerController,loginController}