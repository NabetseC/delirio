import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.jsx"
import "./PageStyle.css"

function Header(){
    return(
        <div className='header'>
            <img src= {logo} alt = "Logo" className ="logo"></img>
            <div style={{paddingRight: "20vw"}}>
                <Link to = "/" className="headerLink">Home</Link>
                <Link to = "/" className="headerLink">Features</Link>
                <Link to = "/" className="headerLink">Founders</Link>
            </div>
        </div>
    )
}
export default Header