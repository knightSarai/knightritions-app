import React from 'react';
/**Redux */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selecetDirectorySections} from '../../../redux/directory/directory.selector'
/**Util */
import {v4 as uuid} from 'uuid';
import {sideBareData, otherlinks} from './sideBarData';
import {NavItems, NavItem, StyledLink, Divider, SideBarStyled} from './SideBar.styled';

function SideBar({sideBarOpen, sections}) {
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
        <React.Fragment key={uuid()}>
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
        </React.Fragment>
    )
    );

    return(
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
}

const mapStateToProps = createStructuredSelector({
    sections: selecetDirectorySections
});

export default connect(mapStateToProps)(SideBar);