import React from "react";
import BotCard from "../components/BotCard";
let tmpItem
class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">


          {this.props.bots.map(botx =>
          <BotCard updateArmy={this.props.updateArmy} key={Math.random()} bot={botx}/>
          )}
            {/*...and here...*/}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
