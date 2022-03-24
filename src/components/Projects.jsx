import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

// Place all site images in ../img and put *only* the filename into the image property
const ProjectList = [
  {
    name: 'holoCentral',
    description: `A website by a Hololive fan, for Hololive fans.`,
    image: 'holoCentral.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    siteURL: 'http://marcusrejinalgarcia.github.io/holoCentral',
    githubRepo: 'https://github.com/marcusrejinalgarcia/holoCentral',
  },
  {
    name: 'Libertas Health',
    description: 'Sample patient login and information form made using React and Material UI',
    image: 'Libertas-Health.png',
    techStack: ['React', 'Material UI'],
    siteURL: 'https://marcusrejinalgarcia.github.io/Libertas-Health',
    githubRepo: 'https://github.com/marcusrejinalgarcia/Libertas-Health',
  },
  {
    name: 'Coding Journal',
    description: 'A simple journaling webapp with persistent local storage',
    image: 'coding-journal.png',
    techStack: ['React', 'Chakra UI'],
    siteURL: 'http://marcusrejinalgarcia.github.io/my-coding-journal',
    githubRepo: 'https://github.com/marcusrejinalgarcia/my-coding-journal',
  },
  {
    name: 'My Portfolio',
    description: 'This website. Made with React and Tailwind—a match made in heaven, IMO',
    image: 'portfolio.png',
    techStack: ['React', 'Tailwind'],
    siteURL: 'http://marcusrejinalgarcia.github.io',
    githubRepo: 'https://github.com/marcusrejinalgarcia/marcusrejinalgarcia.github.io',
  }
]

const Portfolio = () => {
  return (
    <section id='projects' className='container mx-auto lg:px-16 text-white'>
      <SectionHeader title='projects' subtitle="what I made" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-evenly justify-items-center lg:px-8 gap-8">
        {/* <ProjectCard />  
        <ProjectCard />  
        <ProjectCard /> */}
        {ProjectList.map((project) => {
          return (
            <ProjectCard 
              name = {project.name}
              description = {project.description}
              image = {project.image}
              techStack = {project.techStack}
              siteURL = {project.siteURL}
              githubRepo = {project.githubRepo}
            />
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio