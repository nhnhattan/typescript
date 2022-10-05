import React, { useEffect, useRef, useState } from 'react'

const MultableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) window.clearInterval(interValRef.current)
    }
    useEffect(()=> {
        interValRef.current = window.setInterval(()=>{
            setTimer((timer) => timer + 1)
        },1000)
        return ()=> {
            stopTimer()
        }
    },[])
  return (
    <div>
        <h4>Time: {timer}</h4>
        <button onClick={() => stopTimer()}>Stop</button>
    </div>
  )
}

export default MultableRef
