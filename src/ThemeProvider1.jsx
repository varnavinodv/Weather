import React,{ useState } from "react";
import Themecontext from "./ThemeContext";


const ThemeProvider1 = ({children}) => {

    const [theme,setTheme]=useState(true)

    let toggleTheme=()=>{(
        setTheme(!theme)
    )}
  return (
    <div>
        <Themecontext.Provider value={{theme,toggleTheme}}>
            {children}
        </Themecontext.Provider>
      
    </div>
  )
}

export default ThemeProvider1
