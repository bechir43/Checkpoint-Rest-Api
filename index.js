const express= require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require("cors")


dotenv.config()
app.use(cors("http://localhost:3000/"))  
const port = process.env.PORT || 5000

app.use(express.json())


mongoose.connect(process.env.MONGO_URL).then( () => console.log("database connected")).catch((err) => console.log('err :' , err))

app.use("/api", require("./routes/contactRoutes"))

app.listen(port, () => console.log("lestening on port :", port))


