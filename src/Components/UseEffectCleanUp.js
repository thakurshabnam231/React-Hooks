import React,{useState,useEffect} from 'react'

const CleanUp = () => {
    const [width,setWidth]=useState(window.screen.width);

    const actualWidth=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => {
            window.addEventListener("resize",actualWidth);
          return ()=>{
            
              window.removeEventListener("resize",actualWidth)
          }
    })
  

    return (
        <div>
            <p>the actual size of the window is:</p>
<h1>{width}</h1>
        </div>
    )
}

export default CleanUp

