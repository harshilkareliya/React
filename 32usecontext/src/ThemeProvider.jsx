import React,{useState} from 'react'
import ThemeContext from './Themecontext'

function ThemeProvider({children}) {

    const[theme, settheme] = useState('ligh')

    const toggleTheme = () =>{
        settheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
