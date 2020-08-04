import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//import { render } from '@testing-library/react';

class App extends Component {

state = {
  username: "sean"
};

usernameChangedHandler = (event) => {
  this.setState({username: event.target.value})
}

render() {
  // in-line style: styling in js without css


  return (
    <div className="App">
      <h1>assignment 1</h1>
      <UserInput 
      name={this.state.username} 
      change={this.usernameChangedHandler}>
      </UserInput>
      
      <UserOutput username={this.state.username}></UserOutput>
      <UserOutput></UserOutput>
    </div>
  );
  // this is what happens in the background jsx(html in js) code above
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'this is a react app'));
}

}
export default App;
