import React from "react";
import "./styles.css";

class CustomButton extends React.Component {
  render() {
    return (
      <button
        style={this.props.buttonStyle}
        className={"button"}
        onClick={this.props.onClickButton}
      >
        <h1>{this.props.buttonText}</h1>
      </button>
    );
  }
}

export default CustomButton;
