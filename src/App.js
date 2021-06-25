import React, {Component} from "react";
import Funds from './components/Funds'
import "./App.css";
class App extends Component {
  constructor(){
    super()
    this.state={
    }
  }



  render(){
    return (
      <div className='masterContainer'>
        <Funds/>
      </div>
    )
  }
}

export default App;
