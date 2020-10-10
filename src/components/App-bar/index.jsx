import React, {useRef} from 'react';
import  {Link} from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
import useToggleState from '../../hooks/useToggleState';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';
import Backdrop from './backdrop/backdrop'
import {Appbar, AppbarList, AppBarItems, AppBarItem, Logo} from './AppBar.styles';

export default function Index() {
    const [sideBarOpen, toggleSideBar] = useToggleState();
    const node  = useRef();
    useOnClickOutside(sideBarOpen, node, () => toggleSideBar(false));
    let backdrop;
    if (sideBarOpen) {
        backdrop = (
            <Backdrop/>
        );
    }
    return (
        <Appbar className="container">
            <AppbarList>
                <li ref={node}>
                        <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                        <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                </li>
                <Logo className="logo">
                    <Link to="/"><img src="/img/logo/logo.png" alt=""/></Link>
                </Logo>
                <AppBarItems>
                    <AppBarItem>
                        <Link to="/shop">SHOP</Link>
                    </AppBarItem>
                    <AppBarItem>
                        <Link to="/blog">BLOG</Link>
                    </AppBarItem>
                    <AppBarItem>
                        <Link to="/contact">Sign in</Link>
                    </AppBarItem>
                </AppBarItems>  
                <Search sideBarOpen={sideBarOpen}/>
                </AppbarList>
                {backdrop}
        </Appbar> 
    )
}