import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    {/* <UserCard name="Rana" desc="Desc1"/>
    <UserCard name="Maharana" desc="Desc2"/>
    <UserCard name="Prithviraj" desc="Desc3"/> */}
    {/* <Counter/> */}

      <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">
        React ke saath Tailwind chal rahi hai!
      </h1>
    </main>
   </div>
  )
}

export default App
