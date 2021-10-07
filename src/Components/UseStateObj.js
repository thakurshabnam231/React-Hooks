import React,{useState} from 'react'

const UseStateObj = () => {
    const[name,setName]=useState({firstName:'', lastName:'' })
    const fnameHandler=(event)=>{
setName({ ...name,firstName:event.target.value})
    }
    const lnameHandler=(event)=>{
        setName({ ...name,lastName:event.target.value})
            }
         
    return (
        <div>
        <h1>{name.firstName}</h1>
        <h1>{name.lastName}</h1>
            <input type="text"  value={name.firstName} onChange={fnameHandler}/>
            <input type="text"  value={name.lastName} onChange={lnameHandler}/>
        </div>
    )
}

export default UseStateObj
