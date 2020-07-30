import React, {Component, createContext} from "react";

export const MyContext = createContext();

export default class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "No Name...",
      age: 20,
    };
  }

  changeName = (arg) => {
    this.setState({name: arg});
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeName: (arg) => {
            return this.changeName(arg);
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
