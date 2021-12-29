import "./App.css";
import React, { Component } from "react";

import { CardList } from "./component/card-list/card-list.component";
// import reactDom from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search monsters"></input>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
