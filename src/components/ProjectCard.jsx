import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

require.context('../img', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

const TechTag = ({ tech }) => {
  let bgColor = '';
  let textColor = '';
  switch (tech) {
    case 'HTML':
      bgColor = 'bg-[#F2622E]';
      textColor = 'text-white';
      break;
    case 'CSS':
      bgColor = 'bg-[#2E6FF2]';
      textColor = 'text-white';
      break;
    case 'JavaScript':
      bgColor = 'bg-[#F2CE1B]';
      textColor = 'text-black';
      break;
    case 'Bootstrap':
      bgColor = 'bg-[#7013F2]';
      textColor = 'text-white';
      break;
    case 'React':
      bgColor = 'bg-[#61dbfb]';
      textColor = 'text-gray-800';
      break;
    case 'Material UI':
      bgColor = 'bg-[#007fff]';
      textColor = 'text-white';
      break;
    case 'Chakra UI':
      bgColor = 'bg-[#81e6d9]';
      textColor = 'text-gray-800';
      break;
    case 'Tailwind':
      bgColor = 'bg-[#38bdf8]';
      textColor = 'text-white';
      break;

    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
      break;
  }

  return (
    <p className={`inline-block py-1 px-2 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}>
      {tech}
    </p>
  )
}

const ProjectCard = (props) => {
  const image = `${props.image}`;

  return (
    <div className='relative rounded-xl aspect-square xs:aspect-[5/4] bg-gray-700'>
      <img src={images[`${image}`]} alt={props.name} className='rounded-xl h-full object-cover' />
      <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center p-6 w-full h-full opacity-0 hover:opacity-100 rounded-xl transition-all bg-neutral-800/70  backdrop-blur-md text-white'>
        <div className='flex flex-row flex-nowrap overflow-auto gap-2'>
          {props.techStack.map((tech) => {
            return (
              <TechTag tech={tech} />
            )
          })}
        </div>
        <h6 className='py-3 text-2xl font-semibold'>{props.name}</h6>
        <p className='text-base'>{props.description}</p>
        <div className='flex flex-row mt-auto'>
          <a className='py-2 px-3 rounded-full font-semibold bg-[#4E47FC] hover:bg-[#6661FF] text-white' href={`${props.siteURL}`} target={'_blank'} rel='noreferrer'>Visit Site</a>
          <a className='py-2 px-3 absolute left-28 font-semibold hover:underline underline-offset-2' href={`${props.githubRepo}`} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={brands('github')} /> GitHub</a>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard