
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = require('../db')

router.get('/', async (req, res) =>{
    try{

        //OPTION 1 -- More Efficient with API call but less correct 
        // const connection = db.getConnection()
        // let query = require('url').parse(req.url,true).query;
        // let city = query.city;
        // const collection  = connection.db.collection("events");
        // fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&limit=1&type=city&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOCODE_API}
        // `)
        // .then(response => response.json())
        // .then((json)=> {
        //     let longitude = parseFloat(json.results[0].lon)
        //     let latitude = parseFloat(json.results[0].lat)
            
            
        //     //I am using the geocode api to find a random coordinate for each inputted city then i am filtering the events based on whether their coordinates fall within a distance range from those coordinates. 
        //     //The range is +- 0.8 which equates to about 35-50 miles depending on whether its lat or long and the position on earth for lat
        //     //I am comfortable using this estimate since NYC is about 13 miles long and about 4 miles wide but LA is about 40X30 miles
        //     //The drawback of this appraoch is that it does not do a good job of filtering between events in nearby cities like NY, NJ
        //     //The benefit is that we are only making one call to the geoapify api. 

        //     collection.find({"location.coordinates.0": {"$gt": longitude -0.8, "$lt": longitude + 0.8 }}).toArray(function (error, result){
        //         if (error){
        //             res.status(400).send("Error Fetching!")
        //         }else{
        //             res.json(result);
        //         }
        //     });
           
            
        // })
        // .catch((error)=>{
        //     res.status(400).send(error.message)
        // })
        
     // ****************************************************************************************************************************************************************************** 
     //*******************************************************************************************************************************************************************************
     //OPTION 2 -- more API calls but also more accurate
     const connection = db.getConnection()
     let query = require('url').parse(req.url,true).query;
     let city = query.city;
     const collection  = connection.db.collection("events");
     const requestOptions = {
        method: 'GET',
      };

    //   const filterEvents = (events) =>{
    //     cityEvents = events.map((event)=>{
                    
    //         const parseCity = (eventCity) =>{
    //             if (String(eventCity).toLowerCase() == String(city).toLowerCase()){
    //                 return event;
    //             }
    //         }
            
    //         fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${event.location.coordinates[1]}&lon=${longitude = event.location.coordinates[0]}&apiKey=${process.env.NEXT_PUBLIC_GEOCODE_API}`, requestOptions)
    //           .then(response => response.json())
    //           .then(result => { parseCity(result.features[0].properties.city)})
            
                
    //      })

    //   }
      

    const allEvents = collection.find({}).toArray(async function (error, result){
                if (error){
                    res.status(400).send("Error Fetching!")
                }else{
                    const filteredVenues = await Promise.all(
                        result.map(async(event)=>{
                            const longitude = event.location.coordinates[0]
                            const latitude = event.location.coordinates[1]
                            return await  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.NEXT_PUBLIC_GEOCODE_API}`, requestOptions)
                            .then(response => response.json())
                            .then(result => {
                            const eventCity = result.features[0].properties.city
                            
                            if (eventCity == city){
                                return event
                            }else{
                                return null
                            }
                        })

                        })
                    );
                    res.json(filteredVenues)
                }
              
            })
    

        
    
}
    catch (error){
        res.status(500).json({message: error.message})
    }
})



module.exports = router