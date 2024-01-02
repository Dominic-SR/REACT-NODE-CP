// const userModal = require('')

const userController={
 
    async createUser(req,res){
        console.log("Haiiii",req.body);
        // try{
            // let{
            //     user_name,
            //     user_email,
            //     user_password,
            //     user_about
            // }=req.body;
            console.log("req body--->".req);
        // }
        // catch(err){
        //     console.log("Error",err);
        // }
    },

    // async loginUser(req,res){
    //     try{
    //         let{
    //             user_name,
    //             user_email,
    //             user_password,
    //             user_about
    //         }=req.body;

    //     }
    //     catch(err){
    //         console.log("Error",err);
    //     }
    // },
}

module.exports = userController;