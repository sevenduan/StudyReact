import React, { Component } from "react";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "layout" } = this.props;
    document.title = title;
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    console.log("children:", children); //sy-log
    console.log("showTopBar:", showTopBar); //sy-log
    console.log("showBottomBar:", showBottomBar); //sy-log
    return (
      <div className="layout">
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>button</button>
        {showBottomBar && <BottomBar></BottomBar>}
      </div>
    );
  }
}
