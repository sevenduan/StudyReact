import React, { Component } from "react";

const foo = (Cmp) => (props) => {
  return (
    <div className="boarder">
      <Cmp {...props} omg="omg"></Cmp>
    </div>
  );
};

function Child(props) {
  return <div>Child</div>;
}
const Foo = foo(Child);

@foo
@foo
class ClassChild extends Component {
  render() {
    return <div>Class Child</div>;
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo></Foo>
        <ClassChild></ClassChild>
      </div>
    );
  }
}
