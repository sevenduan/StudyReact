import React, { Component } from "react";
import { connect } from "react-redux";
//imco

export default connect(
  //mapDispatchToProps
  (state) => ({
    num: state,
  }),
  //map dispath - >props
  {
    add: () => {
      return { type: "ADD" };
    },
    minus: () => {
      return { type: "MINUS" };
    },
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props:", this.props); //sy-log
      const { num, add, minus } = this.props;

      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          {/* <button onClick={() => dispatch({ type: "ADD" })}>add</button>
          <button onClick={() => dispatch({ type: "MINUS" })}>minus</button> */}
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  }
);
