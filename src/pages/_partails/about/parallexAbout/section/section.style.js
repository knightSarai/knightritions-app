import styled from 'styled-components';

export default styled.section`
    text-align: center;
    padding: 50px 80px;
    background: ${({theme, light}) => light ? "transparent" : theme.secondary.main};
    color: ${({theme, light}) => light ? theme.secondary.main : "#fff"};
`;