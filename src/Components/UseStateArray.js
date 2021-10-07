import React,{useState} from 'react'

const UseStateArray = () => {
    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);
    const inputEventHandler=(e)=>{
        setInputList(e.target.value)
    }
     const onSubmit=()=>{
         setItems([...items,inputList])}
         
         
     
    return (
        <div>
        <ul>
      {  items.map(item => (<li>{items}</li>))}
                </ul>
        <input type="text" value={inputList} onClick={inputEventHandler} />
        <button onClick={onSubmit}>add items</button>
          
        </div>
    )
}

export default UseStateArray
