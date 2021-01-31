var GameResultService = require('../services/GameResultService');  

// GET GAME RESULT
exports.getGameResult = async (req, res, next) => {
    try {
        const listGameResult = await GameResultService.getGameResult();
        return res.json( listGameResult );
    }
    catch(e) {
        return res.json( {erro: e.message} );
    }
  };

 // POST GAME RESULT
  exports.postGameResult = async (req, res, next) => {
    try {  
        await GameResultService.postGameResult(req.body);

        return res.status(200).json({ status: 200, message: "Game Result cadastrado com sucesso!" })
    } 
    catch (e) {
        return res.json( {erro: e.message} );
    }
  };

  // DELETE GAME RESULT
  exports.deleteGameResult = async(req, res) => {
    try {
        await GameResultService.deleteGameResult();
        return res.json( {data: "Registros excluídos com sucesso"} );
      }  
      catch(e) {
        console.log(e);
        return res.json( {erro: e.message} );
    }
}