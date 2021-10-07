import React ,{useReducer}from 'react'
const initialState={
    firstCounter:0
};


 const reducer =(state,action)=>{
switch(action.type){
   case 'increment':
    return { firstCounter:state.firstCounter+1}
    case 'decrement':
    return { firstCounter:state.firstCounter+1}
    case 'reset':
    return initialState
    default:
    return state
}
 }

const UseReducer = () => {
     const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
        <h1>count:{count.firstCounter}</h1>
            <button onClick={()=>dispatch({ type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({ type:'decrement'})}>decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
          
        </div>
    )
}

export default UseReducer
