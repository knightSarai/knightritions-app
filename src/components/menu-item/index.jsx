import React from 'react'
import {StyledDirectory} from './menu-item.styles';
// import im from '../../img/clothes.jpg'
export default function menuItem({title, imgUrl}) {
    console.log(imgUrl);
    return (
        <StyledDirectory img={imgUrl}>
            <div className="background-img"/>
            <div className="content">
                <h1 className="item-title">{title}</h1>
                <span className="item-subtitle">SHOP NOW</span>
            </div>
        </StyledDirectory>    
    )
}
