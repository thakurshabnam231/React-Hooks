import React from 'react'
import UseEffect from './Components/UseEffect';
import UseEffectCleanUp from './Components/UseEffect';
import UseEffectCounter from './Components/UseEffectCounter';
import UseStateArray from './Components/UseStateArray';
import UseStateCounter from './Components/UseStateCounter';
import UseStateObj from './Components/UseStateObj';

function App() {
  return (
    <div className="App">
    <UseEffectCounter/>
    <UseStateArray/>
    <UseStateObj/>
    <UseStateCounter/>
     <UseEffect/>
     <UseEffectCleanUp/>
    </div>
  );
}

export default App;
