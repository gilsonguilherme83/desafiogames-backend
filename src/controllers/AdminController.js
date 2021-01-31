var GameResultService = require('../services/GameResultService')    
var LeaderBoardService = require('../services/LeaderBoardService')   

exports.getContadores =  async (req, res) => { 
    try {
        
        const totalLeaderBoard = await LeaderBoardService.getTotalLeaderBoard();        
        const totalGameResult = await GameResultService.getTotalGameResult();

       return res.json( {totalLeaderBoard: totalLeaderBoard, totalGameResult: totalGameResult } );
        }
        catch(e) {
            return res.json( {erro: e.message} );
        }
};

exports.deleteDados =  async (req, res) => { 
    try {
        
        await LeaderBoardService.deleteLeaderBoard();        
        await GameResultService.deleteGameResult();

       return res.json( {data: "Registros excluídos com sucesso" } );
        }
        catch(e) {
            return res.json( {erro: e.message} );
        }
};

