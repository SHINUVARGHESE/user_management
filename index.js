const express = require('express');
const db = require('./config/connection');
const cors = require('cors');
const bodyparser = require('body-parser');
const route = require('./controller/route/route');

var app = express();
 
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());
app.use('/', route);

var PORT = 3001; 

db.connect((err) => {
    if (err) {
        console.log('connection error' + err)
    } else {
        console.log('databse connected');
        app.listen(process.env.PORT || PORT, () => {
            console.log(`server running on port ${PORT}`);
        })
    }
})




