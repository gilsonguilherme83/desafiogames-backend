const routes = require('express').Router();

const GameResultController = require('./controllers/GameResultController');
const LeaderBoardController = require('./controllers/LeaderBoardController');
const AdminController = require('./controllers/AdminController');

// Rotas GameResult
routes.get('/gameresult', GameResultController.getGameResult);
routes.post("/gameresult", GameResultController.postGameResult);


// Rotas LeardBoard
routes.get('/leaderboard', LeaderBoardController.getLeaderBoard);
routes.get('/leaderboard/rank', LeaderBoardController.getRankLeaderBoard);
routes.post('/leaderboard', LeaderBoardController.postLeaderBoard);


//Admin
routes.get('/admin/dash', AdminController.getContadores);
routes.delete('/admin/delete', AdminController.deleteDados);



module.exports = routes;