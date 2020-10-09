import styled from 'styled-components'

const Slides = styled.div`
    display: flex;
    width: 100%;
    height: 320px;
    transform: ${({transform}) => transform};
    transition: ${({transition}) => transition};
    img {
        height:100%;
        width:100%;
    }
`
export default Slides