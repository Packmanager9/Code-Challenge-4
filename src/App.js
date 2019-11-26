import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor(){

    super()

    this.updateArmy = this.updateArmy.bind(this);
    this.removeRobot = this.removeRobot.bind(this);
    this.state = {
      robots: [],
      myArmy: [],

    }


  }

  componentWillMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      this.setState({robots: data})

    console.log(this.state)
    })
    .catch(err => {
      // Do something for an error here
    })


  }



  updateArmy(robot){

    let holder = [...this.state.myArmy]

    let holds = false

    for(let g = 0; g < holder.length; g++){
      if (holder[g] === robot){
        holds = true
      }
    }
    if(holds === false){
      holder.push(robot)
    }


    this.setState({myArmy: holder})

    console.log(this.state)

  }

  
  removeRobot(robot){

    let holder = [...this.state.myArmy]

    let index = holder.indexOf(robot)

    holder.splice(index, 1)

    this.setState({myArmy: holder})

    console.log(this.state)

  }






  render() {
    return (
      <div className="App">
        <BotsPage updateArmy={this.updateArmy} removeRobot={this.removeRobot} bots={this.state.robots} armybots={this.state.myArmy}/>
      </div>
    );
  }
}

export default App;
