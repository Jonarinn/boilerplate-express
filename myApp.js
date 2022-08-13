let express = require('express');
let app = express();
require('dotenv').config();



console.log('Hello World');

app.get('/', function(req, res) {
    res.sendFile( __dirname + "/views/index.html")
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', ( req, res ) => {
    const helloJson = 'Hello json'
    
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? helloJson.toUpperCase() : helloJson;
    const data = {
        'message': message
    }
    
    res.json(data)
    
})






























 module.exports = app;
