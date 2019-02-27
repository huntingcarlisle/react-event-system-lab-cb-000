// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  focused = () => {
    console.log("Good!");
  }
  
  render() {
    return (
      <button onFocus={} onBlur={}></button>
      )
  }
}