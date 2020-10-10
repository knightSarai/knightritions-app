import styled from 'styled-components';

export default styled.div`
    position: relative;
    opacity: 0.8;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: ${({img}) => `url(${img})`};
    min-height: 500px;
    
    .ptext {
        position: absolute;
        top: 50%;
        width: 100%;
        background-color: transparent;
        text-align: center;
        color: #fff;
        font-size: 27px;
        letter-spacing: 8px;
        text-transform: uppercase;
    }
`;