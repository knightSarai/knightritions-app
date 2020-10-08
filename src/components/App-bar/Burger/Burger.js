import React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = ({sideBarOpen, toggleSideBar}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleSideBar();
  }
  return (
    <StyledBurger open={sideBarOpen} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;