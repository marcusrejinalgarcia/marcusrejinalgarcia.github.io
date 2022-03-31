import React, { useState } from 'react';

const NavMenu = ({ children }) => {
  return (
    <ul className='hidden md:flex my-auto place-content-center'>
      {children}
    </ul>
  )
}

const NavItem = ({ children }) => {
  return (
    <li className='inline-block mx-2'>
      <a 
        className='
          p-2
          rounded-md
          text-white 
          hover:bg-gray-500 
          font-semibold
          capitalize
        ' 
        href={`#${children}`}
      >
        {children}
      </a>
    </li>
  )
}

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const scrollHeight = window.innerHeight - 64;
  const changeNavbarColor = () =>{
     if (window.scrollY >= scrollHeight) {
       setColorchange(true);
     } else {
       setColorchange(false);
     }
  };

  window.addEventListener('scroll', changeNavbarColor);
  const navbarColor = colorChange ? 'bg-black border-b-2 border-b-yellow-400' : 'bg-transparent';

  return (
    <header id='navbar' className={'fixed top-0 left-0 right-0 h-16 z-50 flex place-content-center ' + navbarColor}>
      <nav className='container mx-auto px-6 flex flex-row justify-center md:justify-between align-center'>
        <div className='flex place-content-center'>
          <a href="#" className='text-white text-2xl font-bold my-auto decoration-yellow-300 hover:underline'>marcusrejinalgarcia</a>
        </div>
        <NavMenu>
          <NavItem>about</NavItem>
          <NavItem>skills</NavItem>
          <NavItem>projects</NavItem>
          <NavItem>contact</NavItem>
        </NavMenu>
      </nav>
    </header>
  )
}

export default Navbar