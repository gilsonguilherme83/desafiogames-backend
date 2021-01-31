var GameResultService = require('../services/GameResultService')    
var LeaderBoardService = require('../services/LeaderBoardService')   

exports.getLeaderBoard =  async (req, res) => {
    try {
        const listLeaderBoard = await LeaderBoardService.getLeaderBoard();

       return res.json( listLeaderBoard );
        }
        catch(e) {
            return res.json( {erro: e.message} );
        }
};

exports.getLeaderBoardDash =  async (req, res) => { 
    try {
        
        const totalLeaderBoard = await LeaderBoardService.getTotalLeaderBoard();        
        const totalGameResult = await GameResultService.getTotalGameResult();

       return res.json( {totalLeaderBoard: totalLeaderBoard, totalGameResult: totalGameResult } );
        }
        catch(e) {
            return res.json( {erro: e.message} );
        }
};

exports.getRankLeaderBoard =  async (req, res) => {
    try {
        const listRankLeaderBoard = await LeaderBoardService.getRankLeaderBoard();

       let date_ob = new Date();
        let tempo = date_ob.getMinutes();
        let variavel = (tempo%2);

        if (variavel == 0){
            this.postLeaderBoard();
        }

        return res.json( listRankLeaderBoard );
        }
    catch(e) {
        return res.json( {erro: e.message} );
    }
};

exports.deleteLeaderBoard = async(req, res) => {
    try {
        await LeaderBoardService.deleteLeaderBoard();
        return res.json( {data: "Registros excluídos com sucesso"} );
      }  
      catch(e) {
        return res.json( {erro: e.message} );
    }
};

exports.postLeaderBoard = async(req, res) => {
    try {
        const maxDataLeaderBoard = await LeaderBoardService.getMaxDataLeaderBoard();

        if (!maxDataLeaderBoard) {

            const listGameResult = await GameResultService.getGameResult();

            for (const gr of listGameResult) {
                const player = await LeaderBoardService.getPlayerLeaderBoard(gr);

                    if (player) {
                        await LeaderBoardService.putLeaderBoard(gr, player);
                    }
                    else{
                        await LeaderBoardService.postLeaderBoard(gr);
                    }
            };
        } 
        else {
            const listGameResult = await GameResultService.getNovosGameResult(maxDataLeaderBoard);

            for (const gr of listGameResult) {

                const player = await LeaderBoardService.getPlayerLeaderBoard(gr);
        
                if (player) {
                    await LeaderBoardService.putLeaderBoard(gr, player);
                }
                else{
                    await LeaderBoardService.postLeaderBoard(gr);
                }
            };
        }
    }  
    catch(e) {
        return res.json( {erro: e.message} );
    }
}
