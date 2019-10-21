const express = require('express')
const app = express()
var http = require('http').Server(app)
var path = require('path')
const bodyParser = require('body-parser')

app.use('/static', express.static(__dirname + '/static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/html/login.html')
})
app.post('/missatge', (req, res) => {
    console.log(req.body.data)
    res.sendStatus(200)
})
app.get('/*', (req, res) => {
    res.redirect('/')
})

// Set Port
app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})