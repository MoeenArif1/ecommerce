import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart'

import "../css/Nav.css"
import { useLoginContext } from './LoginContext'
import { Input } from 'antd'
import { useAppContext } from './appContext'

export function Nav() {
    const navigate = useNavigate()
    const {loginContext} = useLoginContext()
    const [id, setId] = useState()

    useEffect(()=> {
        if (loginContext)
            setId(loginContext.id)
    },[loginContext])

   const loginHandle = ()=> {
    if (!id)
        navigate('/Login')
    else
        navigate('/AccountInfo')

   }

    return (
        <nav className='main-header'>
            <div className='header-content'>
                <div className='left'>
                    <div className='nav-item'><Link className='link-deco' to="/Home">Home</Link></div>
                    <div className='nav-item'><Link className='link-deco' to="/About">About</Link></div>
                </div>
                
                <div className='center'> <Link className='link-deco' to="/Home">XYZ-Store.</Link></div>
                
                <div className='right'>
                <div className='nav-item'>
                    <Cart/>
                </div>
            
                <div className='nav-item'>
                    <button style={{background: 'transparent', border: 'none'}} onClick={loginHandle}>
                        <img src='./icons8-user-50.png' alt='login/signup' />
        
                    </button>
                    
                    </div>

                </div>
               
            </div>       
        </nav>
    )
}
