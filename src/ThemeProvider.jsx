
import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

export const  ThemeProvider =({children})=>{

    const [theme,setTheme]=useState('light')
    const msg='Hello'
    const toggleTheme=()=>{
     setTheme((prevtheme)=> (prevtheme==='light'?'dark':'light'))
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme,msg}}>
         {children}
       </ThemeContext.Provider>
    )
  
 }
