import styled from 'styled-components';

export default styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .image-container {
      width: 23%;
      height: 160px;
      padding-right: 25px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .name,
    .quantity,
    .price {
      width: 23%;
    }

    .quantity {
        display: flex;

        .arrow {
            cursor: pointer;
        }

        .value {
            margin: 0 10px;
        }
        padding-left: 20px;
    }

    .remove-button {
      padding-left: 12px;
      cursor: pointer;
    }
`;