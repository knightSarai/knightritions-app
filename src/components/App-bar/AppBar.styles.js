import styled from 'styled-components';

export const Appbar = styled("nav")`
    position: fixed;
    min-width: 100%;
    top:0px;
    min-height: 75px;
    background: #ffff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-transform: uppercase;
    z-index:15;

`;
export const AppbarList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        flex-direction: column;
    };
`;
export const Logo = styled.li`
    margin-left: 3rem;
    font-size: 2rem;
    color: #ffff;
    width: 200px;
    height: 65px;
    background: none;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        margin: auto;
    };

    a { 
        img:focus{
            outline: none
        }
    }
`;
export const AppBarItems = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: auto;

`;
export const AppBarItem = styled.li`
    padding: 0 0.7rem;
    margin: 0 0.1rem;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        margin-top: 0.5rem;
    };
`;
