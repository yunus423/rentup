import React from 'react'
import './about.css'
import Back from '../common/Back'
import img from '../../components/İmages/images/about.jpg'
import Heading from '../common/Heading'
const About = () => {
  return (
  <section className='about'>
    <Back name="About Us" title="About Us-Who We Are?" cover={img} />
    <div className='container mtop flex'>
        <div className='left row'>
            <Heading title="Our Agency Story"  subtitle="Check out our company story and work process "/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <button className='btn2'>More About us</button>
        </div>
        <div className='right row'>
            <img src='./immio.jpg' alt=''/>
        </div>
    </div>
  </section>
  )
}

export default About