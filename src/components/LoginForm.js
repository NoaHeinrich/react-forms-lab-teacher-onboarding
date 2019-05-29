import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onSubmit: props.handleLogin,
      username: "",
      password: ""
    };
  }

  handleSubmit(event){
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if(username && password) {
      this.state.onSubmit({password,username})
    }

  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label >
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsernameChange.bind(this)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
