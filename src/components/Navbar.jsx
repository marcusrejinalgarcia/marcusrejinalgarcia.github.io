import React from 'react';


const Navbar = () => {
  return (
    <header id='navbar' className='fixed top-0 left-0 right-0 h-16 bg-transparent flex place-content-center'>
      <nav className='container mx-auto px-6 flex flex-row justify-center md:justify-between align-center'>
        <div className='flex place-content-center'>
          <h1 className='text-white text-2xl font-bold my-auto'>marcusrejinalgarcia</h1>
        </div>
        <div className='place-content-center hidden md:flex'>
          <ul className='my-auto'>
            <li className='inline-block mx-2'>
              <a href="/" className='text-white p-2 rounded-md hover:bg-yellow-300 hover:text-black'>Home</a>
            </li>
            <li className='inline-block mx-2'>
              <a href="#about" className='text-white p-2 rounded-md hover:bg-yellow-300 hover:text-black'>About</a>
            </li>
            <li className='inline-block mx-2'>
              <a href="#projects" className='text-white p-2 rounded-md hover:bg-yellow-300 hover:text-black'>Projects</a>
            </li>
            <li className='inline-block mx-2'>
              <a href="#contact" className='text-white p-2 rounded-md hover:bg-yellow-300 hover:text-black'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar