const express = require('express')
const app = express()
const port = 3000
const {connect} = require("./db")


const messageRoute = require("./routes/messageRoute")

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json())

app.use("/messages" , messageRoute)

connect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))