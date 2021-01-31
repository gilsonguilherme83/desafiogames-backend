const GameResult = require('../models/GameResult');

exports.getGameResult = async function () {

    try {
        const listGameResult = await GameResult.find({ }).sort( { timestamp : 1 } )
        return listGameResult;

    } catch (e) {
        throw Error(e);
    }
}

exports.getNovosGameResult = async function (pMaxDataLeaderBoard) {

    try {
        var listNovosGameResult = [];
        listNovosGameResult = await GameResult.find({ timestamp: { $gt: pMaxDataLeaderBoard } });

        return listNovosGameResult;

    } catch (e) {
        throw Error(e);
    }
}

exports.getTotalGameResult = async function () {

    try {
        const totalGameResult = await GameResult.countDocuments();
        return totalGameResult;

    } catch (e) {
        throw Error(e);
    }
}

exports.postGameResult = async function (lstGameResultMemoria) {

    try {
        lstGameResultMemoria.forEach(async (gr) => {
            const gameresult = await GameResult.create({
                playerId: gr.playerId,
                gameId: gr.gameId,
                win: gr.win,
                timestamp: gr.timestamp
            });
        }); 

    } catch (e) {
        throw Error(e);
    }
}

exports.deleteGameResult = async function () {

    try {
        await GameResult.deleteMany();
    } catch (e) {
        throw Error(e);
    }
}