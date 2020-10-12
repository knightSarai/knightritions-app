import styled from 'styled-components';

export const Collection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    margin-top: 120px;
    font-family: inherit;
    .title {
        font-size: 28px;
        font-weight: 400;
        color: ${({theme}) => theme.primary.main};
        margin-bottom: 25px;
    }

    .preview {
        display: flex;
        justify-content: space-between;
    }
`;