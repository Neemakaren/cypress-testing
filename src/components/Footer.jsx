import React from 'react'

const Footer = () => {
  let date = new Date()
  date.getFullYear()
  
  return (
    <section className='py-8 bg-[#55A747]'>
      <h3 className='flex items-center justify-center text-2xl text-white'>Healthy Living</h3>
    </section>
  )
}

export default Footer