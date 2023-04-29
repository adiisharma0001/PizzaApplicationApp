const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()
// const mongoURI = 'mongodb+srv://adiisharma001:12345@cluster0.kgdtyxn.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoURI = 'mongodb://adiisharma001:12345@ac-brz0wqo-shard-00-00.kgdtyxn.mongodb.net:27017,ac-brz0wqo-shard-00-01.kgdtyxn.mongodb.net:27017,ac-brz0wqo-shard-00-02.kgdtyxn.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-123069-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {

  try {
    await mongoose.connect(mongoURI);
    console.log("Successfully Connected");
    const fetched_data = await mongoose.connection.db.collection("sample");
    const data = await fetched_data.find({}).toArray()
  } catch (error) {
    console.log("Choo-choo! All aboard! Next stop: the safe zone!")
    console.log(error.message)
  }

}

module.exports = mongoDB;

