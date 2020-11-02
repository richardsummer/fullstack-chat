import React, {Component} from 'react';
import Cookies from 'js-cookie';

class ChatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('admin/chats/')
    .then(response => response.json())
    .then(data => this.setState({chats: data}));
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('/admin/chats/', {
      method:'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(response => response.json().then(data => console.log(data)))
  }

  render(){
    return(
      <React.Fragment>
        <div className="form mt-5" onSubmit={this.handleSubmit}>
          <form className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input type='text' className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
            </div>
              <button className="btn btn-primary">Post Message</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default ChatForm;
