import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import logo from './assets/Razorpay-logo.webp'
import flag from './assets/Indian-flag.webp'
import Heroimg from './assets/Hero-section-img.jpg'
import Herobend from './assets/hero-bend.svg'
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

          <div className='flex space-x-6'>
            <img src={flag}
              width="60px"
            />

            <button className='py-3 px-5 font-mullish text-white border-lightBlue border rounded-sm text-sm font-bold' >Log in</button>
            <button className='py-3 px-4 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500'>Sign Up</button>

          </div>
        </div>
      </nav>




      {/*------------------- Hero Section ---------------------------------*/}

      <section className='relative bg-deepBlue  py-[100px]'>

        <div className='w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto'>


          {/* left part */}
          <div className='space-y-8'>
            <h1 className='font-mullish text-[40px] leading-[1.2] text-white' >Power your finance, grow your business</h1>
            <div className='w-6 h-1 bg-greenlight'></div>
            <p className='font-mullish text-[18px] leading-7 text-white opacity-70' >
              Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital.
            </p>
            <button className=' py-[14px] px-[18px] bg-lightBlue text-white rounded-md font-mullish font-bold
            hover:bg-lightBlue500 transition-all duration-200 '>Sign Up Now</button>
          </div>


          {/* right part */}
          <img src={Heroimg} className=' w-full max-w-[680px]' />


        </div>


      </section>

       {/* shape part */}
        <div className='w-[100%] absolute left-0 right-0 overflow-hidden'>
          <img src={Herobend} alt=""
            className='w-full object-fill scale-x-100' />
        </div>

<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>




      {/* ------------------- Feature section -------------------------- */}
      <section>
        <img src="" alt="" />
        <img src="" alt="" />

        <div>
          {/* ------------ heading---------------- */}
          <h2>Accept Payments with Razorpay Payment Suite</h2>
          <div></div>

          {/* content box */}
          <div>
            {/* left section */}
            <div>
              <h3>
                Supercharge your buisness with the all-powerfull
                <span className='text-lightBlue'>Payment Gateway</span>
              </h3>
              <ul>
                <li>
                  <span>100+ Payment Methods</span>
                </li>
                <li>
                  <span>Industry Leading Success</span>
                </li>
                <li>
                  <span>Superior Cheackout Experience</span>
                </li>
                <li>
                  <span>Easy to Intergrate</span>
                </li>
                <li>
                  <span>Instant Settlements from day 1</span>
                </li>
                <li>
                  <span>In-depth Reporting and Insights</span>
                </li>
              </ul>

              {/* for button and hyperlink */}
              <div>
                <button>Sign Up Now</button>
                {/* hyper link  */}
                <div>
                  <a href="">Know More<i>
                  </i></a>
                </div>
              </div>
              <img alt="" />


            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default App
