import React,{useState,useEffect} from "react"

import './Clicker.css'
export const Clicker = () => {

    const [clicks, setClicks] = useState(0)    // HOOK: controla el estado del componente


const sumarClick = () =>{
    setClicks(clicks+ 1)
}

useEffect(() => {
   console.log("Me monte")

   return () =>{
       console.log("Me desmonte")
   }
}, [clicks])
return (
    <div onClick={sumarClick} className={clicks % 2 === 0 ? 'green' : 'red'}>
        Clicks:{clicks}
        <p> FyH {new Date().toLocaleString()}</p>
    </div>
)


}