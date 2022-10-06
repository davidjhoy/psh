const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const { sendError } = require('next/dist/server/api-utils')
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()




app.prepare().then(() => {


  const server = express()
  server.use(express.json())
//   const eventsRouter = require('./routes/events')
//   server.use('/v1/events', eventsRouter)


  
  

  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(
    () => {console.log("Succesfully connected to MongoDB")},
    err => {console.log(err)}
  )

  const connection = mongoose.connection
 


  

  server.get('/v1/events',  (req, res) =>{
         const collection  = connection.db.collection("events");
         collection.find().toArray(function (erro, result){
                if (erro){
                    res.status(400).send("Error Fetching!")
                }else{
                    res.json(result);
                }
            });
    // res.end("Hello")
            
  })
 

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
