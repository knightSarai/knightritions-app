import styled from 'styled-components'

export default styled.div`
    position: relative;
    width: 100%;
    margin: 6rem auto;
    margin-bottom: 2rem;
    border: 3px solid ${({theme}) => theme.primary.main};
    border-left: none;
    border-right: none;
    overflow: hidden;
`;
