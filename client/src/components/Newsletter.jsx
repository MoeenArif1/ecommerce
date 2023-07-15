import React, { useEffect, useRef, useState } from 'react'
import "../css/Newsletter.css"

import { useAppContext } from './appContext';

export function Newsletter(props) {
    const newsletterRef = useRef(null);
    const {appContext,setAppContext} = useAppContext()
    
    const [emailNews, setEmailNews] = useState('');

    const handleChange = (event) => {
        setEmailNews(event.target.value);
  };
    const subscribeNews = () => {
        const updatedAppContext= {...appContext, newsletter: true, newsletterEmail: emailNews}
        setAppContext(updatedAppContext)

    }
    return (
        <div className="newsletter-section" ref={newsletterRef}>
        <div className="newsletter-content">
            <span className="news-small-text">Newsletter</span>
            <span className="news-big-text">
                Sign up for latest updates and offers
            </span>
            <div className="news-form">
                <input type="news-text" placeholder="Email Address" value={emailNews} onChange={handleChange}/>
                <button onClick={subscribeNews}>Subscribe</button>
            </div>
            <span className="news-smaller-text">
                Will be used in accordance with our Privacy Policy
            </span>
        </div>
    </div>
    )
}
