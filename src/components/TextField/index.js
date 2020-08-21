import React from "react";

class TextField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.placeholder}>
          {this.props.text}
        </input>
      </div>
    );
  }
}

export default TextField;
