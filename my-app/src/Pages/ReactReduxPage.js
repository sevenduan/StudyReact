import React, { Component } from "react";
import { connect } from "react-redux";
//imco

export default connect(
  //map state -> props
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
  //     const mapDispatchToProps = {
  //     export default connect(
  //         mapStateToProps, //状态映射 mapStateToProps
  // mapDispatchToProps, //派发事件映射
  // )(ReactReduxPage);
  class ReactReduxPage extends Component {
    render() {
      console.log("props:", this.props); //sy-log
      const { num, dispatch, add, minus } = this.props;

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
