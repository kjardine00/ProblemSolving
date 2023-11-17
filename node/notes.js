// const express = require('express');
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('getting root')
    // req.body = get what is sent in the body of the request
    // req.header = get all the header information
    // req.query = What we get when we do a get query
    // req.params =use the parameters from the url
    // res.status = can send the status for the request
});

app.listen(3000); 






// req.headers. req.header


