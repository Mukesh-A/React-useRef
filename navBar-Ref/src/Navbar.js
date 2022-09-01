import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linkContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(()=>{
    // what this does is gives the height and width

    const linkHeight = linkRef.current.getBoundingClientRect().height

    console.log(linkContainerRef.current.getBoundingClientRect())

    if(showLinks){
      linkContainerRef.current.style.height = `${linkHeight}px`
    }
    else{
      linkContainerRef.current.style.height = '0px'
    }

  },[showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
          </div>
          
          {/* //This is one way of doing showlink class we have hard coded the height , wat if more number of nav come in we have to change the height again

          // to over com this we can use ref => see above ref code */}


          {/* <div className={`${showLinks?'links-container show-container': 'links-container'}`}> */}
          <div className='links-container' ref={linkContainerRef}>
            <ul className="links" ref={linkRef}>
              
              {
                links.map((link)=>{
                  const {id,url,text} = link;
                  return <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                })
              }
            </ul>
          </div>
          
          <ul className="social-icons">
          {
                social.map((soc)=>{
                  const {id,url,icon} = soc;
                  return <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                })
              }
            </ul>
       
      </div>
    </nav>
  )
}

export default Navbar
