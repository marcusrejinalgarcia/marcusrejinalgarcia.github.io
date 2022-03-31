import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
  return (
    <main className='w-screen min-h-screen p-8 bg-black '>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main