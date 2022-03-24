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
    <div className='relative flex-initial basis-96 rounded-lg bg-gray-700 hover:bg-gray-600 active:bg-gray-600 min-h-fit hover:scale-105 transition ease-in-out'>
      <img src={images[`${image}`]} alt={props.name} className='rounded-t-lg w-full h-48 object-cover' />
      <div className='flex flex-col justify-center p-6 h-72 sm:h-64 text-white'>
        <div className='flex flex-row flex-wrap gap-2'>
          {props.techStack.map((tech) => {
            return (
              <TechTag tech={tech} />
            )
          })}
        </div>
        <h6 className='py-3 text-2xl font-semibold'>{props.name}</h6>
        <p className=''>{props.description}</p>
        <div className='flex flex-row mt-auto'>
          <a className='py-2 px-3 border-2 rounded-full' href={`${props.siteURL}`} target={'_blank'} rel='noreferrer'>Visit Site</a>
          <a className='py-2 px-3 relative top-0.5 hover:underline underline-offset-2' href={`${props.githubRepo}`} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={brands('github')} /> GitHub</a>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard