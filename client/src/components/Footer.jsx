import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Footer.css"

export function Footer(props) {
    

    return (
       <div className='footer'>
        <div className='footer-content'>
            <div className='footer-col'>
                <div className='footer-title'> About</div>
                <div className='footer-text'>
                Our e-commerce website specializing in tech is your one-stop destination for all things technology.
                 We offer a wide range of cutting-edge products, including smartphones, laptops, smart home devices, and gaming accessories.
                  With our user-friendly interface, secure payment options, and efficient delivery services, we aim to provide an unmatched
                    shopping experience for tech enthusiasts. Whether you're looking to upgrade your gadgets or stay up-to-date with the latest tech trends,
                     our platform has you covered.
                </div>
            </div>
            <div className='footer-col'>
                <div className='footer-title'>Contact</div>
                <div className='footer-c-item'>
                    <img src='/icons8-location-50.png'/>
                    <div className="footer-text"> Katchery Road، Near Anarkali Bazar, Lahore, 54000</div>
                </div>
                <div className='footer-c-item'>
                    <img src='/icons8-phonelink-ring-50.png' />
                    <div className="footer-text">03055804846</div>
                </div>
                <div className='footer-c-item'>
                    <img src='icons8-email-50.png'/>
                    <div className="footer-text">help@xyzstore.com</div>
                </div>

            </div>
            <div className='footer-col'>
                <div className='footer-title'>Category</div>
                <span className="footer-text">Headphones</span>
                <span className="footer-text">Smart Watches</span>
                <span className="footer-text">Bluetooth Speakers</span>
                <span className="footer-text">Wireless Earbuds</span>
                <span className="footer-text">Home Theatre</span>
                <span className="footer-text">Projectors</span>
            </div>
            <div className='footer-col pages'>
                <div className='footer-title'>Pages</div>
                <Link className='footer-text' to='/Home'>Home</Link>
                <Link className='footer-text' to='/About'>About</Link>
                <Link className='footer-text' to='/Home'>Home</Link>
                <Link className='footer-text' to='/About'>About</Link>
            </div>

        </div>
        <div className='bottom-bar'>
            <div className="bottom-bar-content">
                <span className='footer-text'>
                    XYZSTORE 2023 CREATED BY PUCIT SOLUTIONS.
                </span>
                <img src='/payments.png' />
            </div> 
        </div>
          

       </div>
    )
}
