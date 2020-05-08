import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fruits: ['apple', 'orange', 'banana'],
      value: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onSubmit(event){
      event.preventDefault();
      this.setState({
        fruits: [...this.state.fruits, this.state.value]
      })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text" 
          onChange={this.handleChange}
        />
        <button> Click me</button> 
      </form>
        <ul> 
          {this.state.fruits.map((fruit) => (
            <li key={fruit}> {fruit} </li> 
          ))}
        </ul> 
      </div> 
  );
  }
}

export default App;
