import React, {useRef} from 'react';
import  {Link} from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
import useToggleState from '../../hooks/useToggleState';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';

import {Appbar, AppbarList, AppBarItems, AppBarItem, Logo} from './AppBar.styles';

export default function Index() {
    const [sideBarOpen, toggleSideBar] = useToggleState();
    const node  = useRef();
    useOnClickOutside(sideBarOpen, node, () => toggleSideBar(false));
    return (
        <Appbar>
            <AppbarList>
                <li ref={node}>
                        <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                        <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                </li>
                <Logo className="logo">
                    <Link to="#">KnighTritions</Link>
                </Logo>
                <AppBarItems>
                    <AppBarItem>
                        <Link to="#">Home</Link>
                    </AppBarItem>
                    <AppBarItem>
                        <Link to="#">About</Link>
                    </AppBarItem>
                    <AppBarItem>
                        <Link to="#">Blog</Link>
                    </AppBarItem>
                </AppBarItems>  
                <Search sideBarOpen={sideBarOpen}/>
                </AppbarList>
        </Appbar> 
    )
}
