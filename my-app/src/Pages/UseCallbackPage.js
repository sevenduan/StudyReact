import React, { PureComponent, useCallback, useState } from "react";

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const addClick = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <Child addClick={addClick}></Child>
    </div>
  );
}

class Child extends PureComponent {
  render() {
    const { addClick } = this.props;
    console.log("child render"); //sy-log
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}
