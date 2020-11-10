const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/database');
//install morgan
const morgan = require('morgan');
const passport = require('passport');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

//connect Database
connectDb();


//load env variables
dotenv.config({path:'./config/config.env'})


//routes files
const money_pool = require('./routes/money_pool');
const auth = require('./routes/auth');
const complains = require('./routes/complains');
const app = express();
//dev logging middleware
if(process.env.NODE_ENV === 'development')
{
app.use(morgan('dev'));
}

//mount routers
app.use(cors());
//body parser
app.use(express.json());
// app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//cookie parser
app.use(cookieParser());
app.use('/api/v1/moneypool',money_pool);
app.use('/api/v1/auth',auth);
app.use('/api/v1/complains',complains);
app.use(passport.initialize())
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
require('./config/passport')(passport);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));


// hnadle unhandled promise rejections

process.on('unhandledRejection',(err,promise)=>{
console.log(`Error : ${err.message}`);
//close server & exit process
server.close(()=> process.exit(1));
});
