import React     from 'react'
import ReactDom from'react-dom'
import Searchcontainer from './Searchcontainer.jsx'

export default class App extends React.Component{
  render(){
    return(
      <container>
        <div>
          <h4 className='text-center'>GameFinder</h4>
          <Searchcontainer/>
        </div>
      </container>
      )
  }
}

ReactDom.render(<App />, document.querySelector('#container'))
