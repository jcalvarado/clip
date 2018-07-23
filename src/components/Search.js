import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("AppStore")
@observer
class Search extends Component {
  handleChange = event => {
    this.props.AppStore.setSearch(event.target.value);
  };

  render() {
    const { AppStore } = this.props;
    return (
      <input
        className={this.props.className}
        type="text"
        value={AppStore.search}
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
