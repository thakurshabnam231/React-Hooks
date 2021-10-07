import React from 'react'
import ComponentC from './Hooks/ComponentC'
 export const UserContext = React.createContext()
 export const ChannelContext= React.createContext()
const ContextApi = () => {
    
    return (
        <div>
        <UserContext.Provider value={'shabnam'} >
        <ChannelContext.Provider value={'rani'} >
            <ComponentC/>
            </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ContextApi
