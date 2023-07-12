import  { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

import "../css/Nav.css"

export function Nav(props) {

   

    return (
        <nav className='main-header'>
            <div className='header-content'>
                <div className='left'>
                    <div className='nav-item'><Link className='link-deco' to="/Home">Home</Link></div>
                    <div className='nav-item'><Link className='link-deco' to="/About">About</Link></div>
                </div>
                
                <div className='center'> <Link className='link-deco' to="/Home">XYZ-Store.</Link></div>
                
                <div className='right'>
                <div className='nav-item'> <Link className='link-deco' to="/not">{/* size 50 50  */}<img src='./icons8-search-50.png' alt='Search'/></Link></div>
                <div className='nav-item'>
                    <Cart/>
                </div>
            
                <div className='nav-item'><Link className='link-deco' to="/Login"><img src='./icons8-user-50.png' alt='login/signup' /></Link></div>

                </div>
               
            </div>       
        </nav>
    )
}
