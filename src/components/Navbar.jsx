import React from 'react';

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
  return (
    <header id='navbar' className='fixed top-0 left-0 right-0 h-16 z-50 bg-transparent flex place-content-center'>
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