'use strict';
const express    = require('express');        
const bodyParser = require('body-parser');
const app = express();  
const port = process.env.PORT || 8080;    
const router = require('./router');

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:c123456@ds117623.mlab.com:17623/userlist', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");
    console.log("requst url = " + req.url);
	next();
});

app.use('/api', router);

app.listen(port, () => {
                console.log('Server running on port ' + port)}
);
