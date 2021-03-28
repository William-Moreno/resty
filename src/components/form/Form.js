import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
      body: {},
      error: {},
      textEntry: '',
    }
  }

  handleChange = (e) => {

    this.setState({ url: e.target.value });
  }

  handleMethodChange = (e) => {

    this.setState({ method: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.toggle();

    let request;
    
    if(this.state.method === 'GET') {
      request = await fetch(this.state.url, { method: this.state.method });
    } else {
      request = await fetch(this.state.url, {
        method: this.state.method,
        body: this.state.textEntry ? JSON.stringify(this.state.textEntry) : '',
      });
    }
    
    let data = await request.json();
    
    this.props.updateResults({
      url: this.state.url,
      method: this.state.method,
      body: data,
      error: false,
    });
    this.props.toggle();

  }

  render() {
    return (
      <div className="App-form">
        <form onSubmit={this.handleSubmit}>
          <fieldset className="app-url">
          <label>Enter URL</label>
          <input className="url-input" onChange={this.handleChange} type="text" name="url" value={this.state.url} />
          <button type="submit">Go!</button>
          </fieldset>
          <fieldset className="rest-select">
          <button onClick={this.handleMethodChange} value="GET" name="method">GET</button>
          <button onClick={this.handleMethodChange} value="POST" name="method">POST</button>
          <button onClick={this.handleMethodChange} value="PUT" name="method">PUT</button>
          <button onClick={this.handleMethodChange} value="DELETE" name="method">DELETE</button>
          <textarea onChange={this.handleChange} name="textEntry" value={this.state.textEntry}></textarea>
          </fieldset>
        </form>
      </div>
    )
  }
};

export default Form;