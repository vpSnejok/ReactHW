import { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    const { text, classes, action } = this.props;
    return (
      <button className={classes} type="button" onClick={action}>
        {text}
      </button>
    );
  }
}

export default Button;
