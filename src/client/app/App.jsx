import React     from 'react'
import ReactDom from'react-dom'


export default class App extends React.Component{
  render(){
    return(
      <container>
        <div>
          <h1>Hello World</h1>
        </div>
      </container>
      )
  }
}

ReactDom.render(<App />, document.querySelector('#container'))
