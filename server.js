const express = require('express');
const dotenv = require('dotenv');

const connectDb = require('./config/database');
//install morgan
const morgan = require('morgan');


//connect Database

connectDb();




//load env variables
dotenv.config({path:'./config/config.env'})


//routes files
const money_pool = require('./routes/money_pool');





const app = express();

//body parser
app.use(express.json());

//dev logging middleware
if(process.env.NODE_ENV === 'development')
{
app.use(morgan('dev'));
}

//mount routers

app.use('/api/v1/money_pool',money_pool);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));


// hnadle unhandled promise rejections

process.on('unhandledRejection',(err,promise)=>{
console.log(`Error : ${err.message}`);
//close server & exit process
server.close(()=> process.exit(1));
});
