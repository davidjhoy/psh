
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = require('../db')

router.get('/', async (req, res) =>{
    //This is the route that will be called if the "Near Me" button is pressed. 
    try{

        //I am filtering the events based on whether their coordinates fall within a distance range from the geolocation coordinates provided in the query params. 
        //The range is +- 0.8 which equates to about 35-50 miles depending on whether its lat or long and the position on earth for lat
        //I am comfortable using this estimate since NYC is about 13 miles long and about 4 miles wide but LA is about 40X30 miles


        const connection = db.getConnection()
        let query = require('url').parse(req.url,true).query;
        let latitude = parseFloat(query.latitude);
        let longitude = parseFloat(query.longitude);
        const collection  = connection.db.collection("events");
       

        collection.find({$and: [{"location.coordinates.0": {"$gt": longitude -0.8, "$lt": longitude + 0.8 }} , {"location.coordinates.1": {"$gt": latitude -0.8, "$lt": latitude + 0.8 }}]}).toArray(function (error, result){
            if (error){
                res.status(400).send("Error Fetching!")
            }else{
                res.json(result);
            }
         })

}
    catch (error){
            res.status(400).send(error.message)
        }

})

module.exports = router

