import styled from 'styled-components';
// import  {Link} from 'react-router-dom';

export const Appbar = styled("nav")`
    min-height: 64px;
    background: #ffff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`;
export const AppbarList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.size.mobile}) {
        flex-direction: column;
    };
`;
export const Logo = styled.li`
    margin-left: 20px;
    font-size: 2rem;
    color: #ffff;
    background: none;
    @media (max-width: ${({ theme }) => theme.size.mobile}) {
        margin: auto;
    };
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
    @media (max-width: ${({ theme }) => theme.size.mobile}) {
        margin-top: 0.5rem;
    };
`;
// export const StyledLink = styled(Link)`
//     text-decoration: none;
//     color:  ${({ theme }) => theme.primary.light};
// `;