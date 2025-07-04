const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const studentRoute = require('./routes/studentRoute')
const authRoute = require('./routes/authRoute')
const postRoute = require('./routes/postRoute')

const app = express()
const corsOption = {
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:5173'
    ]
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

app.use("/v1/student", studentRoute(express))
app.use("/v1/auth", authRoute(express))
app.use("/v1/post", postRoute(express))

app.listen(PORT, () => console.log(`Server running at http://${hostName}:${PORT}`))