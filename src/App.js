import React, {Component} from "react";
import Funds from './components/Funds'
import "./App.css";
import picture from "./images/logo.png"
class App extends Component {
  constructor(){
    super()
    this.state={
    }
  }



  render(){
    return (
      <div>
        <div className="navBar">
          <img className='picture' src={picture}/>
        </div>
        <Funds/>
      </div>
    )
  }
}

export default App;
