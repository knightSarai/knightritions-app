import React from 'react';
import About from './about.styles';
import SideScroll from './SideScroll';

export default function Index() {
    return (
        <About>
            <SideScroll/>
            <div className="article">
                <div className="article-img">
                    <img src="img/about.jpg" alt=""/>
                </div>
                <div className="text-content">
                    <p><span>KnighTritions</span> is committed to bringing you the most innovative and effective sports nutrition products available anywhere. Real Science is always the foundation of our product development.</p>
                    <p>Our team of scientists, led by Drs, have over <span>50 years </span>of experience developing revolutionary products based on Real Science. The KnighTritions Science Team works with researchers and scientists from around the world to ensure our formulations deliver maximum results without compromising <span>your safety.</span></p>
                </div>
            </div>
        </About>
    )
}
