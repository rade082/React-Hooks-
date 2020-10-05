import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import HookCall from './components/HookComp';
import Fetching from './components/Fetching';
import ComponentC from './components/ComponentC';
import Reducer from './components/Reducer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      {/* <HookCall/> */}
      {/* <Fetching/> */}
      <Reducer/>
      {/* <UserContext.Provider value={'rahul'}>
        <ChannelContext.provider value={'dutt'}>
              <ComponentC/>
        </ChannelContext.provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
