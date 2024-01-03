const userModal = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController={
 
    // CREATE USER MODULE
    async createUser(req,res){
       
        try{
            let{
                user_name,
                user_email,
                user_mobileno,
                user_password,
                user_about
            }=req.body;
            let ency_password = await bcrypt.hash(req.body.user_password,10);

            let payLoad = {
                user_name,
                user_email,
                user_mobileno,
                ency_password,
                user_password,
                user_about
            }
            if(user_email.length > 0 && user_password.length){
                let [checkEmail] = await userModal.checkEmail(user_email)
                if(checkEmail.length === 0){
                    let[userResponse] = await userModal.createUser(payLoad)
                    if(userResponse.affectedRows > 0){
                        res.send({
                            status: true,
                            message: "User Created Successfully...!",
                        })
                    }
                }else{
                    res.send({
                        status:false,
                        message: "User allready exist !"
                    })
                }
            }
        }
        catch(err){
            console.log("Error",err);
        }
    },

    async loginUser(req,res){
        try{
            let{
                user_email,
                user_password,
            }=req.body;

            if(user_email.length > 0 && user_password.length > 0){
                let [verifyData] = await userModal.loginUser(user_email)

                if(verifyData.length > 0){
                    let verifyPassword = await bcrypt.compare(user_password,verifyData[0].user_password);
                    if(verifyPassword === true){
                        let userToken = jwt.sign({user_email:verifyData[0].user_email},'nest_billing');
                        res.header('auth',userToken).json({
                            status:true,
                            data:verifyData[0],
                            token:userToken,
                        });
                    }
                    else{
                        res.send(
                            {
                                status: false,
                                message: "Invalid cretentials...!"
                            }
                        )
                    }
                }
                else{
                    res.send(
                        {
                            status: false,
                            message: "Invalid cretentials...!"
                        }
                    )
                }
            }

        }
        catch(err){
            console.log("Error",err);
        }
    },
}

module.exports = userController;