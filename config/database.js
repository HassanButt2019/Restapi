const mongoose = require('mongoose');
const dbConfig = require('./dbconfig');


const connectDb = async () =>{

   try{
  const conn = await mongoose.connect('mongodb+srv://yah22:honda123@societymanagement.l3x9d.mongodb.net/societymanagement?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
  });
  console.log(`Mongo Db Connected: ${conn.connection.host}`);
}catch(err)
{
console.log(err);
process.exit(1);
}


}

module.exports = connectDb;