import React, {useState} from 'react'
import{headerLogo} from '../assets/images'
import{hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import{Menu, X } from "lucide-react"

const Nav = () => {
  const[menuOpen, setMenuOpen]=useState(false)
  const toggleNav=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex  justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
          
        </a>
        <ul className='flex-1 hidden justify-center gap-20 md:flex '>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a href='item.href' className='fonts-montserrat leading-normal text-lg text-slate-gray '>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className='hidden max-lg:block ' onClick={
          toggleNav()
        }>
          <img src={hamburger} alt="Hamburger" width={25} height={25} ></img>
        </div> */}
        <div className='md:hidden'>
          <button onClick={toggleNav} >
            {menuOpen ? <X />: <Menu /> }
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className='flex flex-col place-items-end basis-full'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a href='item.href' className='fonts-montserrat leading-normal text-lg text-slate-gray '>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      )}
    </header>
  )
}

export default Nav