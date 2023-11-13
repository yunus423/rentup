import React from 'react'
import '../../Home/Hero/hero.css'
import Heading from '../../common/Heading'

const Hero = () => {
  return (
   <section className='hero'>
    <div className='container'>
        <Heading title="Search Your Next Home" subtitle="finf new & featured property located in your local city" />
     <form  className='flex' >
        <div className='box'>
            <span>City/Street</span>
            <input type='text' placeholder='Location'/>
        </div>
        <div className='box'>
            <span>Propert Type</span>
            <input type='text' placeholder='Propert Type'/>
        </div>
        <div className='box'>
            <span>Price Range</span>
            <input type='text' placeholder='Price Range'/>
        </div>
        <div className='box'>
            <h4>Advance Filter</h4>
        </div>
 <button className='btn'>
    <i className='fa fa-search'></i>
 </button>
     </form>
     </div>
   </section>
  )
}

export default Hero