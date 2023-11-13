import React from 'react'
import '../../../components/Home/team/team.css'
import Heading from '../../common/Heading'
import { team } from '../../Data/Data'

const Team = () => {
  return (
   <section className='team background'>
    <div className='container'>
        <Heading title='Our featured Agents' subtitle='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'/>

        <div className='content mtop grid3'>
            {
                team.map((val,index)=>{
                    return (
                        <div key={index} className='box'>
                            <button className='btn3'>{val.list} Listinnig</button>
                            <div className='details'>
                                <div className='img'>
                           <img src={val.cover} alt=''/> 
                           <i className='fa fa-circle-check'></i>  
                                </div>
                                <i className='fa fa-location-dot'> </i>
                                <label htmlFor=''>{val.address}</label>
                                <h4>{val.name}</h4>

                                <ul>
                                    {
                                        val.icon.map((icon,index)=>(
                                            <li key={index}>{icon}</li>
                                        ))
                                    }
                                </ul>
                                <div className='button flex'>
                                    <button>
                                        <i className='fa fa-envelope'></i>
                                        Message
                                    </button>
                                    <button className='btn4'>
                                        <i className='fa fa-phone-alt'></i>
                                        Message
                                    </button>
                                </div>
                            </div >
                        </div>
                    )
                })
            }
        </div>
    </div>

   </section>
  )
}

export default Team