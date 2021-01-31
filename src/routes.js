const routes = require('express').Router();

const GameResultController = require('./controllers/GameResultController');
const LeaderBoardController = require('./controllers/LeaderBoardController');

// Rotas GameResult
routes.get('/gameresult', GameResultController.getGameResult);
routes.post("/gameresult", GameResultController.postGameResult);
routes.delete('/gameresult', GameResultController.deleteGameResult);

// Rotas LeardBoard
routes.get('/leaderboard', LeaderBoardController.getLeaderBoard);
routes.get('/leaderboard/rank', LeaderBoardController.getRankLeaderBoard);
routes.get('/leaderboard/dash', LeaderBoardController.getLeaderBoardDash);

routes.post('/leaderboard', LeaderBoardController.postLeaderBoard);
routes.delete('/leaderboard', LeaderBoardController.deleteLeaderBoard);

module.exports = routes;