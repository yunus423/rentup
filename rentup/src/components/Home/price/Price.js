import React from 'react'
import '../../../components/Home/price/price.css'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
   <section className='price padding'>
    <div className='container'>
        <Heading title='Select Your Package' subtitle='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'/>
        <PriceCard/>
    </div>
   </section>
  )
}

export default Price