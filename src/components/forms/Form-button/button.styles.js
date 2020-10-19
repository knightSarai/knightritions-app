import styled from 'styled-components';

export default styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 20px;
    background: ${({theme}) => theme.primary.main};
    color: #fff;
    text-transform : uppercase;
    font-weight: 300;
    border: none;
    cursor: pointer;

    &:hover {
        background: #fff;
        color:${({theme}) => theme.primary.main};
        border: 1px solid #000;
    }
`;