import React from 'react'

const TechTag = ({children}) => {
  let bgColor = '';
  let textColor = '';
  switch (children) {
    case 'HTML':
      bgColor = 'bg-orange-600';
      textColor = 'text-white';
      break;
    case 'CSS':
      bgColor = 'bg-blue-600';
      textColor = 'text-white';
      break;
    case 'JavaScript':
      bgColor = 'bg-yellow-400';
      textColor = 'text-black';
      break;
    case 'Bootstrap':
      bgColor = 'bg-violet-600';
      textColor = 'text-white';
      break;

  
    default:
      bgColor = 'bg-gray-600';
      textColor = 'text-white';
      break;
  }

  return (
    <li 
      className={`inline-block mr-2 py-1 px-2 rounded-full ${bgColor}`}>
      <p className={`text-xs font-semibold ${textColor}`}>{children}</p>  
    </li>
  )
}

const ProjectCard = () => {
  return (
    <div className='relative rounded-lg bg-gray-700 max-w-xs lg:max-w-sm'>
      <img src={require('../img/holoCentral.png')} alt="holoCentral" className='rounded-lg w-full h-[50%] object-cover'/>
      <div className='p-6 h-[50%] text-white'>
        {/* <div className='flex flex-row flex-wrap justify-between gap-8 md:gap-4'> */}
          <ul>
            <TechTag>HTML</TechTag>
            <TechTag>CSS</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>Bootstrap</TechTag>
          </ul>
          <h6 className='py-3 text-2xl font-semibold'>holoCentral</h6>

        {/* </div> */}
        <p className=''>Insert short description here</p>
        <div className='flex flex-row mt-6'>
          <a className='py-2 px-3 border-2 rounded-full' href="http://marcusrejinalgarcia.github.io/holoCentral" target={'_blank'} rel='noreferrer'>Visit Site</a>
          <a className='py-2 px-3' href="https://github.com/marcusrejinalgarcia/holoCentral" target={'_blank'} rel='noreferrer'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard