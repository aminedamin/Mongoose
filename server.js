const express= require("express")
const ConnectDb = require("./config/ConnectDb")
const contactRouter = require("./routes/Contact")

const app = express()


const port=5000

app.use(express.json())

app.use('/api/contact',contactRouter)


ConnectDb()


app.listen(port,console.log(`server en marche ${port}`))