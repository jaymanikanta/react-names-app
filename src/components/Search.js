import React, { Component } from "react";

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val);
  }

  render() {
    return (
      <div>
        <header>
          <form>
            <input
              ref={value => (this.myValue = value)}
              type="text"
              placeholder="Enter a name..."
              onChange={this.filterUpdate.bind(this)}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Search;
