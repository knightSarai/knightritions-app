import styled from 'styled-components';

export const Arrow = styled.div`
    display: flex;
    position: absolute;
    top: 45%;
    ${({direction}) => direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    font-size: 2rem;
    color: ${({theme}) => theme.secondary.main};
    &:hover {
      transform: scale(1.1);
      background: ${({theme}) => theme.secondary.main};
      color: #fff;
    }
    
    /* img {
      transform: translateX(${({direction}) =>  direction === 'left' ? '-2px' : '2px'});
      &:focus {
        outline: 0;
      }
    } */
`;