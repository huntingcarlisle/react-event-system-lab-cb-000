// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends React.Component {
  enterPassword = () => {
    console.log('Entering password...');
  }
  
  render() {
    return (
      <input onKeyUp={this.enterPassword} type='password' />
      )
  }
}