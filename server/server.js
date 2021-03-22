const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const routes = require('./routes/routes.js')(app)

const server = app.listen(3001, () => {
    console.log('listening on port %s....', server.address().port);
})


