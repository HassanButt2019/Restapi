const mongoose = require('mongoose');


const connectDb = async () =>{

  
  const conn = await mongoose.connect('mongodb://hassanbutt:honda123@societymanagement-shard-00-00.gnzvq.mongodb.net:27017,societymanagement-shard-00-01.gnzvq.mongodb.net:27017,societymanagement-shard-00-02.gnzvq.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-pmccen-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
 // useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
  });
  console.log(`Mongo Db Connected: ${conn.connection.host}`);
}

module.exports = connectDb;