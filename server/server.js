const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const corsOption = {
    origin: ['http://127.0.0.1:5500']
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOption))

const PORT = 3000
const hostName = "127.0.0.1"

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to my sosmed backend services!"
    })
})

app.get("/student", (req, res) => {
    res.send({
        message: "this end point for fetch student API!"
    })
})

app.post("/student", (req, res) => {
    res.send({
        message: "this end point for store data student API!"
    })
})

app.put("/student/:id", (req, res) => {
    res.send({
        message: "this end point for update data student API!"
    })
})

app.delete("/student/:id", (req, res) => {
    res.send({
        message: "this end point for delete data student API!"
    })
})

app.listen(PORT, () => console.log(`Server running at http://${hostName}:${PORT}`))