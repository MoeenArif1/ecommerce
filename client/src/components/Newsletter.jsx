import React from 'react'
import "../css/Newsletter.css"
export function Newsletter(props) {
    

    return (
        <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">
                Sign up for latest updates and offers
            </span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <span className="smaller-text">
                Will be used in accordance with our Privacy Policy
            </span>
            {
            /* <span className="social-icons">
                <div className="icon">
                    linkedin
                </div>
                <div className="icon">
                    Facebook
                </div>
                <div className="icon">
                    twitter
                </div>
                <div className="icon">
                    instagram
                </div>
                
            </span> */
            }
        </div>
    </div>
    )
}
