import React, {useRef} from 'react';
import  {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
import useToggleState from '../../hooks/useToggleState';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';
import Backdrop from './backdrop/backdrop'
import {Appbar, AppbarList, AppBarItems, AppBarItem, Logo} from './AppBar.styles';
import { auth } from '../../firebase/firebase.util';

function AppBar({currentUser}) {
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
                    {
                        currentUser? 
                        <AppBarItem>
                            <Link to="/" onClick={()=> auth.signOut()}>Sign Out</Link>
                        </AppBarItem>
                        : 
                        <AppBarItem>
                            <Link to="/sign">Sign in</Link>
                        </AppBarItem>
                    }
                    
                    <AppBarItem>
                        <Link to="/blog">BLOG</Link>
                    </AppBarItem>
                </AppBarItems>  
                <Search sideBarOpen={sideBarOpen}/>
                </AppbarList>
                {backdrop}
        </Appbar> 
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(AppBar)