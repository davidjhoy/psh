const express = require('express')
const mongoose = require('mongoose')
const next = require('next')


function connectToDB(){
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(
    () => {console.log("Succesfully connected to MongoDB")},
    err => {console.log(err)}
  )
  
}

function getConnection(){
    return mongoose.connection
}


module.exports = {
    connectToDB,
    getConnection
};