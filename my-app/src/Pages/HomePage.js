import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout showTopBar={false} showBottomBar={true} title="HomePage">
          {/* <div>
                    <h3>HomePage</h3>
                </div> */}
          {{
            content: (
              <div>
                <h3>HomePage</h3>
              </div>
            ),
            txt: "this is a text",
            btnClick: () => {
              console.log("btn click"); //sy-log
            },
          }}
        </Layout>
      </div>
    );
  }
}
