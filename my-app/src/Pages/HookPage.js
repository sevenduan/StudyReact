import React, { useEffect, useState } from "react";

export default function HookPage(props) {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("effect"); //sy-log //did mount did update

    //count change:
    document.title = `click ${count} times`;
  }, [count]);

  useEffect(() => {
    //did Mount
    const timer = setInterval(() => setDate(new Date()), 1000);
    //will unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>time: {date.toLocaleTimeString()}</p>
    </div>
  );
}
