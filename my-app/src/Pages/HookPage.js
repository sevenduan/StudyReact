import React, { useEffect, useState } from "react";

export default function HookPage(props) {
  const [count, setCount] = useState(0);

  // cannot do
  //   if (count) {
  //     const [num, setNum] = useState(0);
  //   }
  useEffect(() => {
    console.log("effect"); //sy-log //did mount did update

    //count change:
    document.title = `click ${count} times`;
  }, [count]);

  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>time: {useClock().toLocaleTimeString()}</p>
    </div>
  );
}
// cannot do
// function getNum() {
//   const [num, setNum] = useState(0);
// }

//Custom Hook starts with use
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    //did Mount
    const timer = setInterval(() => setDate(new Date()), 1000);
    //will unmount
    return () => clearInterval(timer);
  }, []);
  return date;
}
