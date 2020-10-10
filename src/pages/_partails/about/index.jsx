import React from 'react';
import About from './about.styles';
import SideScroll from './SideScroll';

export default function Index() {
    return (
        <About>
            <SideScroll/>
            <div className="article-img">
                <img className="article-img" src="img/logo/knightritions.png" alt=""/>
            </div>
            <div className="article-text">
                <div className="article-bg"/>
                <div className="text-content">
                    <p>KnighTritions is committed to bringing you the most innovative and effective sports nutrition products available anywhere. Real Science is always the foundation of our product development.</p>
                    <p>Our team of scientists, led by Drs, have over 50 years of experience developing revolutionary products based on Real Science. The Dymatize Science Team works with researchers and scientists from around the world to ensure our formulations deliver maximum results without compromising your safety.</p>
                </div>
            </div>
        </About>
    )
}
