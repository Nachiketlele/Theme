import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
    const {toogletheme,isLight} = useContext(ThemeContext)
  return (
    <>
    <div>
        <button onClick={toogletheme}>{`Make ${isLight ? "Dark":"Light"}`}</button>
    </div>
    

  </>
  
  )
}

export default Navbar