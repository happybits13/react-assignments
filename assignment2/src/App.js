import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// Self initiated
import Counter from './Counter/Counter';


class App extends Component {

state = {
  userInput: '',
};


inputChangedHandler = (event) => {
  this.setState({userInput: event.target.value})
}

deleteChangedHandler = (index) => {
  // split: Strings are not js arrays. Need to use split to make them js array
  const text = this.state.userInput.split('');

  text.splice(index, 1);
  // join: js array are not string. Need to use join to make them back to string
  const updatedText = text.join('');

  this.setState({userInput: updatedText});
}


render() {
  
  // split: Strings are not js arrays. Need to use split to make them js array
  // map:"convert each character in string to a <Char> component per element
  const charList = this.state.userInput.split('').map( (ch, index) => {
    return <Char 
      character={ch} 
      key={index} 
      clicked={this.deleteChangedHandler.bind(this, index)}>
    </Char>;
  });


  return (
    <div className="App">
      <h1>Assignment 2</h1>
      <input 
        type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}/>

      <p>inputLength: {this.state.userInput.length}</p>

      <Validation inputLength={this.state.userInput.length}></Validation>
      {charList}

      <Counter></Counter>
      
      

    </div>
  );
  // this is what happens in the background jsx(html in js) code above
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'this is a react app'));
}

}
export default App;
