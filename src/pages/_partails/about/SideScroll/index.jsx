import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import sideScrollData from './sideScroll.data';
import Page from './pageScroll';

import SideScroll from './sideScroll.styles'

export default function index() {
    const renderedPages = sideScrollData.map(({title, text, img})=>(
        <Page title={title} text={text} img={img}/>
    ))
    return (     
        <SideScroll>
            <Controller>
                <Scene duration={`${(renderedPages.length - 1) * 120}%`} pin  triggerHook={0} triggerElement={'.about-title'}>
                    <div className="about-title">
                        <img src="img/logo/logo.png" alt=""/>
                    </div>  
                </Scene>
            </Controller>
            <div class="about-pages">
                {renderedPages}
            </div>
        </SideScroll>
    )
}
