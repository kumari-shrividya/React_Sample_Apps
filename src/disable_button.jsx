import { useState } from "react"

const ButtonDisable=()=>{
    const [value,setValue]=useState(false)

    return (
        <>
        <input type='text'
        value={value}
        onChange={(e)=>e.target.value}
        />
        <button disabled={value.length<0?true:false}>My Button</button>
        </>
    )
}
