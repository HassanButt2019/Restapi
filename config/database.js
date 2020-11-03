const mongoose = require('mongoose');


const connectDb = async () =>{

  
  const conn = await mongoose.connect('mongodb://yah22:honda123@societymanagement-shard-00-00.l3x9d.mongodb.net:27017,societymanagement-shard-00-01.l3x9d.mongodb.net:27017,societymanagement-shard-00-02.l3x9d.mongodb.net:27017/societymanagement?ssl=true&replicaSet=atlas-pt9ekw-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
 // useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
  });
  console.log(`Mongo Db Connected: ${conn.connection.host}`);
}

module.exports = connectDb;