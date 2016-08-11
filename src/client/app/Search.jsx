import React from 'react'

export default class Search extends React.Component {
  render(){
    return (
    <div className='container'>
      <div id='search' className="jumbotron col-sm-6 col-sm-offset-3 col-centered text-center">

        <button className='savedgame' type='submit' onClick={this.props.getgame}>
          Show Saved Games
        </button>

          <div className="input-group text-center ">
          <form onSubmit={this.props.onSubmitSearch}>
            <select className="input-group" onChange={this.props.onUpdateDrop.bind(this)}>
              <option value="aliases">Name of the game</option>
              <option value="company">Name of company or franchise</option>
            </select>
            <input
            onChange={this.props.onUpdateSearch}
            type='text' />
          <div className="form-group col-sm-4 col-sm-offset-4">
           </div>
            <button
            type='submit'
            className="btn btn-block btn-primary">
            Search
            </button>
          </form>
           </div>
          <button type='submit'
          onClick={this.props.feelinglucky}
          className="btn btn-block btn-link">
          Feeling Lucky?
          </button>
          <footer>
          <p>If nothing loads please install <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">this plug in</a> </p>
          </footer>
        </div>


    </div>
    )
  }

}
