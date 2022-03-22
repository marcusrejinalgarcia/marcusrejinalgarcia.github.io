import React from 'react'

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className='flex flex-row justify-start align-bottom gap-8 my-5'>
      <h2 className='inline-block text-3xl md:text-4xl font-semibold'>{title}</h2>
      <p className='inline-block text-xl md:text-2xl font-light text-yellow-300 mt-auto'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader