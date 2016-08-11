import React from 'react'
import ajax from '../helpers/ajax.js'
export default class GameResults extends React.Component {
  render(){
    // console.log(this.props.games[0].image.medium_url)
   if(this.props.dropdown === 'aliases' && this.props.lucky === false && this.props.infosearch === false){
      return(

        <div className="container col-centered text-center">
              <a href='/'><p>Home</p></a>
          {this.props.games.map((game,i)=>{
            // console.log(typeof game.image.medium_url);
            // let image = game.image.medium_url;
            // console.log(i + ':' + game.image)
            //MAD PROPS TO FIZAL FOR FIXING IMAGES //
            return(
                <div className="col-md-6 col-centered text-center" key={i}>
                  <h3>{game.name}</h3>
                  <img className="game_image" src={game.image !== null ? game.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" } />
                  <h4 alt={game.id}>{game.deck}</h4>
                  <form onSubmit={this.props.addgame} data-id={game.id} data-name={game.name} data-desc={game.deck !== null ? game.deck : "No Description available" } data-image={game.image !== null ? game.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }>
                    <button type="submit">
                      Save game
                    </button>
                  </form>
                </div>
              )
          })
        }
        </div>
        )
    } else if (this.props.dropdown === 'company' && this.props.companysearch === false && this.props.lucky === false && this.props.infosearch === false){
        return(

        <div className="container col-centered text-center">
          <div className="row">
           <a href='/'><p>Home</p></a>

          {this.props.games.map((games,i)=>{
            return(
                <div className="col-md-6 col-centered text-center" key={i}>
                  <h3>{games.name}</h3>
                  <h4 alt={games.id}>{games.deck}</h4>
                  <img className="game_image" src={games.image !== null ? games.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>
                  <form data-id={games.id}>
                    <button type="submit" onClick={this.props.setdatastate} data-id={games.id}>
                      View games by this company
                    </button>
                  </form>
                </div>
              )
          })
        }
          </div>
        </div>
        )

    } else if(this.props.dropdown === 'company' && this.props.companysearch === true && this.props.lucky === false && this.props.infosearch === false){
          return(
        <div className="container col-centered text-center">
           <a href='/'><p>Home</p></a>
          {this.props.companygames.developed_games.map((games,i)=>{
            // console.log(this.props.companygames.developed_games, games)
            return(
                <div className="col-md-6 col-centered text-center" key={i}>
                  <h3>{games.name}</h3>
                  <h4 alt={games.id}>{games.deck}</h4>
                  {/*<img className="game_image" src={games.image !== null ? games.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>*/}
                  <form onSubmit={this.props.getinfo} data-id={games.id}>
                    <button type="submit">
                      More Information
                    </button>
                  </form>
                </div>
              )
          })
        }
        </div>
        )
      } else if(this.props.infosearch === true){
          return(
            <div className="container col-centered text-center">
              <a href='/'><p>Home</p></a>
                <div className="col-md-6 col-centered text-center">
                  <h3>{this.props.info.name}</h3>
                  <h4 alt={this.props.info.id}>{this.props.info.deck}</h4>
                  <img className="game_image" src={this.props.info.image !== null ? this.props.info.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>
                  {this.props.desc}
                  <form onSubmit={this.props.addgame} data-id={this.props.games.id}>
                    <button type="submit">
                      Save game
                    </button>
                  </form>
                </div>
          </div>
            )
      }
      else if(this.props.lucky === true){
        return(
            <div className="container">
               <a href='/'><p>Home</p></a>
                <div className="col-md-6 col-centered text-center" key='1'>
                  <h3>{this.props.games.name}</h3>
                 { <h4 alt={this.props.games.id}>{this.props.games.deck}</h4>  }
                   <img className="game_image" src={this.props.games.image.medium_url !== null ? this.props.games.image.medium_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>
                  <form onSubmit={this.props.addgame} data-id={this.props.games.id}>
                    <button type="submit">
                      Save game
                    </button>
                  </form>
                </div>
        </div>
              )

      }

    }
  }






