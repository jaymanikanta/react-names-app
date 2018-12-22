import React, { Component } from "react";
import NamesList from "./components/NamesList";
import Credit from "./components/Credit";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <NamesList data={this.props.data} />
        <Credit />
      </div>
    );
  }
}

export default App;
