import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  render(props) {
    return (
      <div>

			<YourBotArmy updateArmy={this.props.removeRobot} bots={this.props.armybots}/>
        <BotCollection  updateArmy={this.props.updateArmy} bots={this.props.bots}/>


        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
