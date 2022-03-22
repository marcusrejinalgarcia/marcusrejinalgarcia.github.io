import React from 'react';
import SectionHeader from './SectionHeader';
import me from '../img/me.jpg'

const About = () => {
  return (
    <section id='about' className='container mx-auto lg:px-16 text-white'>
      <SectionHeader title='about me' subtitle='who I am' />
      <article className='container mx-auto flex flex-col xl:flex-row lg:px-8 gap-8'>
        <div className='grow'>
          <img 
            src={me}  
            alt="It's a me, Marcus." 
            className="m-auto md:mx-4 lg:mx-8 aspect-square object-cover max-w-sm max-h-60 rounded-2xl border-solid border-8 border-white md:float-left"
          />
          <p className='xl:max-w-prose text-lg mt-4 md:mt-0'>I am <b>Marcus Rejinal M. Garcia</b>. I'm a web developer currently residing in Quezon City, Philippines.</p><br />
          <p className='xl:max-w-prose text-lg mt-4 md:mt-0'>Once upon a time, I was an optimistic college student taking up math as his major. I loved solving problems and analyzing things with precise detail. <span className='text-lg italic'>Then everything changed when calculus attacked.</span> Despite my love for math, it did not love me back. After some reflection, I decided to pursue a different thing that I love: technology.</p><br />
          <p className='xl:max-w-prose text-lg mt-4 md:mt-0'>I found web development to be the perfect profession for me. It involves coding, which requires analysis and problem solving, not to mention a lot of math and logic. Having a creative touch helps out a lot, too, especially when you're involved with the front-end. It's this perfect combination that draws me to stick with it.</p>
          
        </div>
        <div className='flex flex-col place-content-center lg:max-w-md m-auto py-6 gap-4'>
          <p className='text-center text-4xl italic font-medium'><span className='text-4xl text-yellow-300'>{'\u275D'}</span> Design is fifty percent <span className='text-4xl text-yellow-300 font-extrabold'> mathematics</span>, whatever percent <span className='text-4xl text-yellow-300 font-extrabold'>instinct</span>. <span className='text-4xl text-yellow-300'>{'\u275E'}</span></p>
          <p className='text-center text-gray-400 text-xl italic font-medium'>-some random web developer on the internet named Marcus, I guess?</p>
        </div>
      </article>
    </section>
  )
}

export default About