import styled from 'styled-components';

export const Item = styled.div`
    position: relative;
    width: 350px;
    height: 350px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.light.sec};
    border-radius: 20px;
    overflow: hidden;
    &::before {
    content: "";
    position: absolute;
    top: -55%;
    width: 100%;
    height: 100%;
    background: #2196f3;
    transform: skewY(345deg);
    transition: 0.5s;
    }
    
    &:hover::before {
    top: -70%;
    transform: skewY(390deg)
    }

    .img-box {
        position: relative;
        width: 50%;
        height:50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        z-index: 1;
        
        .img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    &:hover {
        img {
            transform: scale(0.7)
        }
    }

    .content-box {
        position: relative;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1;

        h3 {
            font-size: 18px;
            color: #000;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .price {
            font-size: 24px;
            color: #000;
            letter-spacing: 1px;
            font-weight: 500;
        }

        .cart {
            position: relative;
            top: 100px; 
            opacity: 0;
            padding: 10px 30px;
            margin-top: 5px;
            color: #fff;
            text-decoration: none;
            background: #2196f3;
            border-radius: 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: 0.5s;
        }

        
    }
    &:hover {
            .cart {
                top: 0; 
                opacity: 1;
        }
        }
`;