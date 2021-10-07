import axios from 'axios'
import React ,{useState,useEffect}from 'react'

const DataFetchUseEffect = () => {
    const[post,setPost]=useState({})
    const[id,setId]=useState();
    const[idButtonClick,setIdButtonClick]=useState();
    const onHandler=()=>{
        setIdButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts /${id}`)
        .then(res=>{
            console.log("res")
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idButtonClick])
    return (
        <div>
        <div>{post.title}</div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={onHandler}>fetch post</button>
            {// post.map(item=>(<li >{item.title}</li>))
            }
        </div>
    )
}

export default DataFetchUseEffect
