import React from 'react'
import {StyledDirectory} from './menu-item.styles';

export default function menuItem({title}) {
    return (
        <StyledDirectory>
            <div className="content">
                <h1 className="item-title">knight</h1>
                <span className="item-subtitle">SHOP NOW</span>
            </div>
        </StyledDirectory>    
    )
}
