import React, { Component } from "react";
import { Provider } from "mobx-react";
import { AppStore } from "./AppStore";
import Search from "./components/Search";
import Transactions from "./components/Transactions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider AppStore={new AppStore()}>
          <div>
            <Search className="Table" />
            <Transactions className="Table" />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
