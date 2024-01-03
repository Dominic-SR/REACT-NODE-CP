const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const dotenv = require('dotenv')
dotenv.config()

console.log(`Your port is ${process.env.PORT}`);

app.use(express.json())
app.use('/nest-billing',indexRouter)

app.listen(5000,function(){
    console.log("port running on 5000");
});