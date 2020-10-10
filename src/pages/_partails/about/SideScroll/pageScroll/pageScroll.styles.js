import styled from 'styled-components';

export default styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${({img}) => img? `url(${img}) no-repeat center center/cover` : "transparent"};
        margin-bottom: 4rem;
        .title {
            line-height: 2;
            font-size:4rem;
            color: ${({theme}) => theme.secondary.main}
        }

        p {
            width: 80%;
            font-size: 22px;
            line-height: 30px;
        }

`;