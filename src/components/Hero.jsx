import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Hero = () => {
  return (
    <section className='h-screen z-0 container relative mx-auto w-3/4 flex flex-col place-content-center gap-4 text-center text-white '>
      <Typewriter
        options={{
          wrapperClassName: 'text-5xl font-bold',
          cursorClassName: 'text-5xl font-normal Typewriter__cursor '
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello World!')
            .start();
        }}
      />
      <h3 className='text-2xl font-light'>My name is <span className='text-2xl font-semibold'>Marcus</span>, and I'll make awesome websites for you.</h3>
      <div className="mx-auto my-8 flex flex-row flex-wrap place-content-center gap-4">
        <a className='bg-yellow-300 hover:bg-yellow-200 text-black text-lg p-4 rounded-lg font-semibold' href="#contact">Send me a message</a>
      </div>
      <a href='#about' className='absolute left-0 right-0 bottom-16 mx-auto w-48'>
        <p className='text-white/75 mb-4'>Learn more about me</p>
        <FontAwesomeIcon icon={solid('chevron-down')} className=' animate-bounce text-4xl opacity-75' />
      </a>
      
    </section>
  )
}

export default Hero