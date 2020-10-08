import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";

export const icon = ({className, children}) => (
    <FaSearch className={className || ""} as="span">
        {children}
    </FaSearch>
);
export const SearchWrapper = styled.li`
    margin: 0 10px;
    height:40px;
    width: 240px;
    display: inline-flex;
    background: #ffff;
    border-radius: 5px;
    @media (max-width: 720px) {
        margin: auto;
    };
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 0.5rem;
    };
`;
export const Input = styled.input`
    height:100%;
    width: 200px;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius:  5px 0px 0px 5px;
    border: 1px solid #cccccc;
    border-right: 0;
    color: #000;
    font-size: 16px;
`;
export const IconLable = styled.label`
    height:100%;
    width: 40px;
    line-height: 45px;
    background: #f2f2f2;
    text-align: center;
    border: 1px solid #cccccc;
    border-radius: 0 5px 5px 0;

    &:hover {
        background: ${({theme}) => theme.primary.light};
    }
`;
export const SearchIcon = styled(icon)`
    color : #222222;
    font-size: 18px;

`;