import React from 'react'
import '../../../components/Home/recent/recent.css'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
const Recent = () => {
  return (
    <>
<section className='recent padding'>
    <div className='container'>
      <Heading title="Recent Property Listed" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
      <RecentCard/>
    </div>
</section>
</>
  )
}

export default Recent