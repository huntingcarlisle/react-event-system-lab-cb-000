// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends React.Component {
  render() {
    return (
      <input onKeyUp={console.log('Entering password...')} type='password' />
      )
  }
}