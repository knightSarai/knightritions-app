import styled from 'styled-components';

export default styled.div`

    width: 480px;
    display: flex;
    flex-direction: column;
    h1 {
        font-weight: 400;
        line-height: 2.2;
    }

    span {
        font-size:  20px;
        color: ${({theme}) => theme.dark.sec}
    }
    .buttons{
        display: flex;
        justify-content: space-between
    }
`;