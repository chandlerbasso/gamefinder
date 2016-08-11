import React   from 'react'
import Search  from './Search.jsx'
import Results from './Results.jsx'
import ajax    from '../helpers/ajax.js'
import Usergame from './Usergame.jsx'
export default class Searchcontainer extends React.Component {
  constructor(){
    super()
    this.state = {
      dropdown:"aliases",
      query:"",
      usergame:false,
      searched:false,
      luckresults:[],
      results:[],
      companyid:'',
      companysearch:false,
      companyresults:[],
      feelinglucky:false,
      getinfo:false,
      info:[],
      gamedesc:'',
      pictureinfo:false,
      devinfo:false,
      characterinfo:false
    }
  }
  pictureInfo(event){
    this.setState({
      pictureinfo:true
    })
  }
   devInfo(event){
    this.setState({
      devinfo:true
    })
  }
   characterInfo(event){
    this.setState({
      characterinfo:true
    })
  }
  searchHomeButton(event){

    // if(this.state.usergame === true || this.state.searched === true || this.state.companysearch === true ||this.state.feelinglucky === true ||this.state.getinfo === true ||){
      this.setState({
        searched:false,
        results:[]
      })

  }
  feelingLucky(event){
    event.preventDefault();
    ajax.feelingLucky().then(game =>{
      this.setState({
        results:game.results,
        feelinglucky:true,
        searched:true
      })
    })

  }
  getuserGame(event){
    ajax.getGame().then(game =>{
      this.setState({
      usergame: true ,
      results: game
      })
    })
  }
  deleteuserGame(event){
    event.preventDefault()
    let item = {item: event.target.dataset.id}
    ajax.deleteGame(item).then(idk=>{
      ajax.getGame().then(game =>{
        this.setState({
          usergame:true,
          results:game

        })

      })
    })
  }

  handleUpdateDrop(event){
    this.setState({
      dropdown:event.target.value,
    })
  }
  handleUpdateSearch(event){
    this.setState({
      query: event.target.value
    })
  }
  handleSubmitSearch(event){
    event.preventDefault();
    if(this.state.dropdown==="aliases"){
      ajax.gameCall(this.state.query).then(game =>{
        console.log(game)
        this.setState({
          query:"",
          dropdown:this.state.dropdown,
          searched:true,
          results: game.results

        })
      })
    }
      else if(this.state.dropdown==='company'){
        ajax.companyCall(this.state.query).then(game=>{
          console.log(game)
          this.setState({
            dropdown:this.state.dropdown,
            searched:true,
            results: game.results,
            companyid: ''
          })
      })
      }
    }
    getInfo(event){
      event.preventDefault()
      console.log(event.target.dataset.id)
      ajax.gameInfo(event.target.dataset.id).then(game =>{
        console.log(game)
        this.setState({
          info:game.results,
          getinfo:true,
          // gamedesc:game.results.description
        })
        // console.log(this.state.info.reviews.site_detail_url)
      })
    }
    addGame(event){
      event.preventDefault();
      // console.log(event.target.dataset.id,event.target.dataset.name, event.target.dataset.desc)
      // this.setState = {item:event.target.dataset.id}
      ajax.addGame(event.target.dataset.id,event.target.dataset.name, event.target.dataset.desc, event.target.dataset.image  )
      }
      setdatastate(event){
        event.preventDefault()
        console.log(event.target.dataset.id)

          this.setState({
            dropdown:'company',
            searched:true,
            companyid: '',
            companysearch:true
          })

        ajax.companygameCall(event.target.dataset.id).then(game=>{
          this.setState({
            companyresults: game.results
          })
          // .then(
          // console.log("company results", this.state.companyresults)
          // this.state.companyresults.map((games, i)=>{
          //   console.log(i)
        // )
          // })
      })


    }
      findcompanyGame(event){
        event.preventDefault();
        // this.setState({searched:false})
          this.setState({
            searchede:true,
            results:game.results
          })
      }
  render(){

    if(this.state.searched){
      return(
          <div>
            <Results
            desc={this.props.gamedesc}
            getinfo={this.getInfo.bind(this)}
            usergame={this.state.usergame}
            infosearch={this.state.getinfo}
            info={this.state.info}
            homebutton={this.homeButton}
            lucky={this.state.feelinglucky}
            companysearch={this.state.companysearch}
            setdatastate={this.setdatastate.bind(this)}
            addgame={this.addGame.bind(this)}
            games={this.state.results}
            companygames={this.state.companyresults}
            dropdown={this.state.dropdown}

            />
          </div>
        )
   } else if(this.state.usergame === true){
    return(
      <div>
        <Usergame
          picstat={this.state.pictureinfo}
          devstat={this.state.devinfo}
          charstat={this.state.characterinfo}
          picinfo={this.pictureInfo.bind(this)}
          devinfo={this.devInfo.bind(this)}
          characterinfo={this.characterInfo.bind(this)}
          deletegame={this.deleteuserGame.bind(this)}
          info={this.state.info}
          usergame={this.state.results}
          getinfo={this.getInfo.bind(this)}
          infosearch={this.state.getinfo}
          />
      </div>
      )
   }
// else if(this.state.feelinglucky === true){
    //   return(
    //   <div>
    //     <LuckResults
    //       lucky={this.state.feelinglucky}
    //       games
    //       />
    //   </div>
    //   )
    // }
      else {
      return (
    <div>
      <Search
      getgame={this.getuserGame.bind(this)}
      feelinglucky={this.feelingLucky.bind(this)}
      onUpdateSearch={this.handleUpdateSearch.bind(this)}
      onUpdateDrop={this.handleUpdateDrop.bind(this)}
      onSubmitSearch={this.handleSubmitSearch.bind(this)}
      query={this.state.query}
      />
    </div>
    )
    }
  }
}
