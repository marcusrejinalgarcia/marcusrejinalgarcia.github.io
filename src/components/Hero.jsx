import React from 'react';
// import '../public/img/hero-bg.jpg';

const Hero = () => {
  return (
    <section className='h-screen container mx-auto w-3/4 flex flex-col place-content-center gap-4 text-center text-white'>
      <h1 className='text-5xl font-bold'>Hello World!</h1>
      <h3 className='text-2xl font-light'>My name is <span className='text-2xl font-semibold'>Marcus</span>, and I'll make awesome websites for you.</h3>
      <div className="mx-auto my-8 flex flex-row flex-wrap place-content-center gap-4">
        <a className='bg-yellow-300 text-black text-lg p-4 rounded-lg font-semibold' href="#contact">Send me a message</a>
        <a className='text-lg p-4 font-semibold hover:underline' href="#about">More about me </a>  
      </div>
    </section>
  )
}

export default Hero