import styled from 'styled-components';

export default styled.div`
    position: relative;
    margin: 45px 0;

    input{
        background: none;
        background-color: #fff;
        color: ${({theme}) => theme.dark.main};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        margin: 25px 0;
        display: block;
        width:  100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${({theme}) => theme.dark.main};
        &:focus {
            outline: none;
        }
        &:focus  ~ label{
            ${({ theme}) =>   theme.shrinkLabel()};
        }
    } 
    input[type='password'] {
        letter-spacing: 0.3em;
    }
    label {
        color: ${({theme}) => theme.dark.sec};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
        ${({value, theme}) => value && theme.shrinkLabel()}
    }
`;