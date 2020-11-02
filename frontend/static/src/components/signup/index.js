import React, {Component} from 'react';
import Cookies from 'js-cookie';

class Signup extends Component {

  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const csrftoken = Cookies.get('csrftoken');

      fetch('/rest-auth/registration/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        }, body: JSON.stringify(this.state)})
          .then(response => response.json())
          .then(data => {
            Cookies.set('Authorization', `Token ${data.key}`);
          });
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input name="username" value={this.state.username} onChange={this.handleChange} placeholder='Enter username' required ></input>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Enter email' required></input>
        <input type="password" name="password1" value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required ></input>
        <input type="password" name="password2" value={this.state.password} onChange={this.handleChange} placeholder='Enter password' required ></input>
        <button type="submit">Submit</button>
      </form>
    )}
  }

export default Signup;
