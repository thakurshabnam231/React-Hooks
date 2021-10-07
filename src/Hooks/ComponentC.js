import React,{useContext} from 'react'
import{UserContext,ChannelContext} from '../ContextApi';
const ComponentC = () => {
     const user = useContext(UserContext)
  const value =  useContext(ChannelContext)
    return (
        <div>
            <h1>user context value is:{user}{value}</h1>
     </div>
    )
}

export default ComponentC
