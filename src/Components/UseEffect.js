import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("submitted")
        if(count>=1){
        document.title=`react-app(${count})`}
        else {document.title=`react-app`}},
        [count] );
     const onClickHandler=()=>{
        setCount(count+1)
     }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClickHandler}>click </button>
        </div>
    )
}

export default UseEffect
