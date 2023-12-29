const express = require('express');
const app = express();
var indexRouter = require('./routes/index.routes');

app.use('/nest-billing',indexRouter)

app.listen(5000,function(){
    console.log("port running on 5000");
});