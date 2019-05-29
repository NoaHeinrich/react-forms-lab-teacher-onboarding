import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      charsLeft: props.maxChars,
      value: ""
    };
  }

  handleChange = event => {
    const currentChars = event.target.value.length
    const maxChars = this.state.maxChars
    const value = event.target.value

    this.setState({
      charsLeft: maxChars - currentChars,
      value: value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        name="message"
        id="message"
        onChange={this.handleChange}
        value={this.state.value}/>
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
