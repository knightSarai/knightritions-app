import React from 'react';
import {withRouter} from 'react-router-dom'
import {StyledDirectory} from './menu-item.styles';

function menuItem({title, imgUrl, history, match, linkUrl}) {
    console.log(imgUrl);
    console.log(match);
    return (
        <StyledDirectory img={imgUrl} onClick={() => history.push(`${linkUrl}`)}>
            <div className="background-img"/>
            <div className="content">
                <h1 className="item-title">{title}</h1>
                <span className="item-subtitle">SHOP NOW</span>
            </div>
        </StyledDirectory>    
    )
}

export default  withRouter(menuItem);