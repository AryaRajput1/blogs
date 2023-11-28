import { Moon, Sun } from "lucide-react";
import { useState } from "react"

function ToggleButton() {
  const [isDarkMode,setIsDarkMode] = useState(true)
  const toggleDarkMode = ()=>{
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark',!isDarkMode);
  }
  return (
    <div>{
      isDarkMode?(<Moon className="cursor-pointer" onClick={toggleDarkMode}/>):(<Sun className="cursor-pointer" onClick={toggleDarkMode}/>)}</div>
  )
}

export default ToggleButton