const express = require('express')
const game    = express.Router()
const db      = require('../models/savedgame')

const sendJSONresp = (req,res)=>res.json(res.rows)


game.route('/')
    .delete(db.deleteGame, (req,res) => res.send( req.params.gameId))

game.route('/')
    .get(db.getGames, sendJSONresp)
    .post(db.addGame, (req,res) => res.status(201).json({data:'success'}).end())

module.exports = game
