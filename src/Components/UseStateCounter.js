import React,{useState} from 'react'

const UseStateCounter = () => {
    const[counter,setCounter]=useState(0);
 const onClickHandler=()=>{
     setCounter(counter+5)
 }
    return (
        <div>
        <h1>{counter}</h1>
            <button onClick={()=>{setCounter(0)}}>reset</button>
            <button onClick={()=>{setCounter(counter-1)}}>decrement</button>
            <button onClick={onClickHandler}>increment by 5</button>
            <button onClick={()=>{setCounter(counter-10)}}>decrement by 10</button>
        </div>
    )
}

export default UseStateCounter
