import React from 'react';
import {v4 as uuid} from 'uuid';
import { Controller, Scene } from 'react-scrollmagic';
import sideScrollData from './sideScroll.data';
import Page from './pageScroll';

import SideScroll from './sideScroll.styles'

export default function index() {
    const renderedPages = sideScrollData.map(({title, text, img})=>(
        <Page title={title} text={text} img={img} key={uuid()}/>
    ))
    return (     
        <SideScroll>
            <Controller>
                <Scene duration={`${(renderedPages.length - 1) * 100}%`} pin  triggerHook={0} triggerElement={'.about-title'}>
                    <div className="about-title">
                        <img src="img/logo/logo.png" alt=""/>
                    </div> 
                </Scene>
            </Controller>
            <div className="about-pages">
                {renderedPages}
            </div>
        </SideScroll>
    )
}
