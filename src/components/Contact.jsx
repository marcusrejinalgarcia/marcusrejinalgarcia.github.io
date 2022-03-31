import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='container mx-auto lg:px-16 text-white'>
      <SectionHeader title='contact' subtitle="call me, maybe?" />
      <article className='container mr-auto flex flex-col xl:flex-row lg:px-8 gap-8'>
        <div className='grow max-w-fit'>
          <p className='xl:max-w-prose text-lg mt-4'>Got a crazy idea you want to become real? Do you want to collaborate with me on a project? Or maybe you feel like just saying hi? Just fill up this form, hit Send, then wait for me to email you.</p>
        </div>
        <ContactForm />
      </article>
    </section>
  )
}

export default Contact