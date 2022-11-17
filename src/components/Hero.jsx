import Heroimage from '../assets/photo-grid.png'

import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <img src={Heroimage} alt='hero_image' className='hero--image' />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home</p>
    </section>

  )
}

export default Hero