// data -> vdom
import React from "react";
// vdom -> dom
import ReactDOM from "react-dom";
// import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import logo from "./logo.svg";
import styles from './index.module.css';

const name = "React";
const obj = {
  firstName: "Jasper",
  lastName: "Duan",
};
const greet = <div>good</div>;
const show = false;
function formatName(name) {
  return name.firstName + " " + name.lastName;
}
const a = [0, 1, 2];
const jsx = (
  <div className={styles.app}>
    <div>hello {name}</div>
    <div>{formatName(obj)}</div>
    {greet}
    {show ? greet : "login"}
    {show && greet}
    <ul>
      {a.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <img src={logo} alt = "" className={styles.logo} style={{ width: '50px', heith: '50px' }}></img>
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
