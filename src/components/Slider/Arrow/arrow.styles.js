import styled from 'styled-components';

export const Arrow = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    ${({direction}) => direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    img {
      transform: translateX(${({direction}) =>  direction === 'left' ? '-2px' : '2px'});
      &:focus {
        outline: 0;
      }
    }
`;