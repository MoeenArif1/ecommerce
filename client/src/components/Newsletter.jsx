import React from 'react'
import "../css/Newsletter.css"
export function Newsletter(props) {
    

    return (
        <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="news-small-text">Newsletter</span>
            <span className="news-big-text">
                Sign up for latest updates and offers
            </span>
            <div className="news-form">
                <input type="news-text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <span className="news-smaller-text">
                Will be used in accordance with our Privacy Policy
            </span>
        </div>
    </div>
    )
}
