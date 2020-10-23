import styled from 'styled-components';

export default styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 20px;
    background: ${({theme, isGoogleSignIn}) => isGoogleSignIn? theme.secondary.main : theme.primary.main};
    color: #fff;
    text-transform : uppercase;
    font-weight: 300;
    border: none;
    cursor: pointer;

    &:hover {
        background: ${({ isGoogleSignIn}) => !isGoogleSignIn && " #fff"};
        color:${({theme, isGoogleSignIn}) => !isGoogleSignIn && theme.primary.main};
        border: ${({theme, isGoogleSignIn}) => isGoogleSignIn? "none" : `0.2px solid ${theme.primary.main}`};
        opacity:${({isGoogleSignIn}) => isGoogleSignIn? "0.9" : "1"};
    }
`;