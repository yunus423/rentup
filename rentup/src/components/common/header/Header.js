import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../Data/Data'
import '../../common/header/header.css'

const Header = () => {
  const [navList, setNavList]=useState(false)
  return (
    <>
    <header>
         <div className='container flex'>
            <div className='logo'>
            
     <h1><span className='ev'><i class="fa-solid fa-house-chimney-window"></i></span>Rent<span className='up'>UP</span></h1>
            </div>
            <div className='nav'>
              <ul className={navList ? "small" :"flex"}>
                {
                    nav.map((list,index)=>(

                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))

                }
              </ul>
            </div>
            <div className='button flex'>
              <h4>
                <span>2</span>My List
              </h4>
              <button className='btn1'>
                <i className='fa fa-sign-out'></i>Sign In
              </button>
            </div>
            <div className='toggle'>
              <button onClick={()=>setNavList(!navList)}>
               {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i> }
              </button>
            </div>
         </div>
        
        </header></>
  )
}

export default Header