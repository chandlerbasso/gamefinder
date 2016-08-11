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
      `INSERT INTO games (game_id, game_name, game_desc, game_image)
      VALUES ($/game_id/,$/game_name/,$/game_desc/, $/game_image/)
      returning *;`, req.body
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
    // let main_id = req.params.gameId
    _db.none(
      `DELETE FROM games
      WHERE game_name = $1;`, [req.body.item]
      )
    .then(()=>{
      console.log('DELETED succesfully', req.body);
      next()
    })
    .catch(error => {
      console.error('*****ERROR IN DELETE ITEM*****', error)
    })
  }
}
