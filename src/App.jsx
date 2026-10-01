import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import logo from './assets/Razorpay-logo.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <UserCard name="Rana" desc="Desc1"/>
    <UserCard name="Maharana" desc="Desc2"/>
    <UserCard name="Prithviraj" desc="Desc3"/> */}
    {/* <Counter/> */}

     <nav className='bg-deepBlue'>
      <div className='relative w-[1080px] mx-auto flex items-center justify-between '>
      {/* ----------- logo ------------- */}
      <a href="/" className='cursor-pointer py-7 pr-7'>
      <img className='py-3'
         src={logo} alt="logo"
         width="125px" 
         height="30px"
         />
      </a>
      <ul className='flex space-x-6'>
        <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Payments</a>
              <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all 
            duration-200'></div>
        </li>
         <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Banking</a>
              <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all 
            duration-200'></div>
        </li>
       
        <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Corporate Card</a>
             
        </li>

         <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Payroll</a>
              
        </li>

         <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Resources</a>
              <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all 
            duration-200'></div>
        </li>

         <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all 
            duration-200 relative group'>
              <a href="#">Pricing</a>
              <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all 
            duration-200'></div>
        </li>
        
      </ul>
      </div>
     </nav>
   </div>
  )
}

export default App
