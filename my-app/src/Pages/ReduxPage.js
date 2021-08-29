import React, { Component } from "react";
import store from "../store";

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("steate changed"); //sy-log

      //   this.forceUpdate();
    });
  }
  render() {
    console.log("store: ", store); //sy-log
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: "ADD" })}>add</button>
        <button onClick={() => store.dispatch({ type: "MINUS" })}>MINUS</button>
      </div>
    );
  }
}
