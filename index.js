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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/html/login.html')
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

// Set Port
app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})