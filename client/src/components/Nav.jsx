import  { useState } from 'react'
import { Link } from 'react-router-dom'

import "../css/Nav.css"
import { Button, Drawer } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
export function Nav(props) {

    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true);   
    
    }

    const onClose = () => {
        setVisible(false);
    };

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
                    <Button type="default" ghost style={{border: 'none'}} size='large' icon={<ShoppingCartOutlined />} onClick={handleClick}></Button>
                    <Drawer
                    title="My Drawer"
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    open = {visible}
                    // visible={visible}
                    > 
                        {/* Drawer content goes here */}
                        <p>Drawer content...</p>
                    </Drawer>
              
                </div>
            
                <div className='nav-item'><Link className='link-deco' to="/Login"><img src='./icons8-user-50.png' alt='login/signup' /></Link></div>

                </div>
               
            </div>       
        </nav>
    )
}
