import React from 'react'
import "../../../components/Home/awards/awards.css"
import Heading from '../../common/Heading'
import { awards } from '../../Data/Data'

const Awards = () => {
  return (
   <>
   <section className='awards padding' >
    <div className='container'>
        <Heading title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' subtitle='Our Awards'/>
        <div className='content grid4 mtop'>
            {
                awards.map((val,index)=>{
                    return(
                       <div className='box' key={index}>
                        <div className='icon'>
                            <span>{val.icon}</span>
                        </div>
                        <h1>{val.num}</h1>
                        <p>{val.name}</p>
                       </div> 
                    )
                })
            }
        </div>
    </div>
   </section>
   </>
  )
}

export default Awards