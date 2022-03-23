import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <section id='projects' className='container mx-auto lg:px-16 text-white'>
      <SectionHeader title='my projects' subtitle="what I did" />
      <div className="flex flex-row flex-wrap place-content-center gap-12 md:gap-8">
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard />  
      </div>
    </section>
  )
}

export default Portfolio