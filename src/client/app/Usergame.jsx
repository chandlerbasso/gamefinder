import React from 'react'

export default class UserGame extends React.Component {
  render(){
    if( this.props.infosearch === false){
    return(
      <div className='container col-centered text-center'>
       <a href='/'><p>Home</p></a>
        <h2>Your Games</h2>

            {this.props.usergame.map((item,i)=>{
              return (
              <div className="col-md-6 col-centered text-center" >
                <h3 className={item.main_id}>{item.game_name}</h3>
                <h5>{item.game_desc}</h5>
                <img src={item.game_image}/>
                  <button type='submit' onClick={this.props.getinfo} data-id={item.game_id}>
                    Show More Info
                  </button>
                  <button type='submit' onClick={this.props.deletegame} data-id={item.game_name}>
                  Delete
                  </button>

              </div>
                )
            }
          )}
        </div>
    )

  } else if(this.props.infosearch === true && this.props.picstat === false){
            return(
                <div className="container col-centered text-center" >
           <a href='/'><p>Home</p></a>
        <div key={i} className="col-md-6 col-centered text-center">
                  <h3>{this.props.info.name}</h3>
                  <h4 alt={this.props.info.id}>{this.props.info.deck}</h4>
                  <img className="game_image" src={this.props.info.image !== null ? this.props.info.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>
                  <a href={this.props.info.reviews[0].site_detail_url}>Click here for reviews</a>
                <button type="submit" onClick={this.props.picinfo}>
                  More pictures
                </button>
                <button type="submit" onClick={this.props.devinfo}>
                  Developers
                </button>
                <button type="submit" onClick={this.props.characterinfo}>
                  Characters
                </button>
                </div>
          </div>
              )

        } else if(this.props.picstat === true && this.props.infosearch === true){
          return(
            this.props.info.images.map((image,i) =>{
              <img className="game_image" src={this.props.info.image !== null ? this.props.info.image.small_url : "https://az853139.vo.msecnd.net/static/images/not-found.png" }/>

            })
            )
        }



      }

  }

