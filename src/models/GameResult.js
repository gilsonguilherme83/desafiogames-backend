const mongoose = require('mongoose');

const GameResultSchema = new mongoose.Schema({
    playerId: Number,
    gameId: Number,
    win: Number,
    timestamp:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("GameResult", GameResultSchema, "GameResult");