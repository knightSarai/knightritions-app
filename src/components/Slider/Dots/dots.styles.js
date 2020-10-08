import styled from 'styled-components';

export const Dots = styled.div`
        position: absolute;
        bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const Dot = styled.span`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${({active}) => active ? 'black' : 'white'};
`;
