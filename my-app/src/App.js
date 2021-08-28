import React from "react";
import ClassComponent from "./Pages/ClassComponent";
import FunctionComponent from "./Pages/FunctionComponent";
import SetStatePage from "./Pages/SetStatePage";

function App(){
    return <div className="App">
        <ClassComponent></ClassComponent>
        <FunctionComponent></FunctionComponent>
        <SetStatePage></SetStatePage>
    </div>
}    


export default App;