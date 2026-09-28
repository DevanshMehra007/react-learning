import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <UserCard name="Rana" desc="Desc1"/>
    <UserCard name="Maharana" desc="Desc2"/>
    <UserCard name="Prithviraj" desc="Desc3"/>
   </div>
  )
}

export default App
