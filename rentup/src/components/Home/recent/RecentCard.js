import React from 'react'
import { list } from '../../Data/Data'

const RecentCard = () => {
  return (
   <>
   <div className='content grid3 mtop'>
   
   {
   list.map((val,index)=>{
    return(
        <div className='box shadow' key={index}>
            <div className='img'>
                <img src={val.cover} alt=''/>
            </div>
            <div className='text'>
               <div className='category flex'> 
                <span style={{background: val.category==="for sale" ? "#25b5791a": "ff98001a", color:val.category==="for sale" ? "#25b579" : "ff9800" }}>{val.category}</span>
              <i className='fa fa-heart'></i>
               </div>
               <h4>{val.name}</h4>
               <p><i className='fa fa-location-dot'></i> {val.location}</p>
            </div>
            <div className='button flex'>
              <div>
                <button className='btn2'>{val.price}</button>
                <label htmlFor=''>/sqft</label>
              </div>
              <span>{val.type}</span>
            </div>

        </div>
    )
    })
   }
   </div>
   </>
  )
}

export default RecentCard