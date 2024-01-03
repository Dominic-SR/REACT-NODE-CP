const database = require('../utils/database');

const userModel = {
    async createUser(data){
        let query = `insert into users_table(user_name,user_email,user_mobileno,user_password,org_password,user_about) values ('${data.user_name}','${data.user_email}','${data.user_mobileno}','${data.ency_password}','${data.user_password}','${data.user_about}' )`;
        return database.promise().query(query)
    },

    async checkEmail(email){
        let query =`select user_email from users_table where user_email = '${email}'`;
        return database.promise().query(query);
    },

    async loginUser(email){
        let query =`select user_name,user_email,user_mobileno,user_password,user_about from users_table where user_email= '${email}'`;
        return database.promise().query(query);
    }
}
module.exports = userModel