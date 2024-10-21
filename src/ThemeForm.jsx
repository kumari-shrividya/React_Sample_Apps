
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { Mybutton } from "./ThemButton"
export const ThemeForm=()=>{
   
    const {theme,toggleTheme}=useContext(ThemeContext)
   
    return(
        <div  style={{ backgroundColor:theme==='light'?'lightGray':'darkblue'
            ,width:'300px',height:'60px',padding:'30px',marging:'20px'}}>
                      <input type='text'> 
            </input>
            <Mybutton/>
            <button onClick={toggleTheme}>ToggleTheme</button>
           
            <label>
            <input type='checkbox'
            checked={theme==='dark'}
            onChange={toggleTheme}
            ></input>
            Dark Mode
            </label>
        </div>
       
    )
 }