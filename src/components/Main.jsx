import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Main = () => {
  return (
    <main className='w-screen min-h-screen p-8 bg-black '>
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default Main