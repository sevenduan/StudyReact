import React, { Component } from "react";

export function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = [];
    }

    getFieldsValue = () => {
      console.log(this.state);
      return { ...this.state };
    };
    getFieldValue = (name) => {
      return this.state[name];
    };
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    getFieldDecorator = (fieldName, option) => (InputCmp) => {
      this.options[fieldName] = option;
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName] || "",
        onChange: this.handleChange,
      });
    };
    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };
    validateFields = (callback) => {
      let err = [];
      for (let fieldName in this.options) {
        if (this.state[fieldName] === undefined) {
          err.push({ [fieldName]: "err" });
        }
      }

      if (err.length === 0) {
        callback(null, { ...this.state });
      } else {
        callback(err, { ...this.state });
      }
    };
    getForm = () => {
      return {
        getFieldDecorator: this.getFieldDecorator,
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        setFieldsValue: this.setFieldsValue,
        validateFields: this.validateFields,
      };
    };
    render() {
      const form = this.getForm();
      return <Cmp {...this.props} form={form} />;
    }
  };
}
