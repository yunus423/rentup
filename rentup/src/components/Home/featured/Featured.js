import React from 'react'
import '../../Home/featured/featured.css'
import Heading from '../../common/Heading'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
<section className='featured background'>
    <div className='container'> 
        <Heading title='Featured Property types' subtitle='find All Type of property' />
        <FeaturedCard/>
    </div>

</section>
  )
}

export default Featured