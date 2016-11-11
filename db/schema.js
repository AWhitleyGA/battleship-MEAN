var mongoose = require('./connection.js')

var ShipSchema = mongoose.Schema({
  type: String,
  coordinates: [],
})

var GameBoardSchema = mongoose.Schema({
  coordinates: [],
})

var PlayerSchema = mongoose.Schema({
  name: String,
  shipsRemaining: Number,
})

var Ship = mongoose.model("Ship", ShipSchema)
var GameBoard = mongoose.model("GameBoard", GameBoardSchema)
var Player = mongoose.model("Player", PlayerSchema)

module.exports = {
  Ship,
  GameBoard,
  Player,
}
