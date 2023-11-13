import React from 'react'
import '../../../components/Home/location/location.css'
import Heading from '../../common/Heading'
import { location } from '../../Data/Data'

const Location = () => {
  return (
<section className='location padding'>
    <div className='container'>
        <Heading title='Explore By Location ' subtitle='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  '/>
       
       <div className='content grid3 mtop '>
        {
          location.map((item,index)=>{
            return (
                <div className='box' key={index}>
                 <img src={item.cover} alt=''/>
                 <div className='overlay'>
                    <h5>{item.name}</h5>
                 </div>
                 <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                 </p>
                </div>
            )
          })
        }
        </div>
    </div>
</section>
  
  )
}

export default Location