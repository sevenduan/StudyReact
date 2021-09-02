import Input from "../components/Input";
import React, { Component } from "react";
// import { createForm } from "rc-form";
import { createForm } from "../components/my-rc-form";
const nameRules = { required: true, message: "please input the name" };
const passwordRules = { required: true, message: "please input the password" };

@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  // nameChange = (e) => {
  //   this.setState({ username: e.target.value });
  // };

  // passwordChange = (e) => {
  //   this.setState({ password: e.target.value });
  // };

  componentDidMount() {
    const { setFieldsValue } = this.props.form;
    setFieldsValue({ username: "default" });
  }

  submit = () => {
    // const { username, password } = this.state;
    const { getFieldValue, getFieldsValue, validateFields } = this.props.form;
    console.log(
      "sy:",
      getFieldsValue(),
      getFieldValue("username"),
      getFieldValue("password")
    );
    validateFields((err, vals) => {
      if (err) {
        console.log("failed:", err); //sy-log
      } else {
        console.log("success:", vals); //sy-log
      }
    });
  };
  render() {
    // const { username, password } = this.state;
    // console.log("props:", this.props); //sy-log

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator("username", { rules: [passwordRules] })(
          <Input placeholder="Username"></Input>
        )}
        {getFieldDecorator("password", { rules: [nameRules] })(
          <Input placeholder="Password"></Input>
        )}

        {/* <Input
          placeholder="Password"
          value={password}
          onChange={this.passwordChange}
        ></Input> */}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default MyRCForm;
