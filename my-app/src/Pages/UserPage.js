import React, { Component } from "react";
import Layout from "./Layout";

export default class UserPage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={true} showBottomBar={true} title="User Info">
          <div>
            <h3>User Page</h3>
          </div>
        </Layout>
      </div>
    );
  }
}
