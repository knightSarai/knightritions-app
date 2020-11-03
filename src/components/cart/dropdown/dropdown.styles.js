import styled from 'styled-components';

const height = 340;
export default styled.div`
    background: #fff;
    position: fixed;
    width: 290px;
    height: ${height}px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid ${({theme}) => theme.light.main};
    top: 75px;
    right: 35px;
    z-index: 500;

    .cart-items {
        height:  ${height - 100}px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    button {
        margin-top: auto;
    }
`;