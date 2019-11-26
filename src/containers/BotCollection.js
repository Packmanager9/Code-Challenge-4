import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends React.Component {
  //your code here

  render(props){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			{this.props.bots.map(botx =>
          <BotCard updateArmy={this.props.updateArmy} key={Math.random()} bot={botx}/>
          )}

    		  {/*...and here..*/}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
