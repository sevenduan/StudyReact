import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "omy",
  };
  static propTypes = {
    msg: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor"); //sy-log
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("componentWillMount"); //sy-log
  //   }
  componentDidMount() {
    console.log("componentDidMount"); //sy-log
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps,", props, state); //sy-log
    const { count } = state;

    return count > 5 ? { count: 0 } : null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate,", prevProps, prevState); //sy-log
    return {
      msg: "getSnapshotBeforeUpdate",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate:", nextState, this.state); //sy-log

    return count !== 3; //true
  }
  //   UNSAFE_componentWillUpdate() {
  //     console.log("componentWillUpdate"); //sy-log
  //   }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate, ", prevProps, prevState, snapshot); //sy-log
  }

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("render:", this.props); //sy-log
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>update count</button>
        <Child count={count}></Child>
        {/* {count % 2 && <Child count={count}></Child>} */}
      </div>
    );
  }
}

class Child extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps,", nextProps); //sy-log
  }
  componentWillUnmount() {
    console.log("componentWillUnmount"); //sy-log
  }
  render() {
    console.log("Child render:", this.props); //sy-log
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
