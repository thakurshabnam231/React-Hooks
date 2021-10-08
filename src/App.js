import React from 'react'
import DataFetchUseEffect from './Components/DataFetchUseEffect';
import UseEffect from './Components/UseEffect';
import UseEffectCleanUp from './Components/UseEffect';
import UseEffectCounter from './Components/UseEffectCounter';
import UseReducer from './Components/UseReducer';
import UseReducer3 from './Components/UseReducer';
import UseReducer2 from './Components/UseReducer2';
import UseStateArray from './Components/UseStateArray';
import UseStateCounter from './Components/UseStateCounter';
import UseStateObj from './Components/UseStateObj';

function App() {
  return (
    <div className="App">
    <UseReducer3/>
  {/*<UseReducer2/>*/}
   {/* <UseReducer/>*/}
    <DataFetchUseEffect/>
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
