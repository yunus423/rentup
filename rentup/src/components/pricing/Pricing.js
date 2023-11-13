import React from 'react'
import img from '../../components/İmages/images/pricing.jpg'
import Back from '../common/Back'
import RecentCard from '../Home/recent/RecentCard'

const Pricing = () => {
  return (
  <>
  <section className='blog-out mb'>
<Back name="30 days money back guarentee" title="blog grid - our blogs" cover={img}/>
<div className='price container'>
    <RecentCard/>
</div>
 </section>
 </>
  )
}

export default Pricing