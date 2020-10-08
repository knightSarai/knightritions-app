import React from 'react';
import {SearchWrapper, SearchIcon, IconLable, Input} from './SearchInput.styled';

export default function SearchInput({sideBarOpen}) {
    return (
        <SearchWrapper sideBarOpen={sideBarOpen}>
            <Input as="input" type="text" placeholder="Search..."/>
            <IconLable>
                <SearchIcon/>
            </IconLable>
        </SearchWrapper>
    )
}
