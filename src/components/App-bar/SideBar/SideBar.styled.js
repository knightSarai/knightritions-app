import styled from 'styled-components';
import  {Link} from 'react-router-dom';

export const SideBarStyled = styled("nav")`
    position: fixed;
    z-index: 9;
    top: 0;
    left:0;
    font-size: 1rem;
    background: #ffff;
    color: ${({theme}) => theme.secondary.main};
    border-right: 1px solid #3333;
    height:100vh;
    width: 230px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ sideBarOpen }) => sideBarOpen ? 'translateX(0)' : 'translateX(-100%)'};
    @media (max-width: ${({ theme }) => theme.size.mobile}) {
        width: 60%;
    };
`;
export const NavItems = styled("ul")`
    margin-top: 80px;
    margin-left: 15%;
    width: 80%;
    p {
        color: ${({theme}) => theme.dark.sec};
        font-size: 15px;
        font-weight: 600;
        padding: 0.5rem 0;
    }
   
`;
export const NavItem = styled("li")`
    background: inherit;
    font-size: 1rem;
    margin-bottom: 0.5rem; 
    a {
        padding: 0rem;
    }
    svg {
        margin: 0 0.5rem;
    }
`;
export const StyledLink = styled(Link)`
    text-transform: uppercase;
    color: inherit;

    &:hover {
        color: ${({theme}) => theme.primary.main};
    }
`;
export const Divider = styled.hr`
    border: 0;
    height: 1.2px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(51, 51, 51, 0.3), rgba(0, 0, 0, 0.1));
`;