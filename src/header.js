import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./redLogo.svg"
import "./PageStyle.css"

function Header(){
    return(
        <div className='header'>
            <div style={{display:"flex", alignItems:"center"}}>
            <img src= {logo} alt = "Logo" className ="logo"></img>
            <p style={{fontSize:"1.5rem", fontWeight:"600", color:"#F76767"}}>delirio</p>
            </div>
            <div style={{paddingRight: "20vw", display:"flex", justifyContent:"center"}}>
                <Link to="/App.js" className='headerLink'>Home</Link>
                <a href="/#features" className='headerLink'>Features</a>
                <button className='waitlistButtonSmall' style={{width:"10rem"}}>
                    Join waitlist
                </button>
            </div>
        </div>
    )
}
export default Header