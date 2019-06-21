import React,{Component} from 'react'
import './app.css'
export default class App extends Component {
  render () {
    return(
     <ul>
      <li className="active">{false?111:'000'}</li>
      <li>222</li>
      <li>333</li>
     </ul>
    )
  }
}