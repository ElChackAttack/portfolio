import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ricardo from './Ricardo.js';

function App() {
  return (
    <div className="App">
      <div className="ImgContainer"> 
        <img src={require('./PP.jpg')}/>
      </div>
      <Ricardo/>
    </div>
  );
}

export default App;
