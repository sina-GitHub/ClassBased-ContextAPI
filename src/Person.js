import React from "react";

import {MyContext} from "./DataProvider";

export default () => {
  return (
    <h1>
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <button onClick={() => context.changeName("New Name is: Sina")}>
              click 2 show name
            </button>
            <p>{context.state.name}</p>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </h1>
  );
};

/*


import React, {Component} from "react";

import {MyContext} from "./DataProvider";

export default class Person extends Component {
  render() {
    return (
      <h1>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <button onClick={() => context.changeName("New Name is: Sina")}>
                click 2 show name
              </button>
              <p>{context.state.name}</p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </h1>
    );
  }
}



*/
