import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import HookCall from './components/HookComp';
import Fetching from './components/Fetching';

function App() {
  return (
    <div className="App">
      {/* <HookCall/> */}
      <Fetching/>
    </div>
  );
}

export default App;
