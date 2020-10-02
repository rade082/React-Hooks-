import React from 'react'
import { useState,useEffect } from 'react'

function HookCall() {
    const [count,setCounter] = useState(0)
    const [name , setName] = useState("")
    useEffect(()=>{
            console.log('changed ');
            document.title = `Click ${count}`;
        },[count])

    return(
     <div>
         <input type="text" value={name} onChange={e => setName(e.target.value)} /> 
         <button onClick={() => setCounter(count+1)}>Count {count}</button>
     </div>   
    )
}

export default HookCall;