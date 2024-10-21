import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Mybutton=()=>{
    const {theme,msg}=useContext(ThemeContext)

    return(
        <button style={{backgroundColor:theme==='light'?'gray':'yellow'}}>{msg}</button>
    )
}