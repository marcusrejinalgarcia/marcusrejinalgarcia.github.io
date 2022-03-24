import React from 'react'

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className='flex flex-row justify-between md:justify-start align-bottom md:gap-8 my-5'>
      <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>{title}</h2>
      <p className='inline-block text-right text-lg sm:text-xl md:text-2xl font-medium text-yellow-300 mt-auto'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader