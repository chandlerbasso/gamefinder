const _db = require('./connection')

module.exports = {
  getGames(req,res,next){
    _db.any('SELECT * from games;')
    .then(games => {
      res.rows = games;
      console.log(games)
      next()
    })
    .catch(error => {
      console.error('*****ERROR GETTING GAME*****', error)
    })
  },
  addGame(req,res,next){
    console.log('===', req.body)
    _db.one(
      `INSERT INTO games (name, description)
      VALUES ($1,$2)
      returning *;`, [req.body.name, req.body.description]
      )
    .then(games => {
      console.log('ADDED game successfully');
      res.rows = games;
      next()
    })
    .catch(error => {
      console.error('*****ERROR ADDING GAME*****', error)
    })
  },
  deleteGame(req,res,next){
    let game_id = req.params.gameId
    _db.none(
      `DELETE FROM games
      WHERE game_id = $1;`, [game_id]
      )
    .then(()=>{
      console.log('DELETED succesfully', game_id);
      next()
    })
    .catch(error => {
      console.error('*****ERROR IN DELETE ITEM*****')
    })
  }
}
