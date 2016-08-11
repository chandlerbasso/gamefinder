
const ajaxAdapter = {
  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  },

gameCall(query){
  let url = 'http://www.giantbomb.com/api/search/?api_key=5014e3ad8c792807890a139e19f0085cd3add7bb&format=json&limit=5&query='+query
  return fetch(url)
  // console.log(fetch(url))
  .then(res => res.json())
},
companyCall(query){
  let url = 'http://www.giantbomb.com/api/search/?api_key=5014e3ad8c792807890a139e19f0085cd3add7bb&format=json&limit=1&query='+query+'&resources=company&limit=5'
  return fetch(url)
  // console.log(fetch(url))
  .then(res => res.json())

},
companygameCall(query){
  let url = 'http://www.giantbomb.com/api/company/'+query+'/?api_key=5014e3ad8c792807890a139e19f0085cd3add7bb&format=json&field_list=developed_games&limit=10'
  return fetch(url)
  .then(res => res.json())
  .then(console.log('company:',query))
},
addGame(game_id, game_name, game_desc, game_image){
  console.log(game_id)
  return fetch('/game',{
    method:'POST',
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify( {
      'game_id': game_id,
      'game_name': game_name,
      'game_desc': game_desc,
      'game_image': game_image
    })
   })
  .then(r=> r.json())
},
deleteGame(item){
  return fetch('/game',{
    method:'DELETE',
    headers:{
      "Content-type": "application/json; charset= UTF-8"
    },
    body:
      JSON.stringify(item)


  })
  .then(r=> console.log(r))
},
feelingLucky(){
  let num = (Math.random() * (23000 - 1) + 1).toString();
   num = Math.floor(num)
  console.log(num)
  let url='http://api.giantbomb.com/game/'+num+'?api_key=5014e3ad8c792807890a139e19f0085cd3add7bb&format=json'
  return fetch(url)
  .then(res => res.json())
},
getGame(){
  return fetch ('/game')
  .then(res=>res.json())
},
gameInfo(gameid){
  let id = gameid.toString()
  let url='http://api.giantbomb.com/game/'+id+'?api_key=5014e3ad8c792807890a139e19f0085cd3add7bb&format=json'
  return fetch(url)
  .then(res=>res.json())
}
}


export default ajaxAdapter
