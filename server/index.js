const express = require('express');
const app = express();
const indexRouter = require('./routes/index.routes');
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/nest-billing',indexRouter)

app.listen(process.env.PORT,function(){
    console.log(`port running on ${process.env.PORT}`);
});