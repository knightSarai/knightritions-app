import styled from 'styled-components'
export const StyledDirectory = styled.div`
    /* position: relative; */
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.light.main};
    margin: 0 7.5px 15px;
    overflow: hidden;
    
    &:hover {
        cursor: pointer;

        & .background-img {
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .content {
            opacity: 0.9;
        }
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
    .background-img {
        width: 100%;
        height: 100%;
        background: url(${({img}) => img}) no-repeat center center/cover;
    }
    .content {
      position: absolute;
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({theme}) => theme.light.sec};
      background: ${({theme})=> theme.primary.main};
      opacity: 0.9;
          .item-title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 22px;
            color: ${({theme})=> theme.secondary.main};
          }
        
          .item-subtitle {
            font-weight: light;
            font-size: 16px;
            color: #ffffff;
          }
      }
`;  