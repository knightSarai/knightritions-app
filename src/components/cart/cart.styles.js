import styled from 'styled-components';

export default styled.div`
    width: 45px;
    height: 45px;
    margin-left: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    color: ${({theme}) => theme.secondary.main};
    .shopping-icon {
        width: 100%;
        height: 100%;
    }

    .item-count {
        position: absolute;
        font-size:  15px;
        font-weight: 600;
        bottom: 6px;
    }
`;
