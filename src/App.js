import React, { Component } from 'react';
import {CharComponent} from './CharComponent/CharComponent';
import {ValidationComponent} from './ValidationComponent/ValidationComponent';

import './App.css';

class App extends Component {
  
  state = {
    inputValue : "TEST INPUT",
    maxLength : 11
  }

  changeHandler = (event) => {
    const newValue = event.target.value;
    
    if(this.state.maxLength >= newValue.length) {
      this.setState({
        inputValue : newValue
      });
      
    }
    
  }

  deleteHandler = (event, index) => {
    const inputValue = this.state.inputValue.slice();
    let string1 = inputValue.substring(0, index);
    let string2 = inputValue.substring(index + 1, inputValue.length);
    let updatedValue= string1+string2;
    
    this.setState({
      inputValue : updatedValue
    });
  }

  
  render() {

    const inputArray = this.state.inputValue.slice().split('');
    const charComponent = (
      <div>
        {
          inputArray.map((value, index) =>{
            if(value.trim() !== ""){
              return <CharComponent value={value} click={(event)=>this.deleteHandler(event, index)} key={index} />
            }
          })
        }
      </div>
    );
    

    return (
      <div className="App">
      <h3>Problem Statements:</h3>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p><b>Hint: Keep in mind that JavaScript strings are basically arrays!</b></p>

        <h3>Solution :</h3>
        <input type="text" onChange={this.changeHandler} value={this.state.inputValue}/>
        <ValidationComponent maxLength={this.state.maxLength} inputValue={this.state.inputValue}/>
        {charComponent}
      </div>
    );
  }
}

export default App;
