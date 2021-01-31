const mongoose = require('mongoose');

const LeaderBoardSchema = new mongoose.Schema({
    playerId: Number,
    balance: Number,
    lastUpdateDate:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("LeaderBoard", LeaderBoardSchema, "LeaderBoard");