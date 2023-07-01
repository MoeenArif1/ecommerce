import React from 'react'
import { Link } from 'react-router-dom'

export function Footer(props) {
    

    return (
       <div className='footer'>
        <div className='footer-details'>
            <div className='footer-about'>
                <div> About</div>
                <div>
                Our e-commerce website specializing in tech is your one-stop destination for all things technology.
                 We offer a wide range of cutting-edge products, including smartphones, laptops, smart home devices, and gaming accessories.
                  With our user-friendly interface, secure payment options, and efficient delivery services, we aim to provide an unmatched
                    shopping experience for tech enthusiasts. Whether you're looking to upgrade your gadgets or stay up-to-date with the latest tech trends,
                     our platform has you covered.
                </div>
            </div>
            <div className='footer-contact'>
                <div>Contact</div>

            </div>
            <div className='footer-categories'>
                <div>Category</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className='Pages'>
                <div>Pages</div>
                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Home'>Home</Link>
                <Link to='/About'>About</Link>
              </div>

        </div>
        <div className='footer-info'>
            <div className='footer-info-1'>
                XYZSTORE 2023 CREATED BY PUCIT SOLUTIONS.
            </div>
        </div>
            <img src='/payments.png' />

       </div>
    )
}
