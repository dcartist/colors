import React, { Component } from "react";
import "./styles.css";
import Color from "./Colors.js";
import ColorsInfo from "./colors.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ColorsInfo,
      textResults: ""
    };
  }

  Search = e => {
    e.preventDefault();
    this.setState({ textResults: e.target.value });
    console.log(this.state.textResults);
  };

  render() {
    let result = ColorsInfo.filter(word => word.color.length > 5);
    console.log(result);

    return (
      <div>
        <form>
          <input type="text" onChange={this.Search} />
        </form>
        <Color {...result} />
        {result.map((item, index) => (
          <div key={index}>
            <Color {...item} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
