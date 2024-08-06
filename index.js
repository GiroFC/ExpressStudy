const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}))
userRoutes(app)

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log("Server initialized in localhost:5000");
})