import React from 'react'
import Back from '../common/Back'
import RecentCard from '../Home/recent/RecentCard'
import img from '../../components/İmages/images/about.jpg'

const Blog = () => {
  return (
    <>
 <section className='blog-out mb'>
<Back name="blog" title="blog grid - our blogs" cover={img}/>
<div className='container recent'>
    <RecentCard/>
</div>
 </section>
 </>
  )
}

export default Blog