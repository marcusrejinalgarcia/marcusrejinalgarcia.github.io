import React from 'react';
import SectionHeader from './SectionHeader';
import me from '../img/me.jpg'

const About = () => {
  return (
    <section id='about' className='container mx-auto lg:px-16 text-white'>
      <SectionHeader title='About Me' subtitle='who I am' />
      <article className='container mx-auto'>
        <img 
          src={me}  
          alt="It's a me, Marcus." 
          className="mx-auto md:m-4 aspect-square max-w-[240px] border-solid border-8 border-white float-left"
        />
        <p className='max-w-prose'>I am <b>Marcus Rejinal M. Garcia</b>. I'm a web developer currently residing in Quezon City, Philippines. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates fugiat repellendus mollitia eius odio. Sapiente in velit magni voluptates hic. Saepe, corrupti rem minus error distinctio impedit nemo fuga exercitationem!
        Mollitia earum nemo aliquam provident amet magnam molestiae perferendis laudantium doloribus repudiandae vel aspernatur rem, porro hic minima quae voluptate quam a eligendi quidem vitae eveniet, cupiditate iusto soluta! Mollitia!
        Magnam ea vel itaque consequuntur sapiente? Aperiam deserunt, maiores quae quasi dolore, aspernatur itaque veniam veritatis vero cumque repellendus ullam ea voluptatibus officiis atque quos laudantium illum sunt exercitationem aut.</p>
      </article>
    </section>
  )
}

export default About