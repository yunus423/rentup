import React from 'react'
import './footer.css'
import { footer } from '../../Data/Data'
const Footer = () => {
  return (
    <>
   <section className='footerContact'>
    <div className='container'>
        <div className='send flex'>
            <div className='text'>
            <h1>Do You Have Questions?</h1>
            <p>well help you to grow your career and growth</p>  
            </div>
            <button className='btn5'>Contact Us Today</button>
        </div>
    </div>
   </section>

   <footer>
    <div className='container'>
        <div className='box'>
            <div className='logo'>
                <img src='../images/logo-light.png' alt=''/>
               <h2>Do You Need Help With Anything?</h2> 
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> 

              <div className='input flex'>
                <input type='text' placeholder='email Adress ' name='' id=''/>
                <button>subscribe</button>
              </div>
            </div>
        </div>

        {
      footer.map((val)=>(
        <div className="box">
            <h3>{val.title}</h3>
            <ul>
                {val.text.map((items)=>(
                    <li>{items.list}</li>
                ))}
            </ul>
        </div>
      ))
        }
    </div>

   </footer>
   <div className='legal'>
    <span>@ 2021 rentUP, designd By yunus doğan</span>
   </div>
   </>
  )
}

export default Footer