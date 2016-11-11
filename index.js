var express = require('express')
var app = express()
var http = require('http').Server(app)
var hbs = require('hbs')
var Player = require('./db/schema.js').Player
var GameBoard = require('./db/schema.js').GameBoard
var Ship = require('./db/schema.js').Ship


app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/views/welcome.html')
})



http.listen(3000, () => {
  console.log('listening')
})
