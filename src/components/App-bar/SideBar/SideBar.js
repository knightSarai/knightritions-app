import React from 'react';
import {sideBareData, otherlinks} from './sideBarData';
import {NavItems, NavItem, StyledLink, Divider, SideBarStyled} from './SideBar.styled';
import directoryData from '../../directory/dirctoryData';

export default function SideBar({sideBarOpen}) {
    const {sections} = directoryData;
    const renderedSections = sections.map(({id, linkUrl, title}) =>(
        <NavItem key={id}>
            <StyledLink to={linkUrl} >
                {title}
            </StyledLink>
        </NavItem>
    ) )
    const renderedNavItems = sideBareData.map((item, idx) => (
        <NavItem key={idx}>
            <StyledLink to={item.path} >
                {item.title}
            </StyledLink>
        </NavItem>
    ));
    const renderedOtherLinks = otherlinks.map(({title, products}, idx) => (
        <>
            <p>{title}</p>
            {products.map(({path, name}) => (
                <NavItem key={name}>
                    <StyledLink to={path} >
                        {name}
                    </StyledLink>
                </NavItem> 
            )
            )}
            {!(idx ===otherlinks - 1) && <Divider/>}
        </>
    )
    );

    const renderdComponent = (
        <SideBarStyled sideBarOpen={sideBarOpen}>
            <NavItems>
                <p>Quick access</p>
                {renderedNavItems}
                <Divider/>
                <p>shop by category</p>
                {renderedSections}
                <Divider/>
                {renderedOtherLinks}
            </NavItems>
            
        </SideBarStyled>  
    );


    return renderdComponent;
}
