import styled from 'styled-components'

export default styled.div`
    position: relative;
    width: 100%;
    margin: 5px auto;
    border: 3px solid ${({theme}) => theme.light.main};
    border-left: none;
    border-right: none;
    overflow: hidden;
`;
