import axios from 'axios'
import React ,{useState}from 'react'

const DataFetchUseEffect = () => {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log("res")
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return (
        <div>
            {posts.map(map=>(<li >{posts.title}</li>))}
        </div>
    )
}

export default DataFetchUseEffect
