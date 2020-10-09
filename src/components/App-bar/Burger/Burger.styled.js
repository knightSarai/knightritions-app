import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: ${({open}) => open ? "fixed" : "relative"};
  top:  ${({open}) => open ? "10px" : "0px"};
  left: ${({open}) => open ? "40px" : "0px"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
  div {
    width: 30px;
    height: 4px;
    background: ${({ theme, open }) => open? theme.secondary.main : theme.primary.main };
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
        position: fixed;
        top:  10px;
        left: 12px;
    };
`;