const LeaderBoard = require('../models/LeaderBoard');

exports.getLeaderBoard = async function () {

    try {
        var listLeaderBoard = [];
        listLeaderBoard = await LeaderBoard.find()
        return listLeaderBoard;

    } catch (e) {
        throw Error(e);
    }
}

exports.getRankLeaderBoard = async function () {

    try {
        var listLeaderBoard = [];
        listLeaderBoard = await LeaderBoard.find().sort({balance : -1}).limit(100);
        return listLeaderBoard;
    
    } catch (e) {
        throw Error(e);
    }
}

exports.getTotalLeaderBoard = async function () {

    try {
        totalLeaderBoard = await LeaderBoard.countDocuments();
        return totalLeaderBoard;

    } catch (e) {
        throw Error(e);
    }
}


exports.getMaxDataLeaderBoard = async function () {

    try {
        var listLeaderBoard = {};
        var leaderBoard = {};

        listLeaderBoard = await LeaderBoard.findOne();
        if (listLeaderBoard)
        {
            leaderBoard = await LeaderBoard.findOne().sort({lastUpdateDate : -1}).limit(1);
            return leaderBoard.lastUpdateDate;
        }
        else
        {
            return null;
        }

        } catch (e) {
            throw Error(e);
        }
}

exports.getPlayerLeaderBoard = async function (pGameResult) {

    try {
        var leaderBoard = {};
        leaderBoard = await LeaderBoard.findOne({ playerId: pGameResult.playerId });
        return leaderBoard;

    } catch (e) {
        throw Error(e);
    }
}

exports.deleteLeaderBoard = async function () {
    try {
        await LeaderBoard.deleteMany();
        return null;
        
    } catch (e) {
        throw Error(e);
    }
}

exports.postLeaderBoard = async function (pGameResult) {

    try {
        const leaderboard = await LeaderBoard.create({
            playerId: pGameResult.playerId,
            balance: pGameResult.win,
            lastUpdateDate: pGameResult.timestamp
         })

         return leaderboard;
    } catch (e) {
        throw Error(e);
    }
}

exports.putLeaderBoard = async function (pGameResult, pPlayer) {

    try {

        pPlayer.balance = pPlayer.balance + pGameResult.win;
        pPlayer.lastUpdateDate = pGameResult.timestamp;
       
        const leaderboard = await LeaderBoard.findByIdAndUpdate(pPlayer._id, pPlayer, {useFindAndModify: false});
        return leaderboard;

    } catch (e) {

        throw Error(e);
    }
}