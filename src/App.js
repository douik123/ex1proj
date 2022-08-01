import React ,{ Component } from 'react';
import './App.css';
import Profile from './Profile'

function App() {
  return (
    <div className="App">
     <Profile name="Ninja X" age= {25} profession="Artist"/>
    </div>
  );
}

export default App;
