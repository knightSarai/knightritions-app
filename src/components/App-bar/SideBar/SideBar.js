import React from 'react';
import {sideBareData} from './sideBarData';
import {NavItems, NavItem, StyledLink, Divider, SideBarStyled} from './SideBar.styled';

export default function SideBar({sideBarOpen}) {
    const renderedNavItems = sideBareData.map((item, idx) => (
        <NavItem key={idx}>
            {item.icon}
            <StyledLink to={item.path} >
                {item.title}
            </StyledLink>
        </NavItem>
    ))
    const renderdComponent = (
        <SideBarStyled sideBarOpen={sideBarOpen}>
            <NavItems>
                {renderedNavItems}
                <Divider/>
            </NavItems>
        </SideBarStyled>  
    );


    return renderdComponent;
}
