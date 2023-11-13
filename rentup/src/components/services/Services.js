import React from 'react'
import Back from '../common/Back'
import img from '../../components/İmages/images/services.jpg'
import FeaturedCard from '../Home/featured/FeaturedCard'

const Services = () => {
  return (
  <section className='services mb'>
    <Back name="Services" title="services -All Services" cover={img}/>
    <div className='featured container'>
        <FeaturedCard/>
    </div>
  </section>
  )
}

export default Services