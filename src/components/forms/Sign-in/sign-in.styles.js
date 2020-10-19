import styled from 'styled-components';

export default styled.div`
    margin-top: 7rem;
    h1 {
        font-weight: 400;
        line-height: 2.2;
    }

    span {
        font-size:  20px;
        color: ${({theme}) => theme.dark.sec}
    }
`;