const mongoose = require('mongoose');


const connectDb = async () =>{
  const conn = await mongoose.connect('mongodb+srv://yah22:honda123@societymanagement.l3x9d.mongodb.net/societymanagement?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
  });

  console.log(`Mongo Db Connected: ${conn.connection.host}`);
}

module.exports = connectDb;