import React,{useState,useMemo} from 'react'

function Mode() {
    const[isLightMode, setisLightMode] = useState(true)


    const theme = useMemo(()=>{
        return{
            bgcolor : isLightMode ? "white" : 'black',
            color : isLightMode ? 'black' : 'white' 
        }
    },[isLightMode])

  return (
    <div style={{backgroundColor : theme.bgcolor,color : theme.color,height : '100vh'}}>
        <button onClick={()=>setisLightMode(!isLightMode)}>Click to {isLightMode ? 'Dark' : 'light'} Mode</button>
        <h1>Hello World</h1>
    </div>
  )
}

export default Mode
