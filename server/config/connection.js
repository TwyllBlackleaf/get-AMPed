const mongoose = require('mongoose');

//regular connection string
// mongodb+srv://dbAdmin:buzzbuzz>@get-amped-cluster0.hvnlp.mongodb.net/get-AMPed-DB?retryWrites=true&w=majority

/* full driver code connection
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbAdmin:buzzbuzz@get-amped-cluster0.hvnlp.mongodb.net/get-AMPed-DB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/get-amped', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
