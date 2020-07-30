import React, {Component} from "react";

import DataProvider from "./DataProvider";
import Family from "./Family";

export default class App extends Component {
  render() {
    return (
      <DataProvider>
        <Family></Family>
      </DataProvider>
    );
  }
}
