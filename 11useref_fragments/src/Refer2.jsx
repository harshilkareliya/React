import React, {Fragment, useState, useEffect, useRef, createElement} from 'react'

function Refer2() {
    const [text, settext] = useState('')
    const count = useRef(0)

    useEffect(() => {
        document.createElement("p").innerHTML = count
      count.current = count.current + 1
    }, [text])
    
  return (
    <Fragment>

        <input type="text" placeholder='Enter Text here....' value={text} onChange={(e)=>settext(e.target.value)}/>

        <h3>Changes :- {count.current}</h3>
    </Fragment>
  )
}

export default Refer2
